import React from 'react'
import PropTypes from 'prop-types'
import TableOfContents from './TableOfContents'
import Area from './Area'

// ----------------------------------------------------------------------
Section.propTypes = {
  activeSection: PropTypes.instanceOf(Object),
  nextSectionTitle: PropTypes.string
}

export default function Section({ activeSection, nextSectionTitle, urlParams }) {

  return (
    <>
      <TableOfContents section={activeSection} />
      <div className="standard-content">
        {activeSection && activeSection.area.map(({ id, title_area, category }) => <Area key={id} id={id} title_area={title_area} title_sect={activeSection.title_sect} category={category} />)}
        <div className="px-5 mb-5">
          {nextSectionTitle && (
            <a href={`/standard/${nextSectionTitle.toLowerCase()}?${urlParams}`} className="btn btn-full-width">Next Test Category:&nbsp;
              <span className="font-weight-bold">{nextSectionTitle}&nbsp; &#9654;</span>
            </a>
          )}
        </div>
      </div>
    </>
  )
}
