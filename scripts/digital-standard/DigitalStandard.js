import React, { useState, useEffect } from 'react'
// import PropTypes from 'prop-types'
import axios from 'axios'
import TableOfContents from './TableOfContents'
import Criteria from './Criteria'

const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const urlSection = window.location.pathname.split('/').filter(str => str !== '' && str !== 'standard')[0]


const DigitalStandard = () => {
  const [loading, setLoading] = useState(true)
  const [releases, setReleases] = useState([])
  const [activeRelease, setActiveRelease] = useState(urlParams.get('version'))
  const [digitalStandard, setDigitalStandard] = useState([])
  const [activeSection, setActiveSection] = useState(false)
  const [nextSection, setNextSection] = useState('')

  useEffect(async () => {
    try {
      const getReleases = await axios('https://api.github.com/repos/TheDigitalStandard/thedigitalstandard.org/releases')
      setReleases(getReleases.data.map(release => release.tag_name))
      if (!activeRelease) {
        window.location.replace(`${window.location.pathname}?version=${getReleases.data[0].tag_name}`)
      }
      // const standard = await axios(`https://thedigitalstandard.github.io/thedigitalstandard.org/${activeRelease}/`)
      const standard = await axios(`http://localhost:4000/data/index.json`)
      if (standard) {
        setDigitalStandard(standard.data)
        setLoading(false)
        if (urlSection) {
          setActiveSection(standard.data.find(item => item.section === urlSection))
          const index = standard.data.findIndex(item => item.section === urlSection)
          const loop = standard.data.length > index + 1
          const nextIndex = loop ? index + 1 : 0
          setNextSection(standard.data[nextIndex].section)
        }
      }

    } catch (error) {
      console.log(error)
      setLoading(false)
      setDigitalStandard(false)
    }

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
                      className="dropdown-item"
                      href={`${window.location.pathname}?version=${release}`}>
                      {release}
                    </a>
                  ))}
                </div>
              </div>

              <ul className="nav py-2">
                {digitalStandard && digitalStandard.map(({ section }) => {

                  return (
                    <li key={section} className="nav-item">
                      <a className={`nav-link ${activeSection === section ? 'active' : ''}`} href={`/standard/${section}/${queryString}`}>
                        {section}
                      </a>
                    </li>
                  )
                })}
              </ul>

              <a className="d-none d-md-flex" id="downloadCTA" href={`https://thedigitalstandard.github.io/thedigitalstandard.org/${activeRelease}/standard.csv`}>Download the Digital Standard (.csv)</a>
            </nav>
            {activeSection && (
              <>
                <TableOfContents activeSection={activeSection} />
                <div className="standard-content">
                  {activeSection && activeSection.areas.map(area => (
                    <div key={area.slug} className="m-5">
                      {area && area.standards.map(standard => {
                        const status = {
                          "1": "bg-success",
                          "2": "bg-warning",
                          "3": "bg-danger"
                        }

                        return (
                          <div key={standard.slug} id={standard.slug} className="row" >
                            <div className="col-12">
                              <p className="text-sans-serif text-muted text-capitalize">
                                <small>{activeSection.section} / {area.label} / <span className="text-dark">{standard.title}</span></small>
                              </p>
                              <div className="d-flex align-items-center flex-wrap">
                                <div>
                                  <h1 className="text-serif text-thin mr-5 mb-n1">{area.label}</h1>
                                </div>
                                <div>
                                  <div className="d-flex align-items-center">
                                    <span className={`bg-status mr-2 ${status[standard.status]}`}></span>
                                    <h2 className="blue text-uppercase m-0 text-nowrap">{standard.title}</h2>
                                    <a href={`#`} target="_blank" className="social-link">
                                      <i className="ri-github-fill  text-medium ml-2" />
                                    </a>

                                  </div>
                                </div>
                              </div>
                              <hr />
                              {standard.criteria && standard.criteria.map(criteria => <Criteria criteria={criteria} />)}
                            </div>
                          </div>
                        )
                      }
                      )}
                    </div>
                  ))}
                  <div className="px-5 mb-5">
                    <a href={`/standard/${nextSection}`} className="btn btn-full-width">Next Test Category:&nbsp;
                      <span className="font-weight-bold">{nextSection}&nbsp; &#9654;</span>
                    </a>
                  </div>
                </div>
              </>
            )}
          </>
        )}
    </div>
  )
}

DigitalStandard.propTypes = {

}

export default DigitalStandard
