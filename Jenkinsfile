@Library(['k8s-jenkins-il-shared-lib@master', 'k8s-jenkins-common-shared-lib@master']) _
import com.consumerreports.common.Config
import com.consumerreports.common.Kubectl
import com.consumerreports.common.ContainerImage
import com.consumerreports.common.Slack
import com.consumerreports.common.Utility
import com.consumerreports.common.Kustomize

pipelineConfig = loadVariables(path: 'com/consumerreports/il/digitalstandard/digitalstandard.yaml')

pipeline {
  agent {
    kubernetes {
      label "build-${pipelineConfig.application.name}-${BUILD_NUMBER}"
      yaml devopsPodTemplate.kanikoDeploy8gRam()
    }
  }
  options {
    timeout(time: 60, unit: 'MINUTES')
    disableConcurrentBuilds()
    ansiColor('xterm')
    timestamps()
    skipDefaultCheckout()
  }
  stages {
    stage('Checkout code') {
      steps {
        container('build'){
          script {
            // Checkout jenkinsfiles-il from stash.consumer.org
            checkoutCodeInFolder(codeDir: WORKSPACE, repositoryUrl: pipelineConfig['buildCode']['repositoryUrl'], branch: pipelineConfig['buildCode']['repositoryBranch'])
            // Checkout application code from github.com
            dir(pipelineConfig['application']['codeDir']){
                checkout scm
            }
          }
        }
      }
    }
    stage('Set environment variables'){
      steps {
        container('deploy'){
          script {
            switch (env.BRANCH_NAME) {
              case ~/(?i)^develop$/:
                  env.DEPLOYMENT_ENVIRONMENT = 'dev'
                  env.DEPLOYMENT_ENABLED = true
                  break
              case ~/(?i)^master$/:
                  env.DEPLOYMENT_ENVIRONMENT = 'stage'
                  env.DEPLOYMENT_ENABLED = true
                  break
              // case ~/(?i)^production$/:
              //     env.DEPLOYMENT_ENVIRONMENT = 'prod'
              //     env.DEPLOYMENT_ENABLED = true
              //     break
              default:
                  env.DEPLOYMENT_ENVIRONMENT = 'dev'
                  env.DEPLOYMENT_ENABLED = false
                  break
            }
            // Pipeline config: https://stash.consumer.org/projects/K8S/repos/k8s-jenkins-il-shared-lib/browse/resources/com/consumerreports/il/datarightsprotocol-website
            env.KUBECTL_CONTEXT         = pipelineConfig['environments'][env.DEPLOYMENT_ENVIRONMENT]['kubectlContext']
            env.DOCKER_IMAGE_NAME       = pipelineConfig['application']['name']
            env.BUILD_CODE_SUB_DIR      = pipelineConfig['application']['name']
            env.SLACK_WEBHOOK           = pipelineConfig['slack']['webhook']
            env.SLACK_CHANNEL           = pipelineConfig['slack']['channel']
            env.SLACK_TOKEN             = pipelineConfig['slack']['token']
            env.KUBECTL_CONTEXT         = pipelineConfig['environments'][env.DEPLOYMENT_ENVIRONMENT]['kubectlContext']
            env.KUBECTL_NAMESPACE       = pipelineConfig['environments'][env.DEPLOYMENT_ENVIRONMENT]['kubectlNamespace']
            env.CERTIFICATE_NAME        = pipelineConfig['environments'][env.DEPLOYMENT_ENVIRONMENT]['certificateName']
            env.DEPLOYMENT_TIMEOUT      = pipelineConfig['environments'][env.DEPLOYMENT_ENVIRONMENT]['deployment']['timeout']
            env.DEPLOYMENT_DRY_RUN      = pipelineConfig['environments'][env.DEPLOYMENT_ENVIRONMENT]['deployment']['dryRun']['enabled']
            env.NOTIFICATIONS_DEPLOYMENT_SLACK = pipelineConfig['environments'][env.DEPLOYMENT_ENVIRONMENT]['notifications']['deployment']['slack']['enabled']
            env.CONTAINER_SCANNER_ENABLED = pipelineConfig['environments'][env.DEPLOYMENT_ENVIRONMENT]['containerScanner']['enabled']
            env.APPLICATION_CODE_DIR    = pipelineConfig['application']['codeDir']
            dir(env.APPLICATION_CODE_DIR) {
              sh "git config --global --add safe.directory '*'"
              env.DOCKER_IMAGE_TAG = getCommitHash()
            }
            // If we re-run the job we want to redeploy but we don't want to rebuild the image
            if (ContainerImage.isPresentDocker(this, env.DOCKER_IMAGE_NAME, env.DOCKER_IMAGE_TAG)){
                env.BUILD_ENABLED = false
            } else {
                env.BUILD_ENABLED = true
            }
          }
        }
      }
    }
    stage('Test build container image') {
      when {
        anyOf {
          expression { env.BRANCH_NAME ==~ /(?i)^pr-(\d)*$/ }
          expression { env.BRANCH_NAME ==~ /(?i)^feature\/.*$/ }
        }
      }
      environment { 
        PATH = "/busybox:/kaniko:$PATH"
      }
      steps {
        container('kaniko'){
          script {
            // Try to build the image without pusing it to the docker registry
            ContainerImage.buildKanikoDockerfile(this, [buildMode: "no-push", contextPath: "`pwd`/${env.APPLICATION_CODE_DIR}", dockerfilePath: "`pwd`/${env.APPLICATION_CODE_DIR}/docker/Dockerfile", imageName: env.DOCKER_IMAGE_NAME, imageTag: env.DOCKER_IMAGE_TAG, args: ""])
          }
        }
      }
    }
    stage('Build container image') {
      when {
        allOf {
          expression { env.BUILD_ENABLED.toBoolean() }
          expression { env.DEPLOYMENT_ENABLED.toBoolean() }
        }
      }
      environment { 
        PATH = "/busybox:/kaniko:$PATH"
      }
      steps {
        container('kaniko'){
          script {
            ContainerImage.buildKanikoDockerfile(this, [contextPath: "`pwd`/${env.APPLICATION_CODE_DIR}", dockerfilePath: "`pwd`/${env.APPLICATION_CODE_DIR}/docker/Dockerfile", imageName: env.DOCKER_IMAGE_NAME, imageTag: env.DOCKER_IMAGE_TAG, args: ""])
          }
        }
      }
    }
    stage('Deploy') {
      when { 
        expression { env.DEPLOYMENT_ENABLED.toBoolean() }
      }        
      steps {
        container('deploy'){
          script {
            Slack.slackSendDeployment(this, [status: 'start'])
            Kubectl.showClusterInfo(this, env.KUBECTL_CONTEXT)
            Kustomize.deployKustomize(
              this, [
              kubectlContext        : env.KUBECTL_CONTEXT,
              deploymentEnvironment : env.DEPLOYMENT_ENVIRONMENT,
              kustomizeManifestsPath: "${env.BUILD_CODE_SUB_DIR}/kustomize",
              baseManifestFilename  : 'deployment.yaml',
              basePath              : 'base',
              overlayPath           : 'overlays',
              imageTag              : env.DOCKER_IMAGE_TAG,
              imageTagPlaceholder   : 'APP_CONTAINER_TAG',
              dryRun                : env.DEPLOYMENT_DRY_RUN
            ])
          }
        }
      }
      post {
        success {
          script {
            Slack.slackSendDeployment(this, [status: 'finish'])
          }
        }
        failure {
          script {
            Slack.slackSendDeployment(this, [status: 'failed'])
          }
        }
      }
    }
    stage('Validate Deployment') {
      when { 
        expression { env.DEPLOYMENT_ENABLED.toBoolean() }
      }      
      steps {
        container('deploy'){
          script {
            validateDeployment(deploymentEnvironment: env.DEPLOYMENT_ENVIRONMENT, deploymentTimeout: env.DEPLOYMENT_TIMEOUT)
          }
        }
      }
    }
  }
  post {
    cleanup {
      cleanWs()
    }
  }
}
