import React from 'react'
import PropTypes from 'prop-types'

const Nav = ({ activeSection, digitalStandard }) => {

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
        {digitalStandard && digitalStandard.map(({ section }) => {

          return (
            <li key={section} className="nav-item">
              <a className={`nav-link ${activeSection === section ? 'active' : ''}`} href={`/standard/${section}/`}>
                {section}
              </a>
            </li>
          )
        })}
      </ul>

      <a className="editable d-none d-md-flex" id="downloadCTA" href="/download/standard.csv">Download the Digital Standard (.csv)</a>
    </nav>
  )
}

Nav.propTypes = {
  activeSection: PropTypes.string,
  digitalStandard: PropTypes.instanceOf(Object)
}

export default Nav
