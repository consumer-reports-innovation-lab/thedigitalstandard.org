import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const TableOfContents = ({ activeSection }) => {
  const [sidebarActive, setSidebarActive] = useState(false)

  return (
    <div className={`sidebar ${sidebarActive ? 'active' : ''}`}>
      <button className="sidebar-toggle" onClick={() => setSidebarActive(!sidebarActive)}>
        <i className="ri-more-2-fill" />
      </button>
      <div id="sectionNav">
        {activeSection && activeSection.map(area => (
          <div key={area.slug}>
            <h4 className="nav-link pb-0" >{area.label}</h4>
            <ul className="nav flex-column" >
              {area.standards && area.standards.map(standard => {
                const { slug, title } = standard
                return (
                  <li key={slug} className="nav-item">
                    <a className="nav-link py-1" href={`#${slug}`}>{title}</a>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

TableOfContents.propTypes = {
  section: PropTypes.instanceOf(Object)
}

export default TableOfContents
