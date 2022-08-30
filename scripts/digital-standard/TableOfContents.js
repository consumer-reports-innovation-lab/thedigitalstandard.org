import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { makeKey } from '../helpers'

const TableOfContents = ({ section }) => {
  const [sidebarActive, setSidebarActive] = useState(false)
  const { area: areas } = section
  return (
    <div className={`sidebar ${sidebarActive ? 'active' : ''}`}>
      <button className="sidebar-toggle" onClick={() => setSidebarActive(!sidebarActive)}>
        <i className="ri-more-2-fill" />
      </button>
      <div id="sectionNav">
        {section && areas.map(({ id: areaId, title_area, category: categories }) => (
          <div key={areaId}>
            <h4 className="nav-link pb-0" >{title_area}</h4>
            <ul className="nav flex-column" >
              {categories && categories.map(({ title_cat }, i) => {
                const slug = makeKey(title_cat)
                return (
                  <li key={`${slug}_${i}`} className="nav-item">
                    <a className="nav-link py-1" href={`#${slug}`}>{title_cat}</a>
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
