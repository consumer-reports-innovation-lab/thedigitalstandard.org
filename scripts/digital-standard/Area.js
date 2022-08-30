import React from 'react'
import PropTypes from 'prop-types'
import Criteria from './Criteria'
import { organization, repository } from './config'
import { makeKey } from '../helpers'

// ----------------------------------------------------------------------
Area.propTypes = {
  id: PropTypes.string,
  title_area: PropTypes.string,
  category: PropTypes.instanceOf(Array)
}

export default function Area({ id, title_area, title_sect, category }) {

  return (
    <div className="m-5">
      {category && category.map(({ title_cat, criteria }) => {
        // const status = {
        //   "1": "bg-success",
        //   "2": "bg-warning",
        //   "3": "bg-danger"
        // }
        // const srcUrl = `https://github.com/${organization}/${repository}/blob/${activeRelease}`
        const srcUrl = `https://github.com/${organization}/${repository}`
        const slug = makeKey(title_cat)
        return (
          <div key={slug} id={slug} className="row" >
            <div className="col-12">
              <p className="text-sans-serif text-muted text-capitalize">
                <small>{title_sect} / {title_area} / <span className="text-dark">{title_cat}</span></small>
              </p>
              <div className="d-flex align-items-center flex-wrap">
                <div>
                  <h1 className="text-serif text-thin mr-5 mb-n1">{title_area}</h1>
                </div>
                <div>
                  <div className="d-flex align-items-center">
                    {/* <span className={`bg-status mr-2 ${status[standard.status]}`}></span> */}
                    <h2 className="blue text-uppercase m-0 text-nowrap">{title_cat}</h2>
                    <a href={srcUrl} target="_blank" className="social-link">
                      <i className="ri-github-fill  text-medium ml-2" />
                    </a>

                  </div>
                </div>
              </div>
              <hr />
              {criteria && criteria.map(({ id, title_criteria, indicator }) => <Criteria key={id} title_criteria={title_criteria} indicator={indicator} />)}
            </div>
          </div>
        )
      }
      )}
    </div>
  )
}
