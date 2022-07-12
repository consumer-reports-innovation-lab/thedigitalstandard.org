import React, { useState, useEffect } from 'react'
// import PropTypes from 'prop-types'
import axios from 'axios'
import TableOfContents from './TableOfContents'
import { api_url } from './config'
import Section from './Section'
import DownloadCSV from './DownloadCSV'


const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const urlSection = window.location.pathname.split('/').filter(str => str !== '' && str !== 'standard')[0]


const DigitalStandard = () => {
  const [loading, setLoading] = useState(true)
  const [releases, setReleases] = useState([])
  const [activeRelease, setActiveRelease] = useState(urlParams.get('version'))
  const [digitalStandard, setDigitalStandard] = useState([])
  const [activeSection, setActiveSection] = useState(urlSection)
  const [nextSection, setNextSection] = useState('')

  useEffect(() => {
    async function fetchData() {
      try {
        // const getReleases = await axios(release_url)
        const getReleases = { data: [{ tag_name: 'v1.3.0' }] }
        setReleases(getReleases.data.map(release => release.tag_name))
        if (!activeRelease) {
          window.location.replace(`${window.location.pathname}?version=${getReleases.data[0].tag_name}`)
        }
        // const standard = await axios(`${api_url}${activeRelease}/`)
        const { data: { section: standard } } = await axios(`${api_url}${activeRelease}.json`)
        if (standard) {
          setDigitalStandard(standard)
          setLoading(false)
          if (urlSection) {
            setActiveSection(standard.find(({ title_sect }) => title_sect.toLowerCase() === urlSection))
            const index = standard.findIndex(({ title_sect }) => title_sect.toLowerCase() === urlSection)
            const loop = standard.length > index + 1
            const nextIndex = loop ? index + 1 : 0
            setNextSection(standard[nextIndex])
          }
        }

      } catch (error) {
        console.log(error)
        setLoading(false)
        setDigitalStandard(false)
      }
    }

    fetchData()
  }, [])


  return (
    <div className={`standard-layout ${loading ? 'loading' : ''}`}>
      {!digitalStandard ? (
        <section>
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-12 col-sm-8 col-md-6">
                <div className="text-dark">
                  <p>
                    <strong>Uh Oh....</strong><br />
                    It looks like you are requesting a version of the standard that does not exist. Please select one of the following:
                  </p>

                  {releases && releases.map(release => (
                    <a
                      className="btn btn-block btn-dark text-nocase"
                      href={`${window.location.pathname}?version=${release}`}>
                      {release}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <>
          <nav id="standardnav">
            <div className="dropdown mr-3">
              <button className="btn btn-secondary dropdown-toggle d-none d-sm-flex align-items-center" type="button" id="versionDropDown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {activeRelease}
              </button>
              <div className="dropdown-menu" aria-labelledby="versionDropDown">
                <strong className="px-3">Choose version:</strong><br />
                {releases && releases.map(release => (
                  <a
                    key={release}
                    className="dropdown-item"
                    href={`${window.location.pathname}?version=${release}`}>
                    {release}
                  </a>
                ))}
              </div>
            </div>

            <ul className="nav py-2">
              {digitalStandard && digitalStandard.map(({ id, title_sect }) => {
                title_sect = title_sect.toLowerCase()
                return (
                  <li key={id} className="nav-item">
                    <a className={`nav-link ${activeSection === title_sect ? 'active' : ''}`} href={`/standard/${title_sect}/${queryString}`}>
                      {title_sect}
                    </a>
                  </li>
                )
              })}
            </ul>

            {digitalStandard && digitalStandard.length && <DownloadCSV data={digitalStandard} />}

          </nav>

          {activeSection && activeSection.title_sect && <Section activeSection={activeSection} nextSectionTitle={nextSection.title_sect} urlParams={urlParams} />}
        </>
      )}
    </div>
  )
}

DigitalStandard.propTypes = {

}

export default DigitalStandard
