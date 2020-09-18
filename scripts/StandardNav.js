import React from 'react'
import PropTypes from 'prop-types'

const StandardNav = ({ activeSection, digitalStandard }) => {

  return (
    <nav id="standardnav">
      <div className="dropdown mr-3">
        <button className="btn btn-secondary dropdown-toggle d-none d-sm-flex align-items-center" type="button" id="versionDropDown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          v1.0
        </button>
        <div className="dropdown-menu" aria-labelledby="versionDropDown">
          <a className="dropdown-item" href="#">version 0.9</a>
        </div>
      </div>

      <ul className="nav py-2">
        {digitalStandard && Object.entries(digitalStandard).map(section => {

          return (
            <li key={section[0]} className="nav-item">
              <a className={`nav-link ${activeSection === section[0] ? 'active' : ''}`} href={`/standard/${section[0]}/`}>
                {section[0]}
              </a>
            </li>
          )
        })}
      </ul>

      <a className="editable d-none d-md-flex" id="downloadCTA" href="/download/standard.csv">Download the Digital Standard (.csv)</a>
    </nav>
  )
}

StandardNav.propTypes = {
  activeSection: PropTypes.string,
  digitalStandard: PropTypes.instanceOf(Object)
}

export default StandardNav
