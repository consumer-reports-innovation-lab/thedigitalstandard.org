import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { organization, repository, api_url, release_url } from '../config'

const CaseStudyMap = ({ release, areas }) => {
  const [loading, setLoading] = useState(true)
  const [digitalStandard, setDigitalStandard] = useState([])
  const activeAreas = areas.split(',')


  useEffect(async () => {
    try {
      const standard = await axios(`${api_url}${release}/`)

      if (standard) {
        setDigitalStandard(standard.data)
        setLoading(false)
      }

    } catch (error) {
      console.log(error)
      setLoading(false)
      setDigitalStandard(false)
    }

  }, [])
  return (
    <div className="row">
      <div className="col-12">
        <div className="border">
          <div className="area p-3 text-center d-flex justify-content-between">
            <h3 className="mb-0">Digital Standard <span className="d-none d-sm-inline">Criteria</span></h3>
            <span className='badge badge-secondary d-flex align-items-center p-2 px-4'>Release: {release}</span>
          </div>
        </div>
        <div className="standard-mapping">
          {digitalStandard && digitalStandard.map((section, index) => {
            const { label, areas } = section

            return (
              <div className="section">
                <div className={`area ${index % 2 == 0 ? 'bg-dark' : 'bg-mid'}`}>
                  {section.section}
                </div>
                {
                  [...Array(5)].map((e, i) => {
                    if (areas[i]) {
                      return <div class={`cell ${activeAreas.includes(areas[i].label) ? 'active' : ''}`}>{areas[i].label}</div>
                    }
                    return <div class="cell blank" key={i}>&mdash;</div>
                  })
                }
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

CaseStudyMap.propTypes = {

}

export default CaseStudyMap
