import React, { useState, useEffect } from 'react'
// import PropTypes from 'prop-types'
import axios from 'axios'
import Nav from './Nav'
import TableOfContents from './TableOfContents'
import Criteria from './Criteria'

// const queryString = window.location.search
// const urlParams = new URLSearchParams(queryString)

const section = window.location.pathname.split('/').filter(str => str !== '' && str !== 'standard')[0]

const DigitalStandard = () => {
  const [digitalStandard, setDigitalStandard] = useState([])
  const [activeSection, setActiveSection] = useState(false)
  const [nextSection, setNextSection] = useState('')

  useEffect(async () => {
    // const standard = await axios(`https://thedigitalstandard.github.io/thedigitalstandard.org/v0.0.1/`)
    const standard = await axios(`http://localhost:4000/data/index.json`)

    setDigitalStandard(standard.data)
    if (section) {
      setActiveSection(standard.data.find(item => item.section === section))
      const index = standard.data.findIndex(item => item.section === section)
      const loop = standard.data.length > index + 1
      const nextIndex = loop ? index + 1 : 0
      setNextSection(standard.data[nextIndex].section)
    }

  }, [])

  return (
    <div className="standard-layout">
      <Nav activeSection={section} digitalStandard={digitalStandard} />
      {activeSection && (
        <>
          <TableOfContents activeSection={activeSection} />
          <div className="standard-content">
            {activeSection && activeSection.areas.map(area => (
              <div key={area.slug} className="m-5">
                {area && area.standards.map(standard => {
                  const status = {
                    "1: Green": "bg-success",
                    "2: Yellow": "bg-warning",
                    "3: Red": "bg-danger"
                  }

                  return (
                    <div key={standard.slug} id={standard.slug} className="row" >
                      <div className="col-12">
                        <div className="d-flex align-items-center flex-wrap">
                          <div>
                            <h1 className="text-serif text-thin mr-5 mb-n1">{area.label}</h1>
                          </div>
                          <div>
                            <div className="d-flex align-items-center">
                              <span className={`bg-status mr-2 ${status[standard.status]}`}></span>
                              <h2 className="blue text-uppercase m-0 text-nowrap">{standard.title}</h2>
                              {standard.github_url && (
                                <a href={standard.github_url} target="_blank" className="social-link">
                                  <i className="ri-github-fill  text-medium ml-2" />
                                </a>
                              )}
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
            <div className="px-5">
              <a href={`/standard/${nextSection}`} className="btn btn-full-width">Next Test Category:&nbsp;
                <span className="font-weight-bold">{nextSection}&nbsp; &#9654;</span>
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

DigitalStandard.propTypes = {

}

export default DigitalStandard
