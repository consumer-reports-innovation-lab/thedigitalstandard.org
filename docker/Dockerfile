FROM ubuntu:22.04

ARG USER=digitalstandard
ENV user=${USER}


ENV NODE_MAJOR=18
ENV NODE_OPTIONS=--openssl-legacy-provider

# Install basic packages and dependencies
RUN apt-get update && DEBIAN_FRONTEND=noninteractive apt-get install -y nocache \
    ca-certificates \
    zip \
    unzip \
    tar \
    gzip \
    wget \
    zlib1g \
    curl \
    gnupg \
    gnupg2 \
    apt-utils \
    xz-utils \
    python3 \
    build-essential

# Install nodejs
RUN mkdir -p /etc/apt/keyrings && \
    curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg && \
    echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | tee /etc/apt/sources.list.d/nodesource.list

RUN apt-get update && DEBIAN_FRONTEND=noninteractive apt-get install -y nodejs  && \
    node -v  && \
    npm -v

# Install yarn
RUN npm install -g yarn@1.22.19  && \
    yarn -v

WORKDIR /app

RUN npm install --global npm@latest
RUN npm install --global node-gyp@latest
RUN python3 --version

# Install ruby
COPY .ruby-version .ruby-version
RUN sed -i 's/^mesg n$/tty -s \&\& mesg n/g' /root/.profile
SHELL ["/bin/bash", "-l", "-c"]
RUN gpg2 --keyserver keyserver.ubuntu.com --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB
RUN curl -sSL https://get.rvm.io | bash -s stable
RUN echo 'source /etc/profile.d/rvm.sh' >> /etc/profile && \
    rvm requirements && \
    rvm pkg install openssl  && \
    rvm install $(cat .ruby-version) --with-openssl-dir=/usr/local/rvm/usr && \
    gem update --system 3.2.3 && \
    rvm use --default $(cat .ruby-version) && \
    gem install bundler -v 2.4.22
RUN rvm --version && ruby --version

RUN groupadd -g 1001 ${USER} && \
    useradd -m -u 1001 -g ${USER} -s /bin/bash ${USER} && \
    chown -R ${USER}:${USER} \
    /app

COPY --chown=${USER}:${USER} . /app
RUN chmod +x /app/docker/entrypoint.sh

USER ${USER}

# Initialize & install dependencies
RUN yarn && \
    npx browserslist@latest --update-db --yes


CMD ["/app/docker/entrypoint.sh"]