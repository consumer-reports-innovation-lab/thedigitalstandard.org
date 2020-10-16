import React from 'react'
import ReactDOM from 'react-dom'
import DigitalStandard from './digital-standard/DigitalStandard'
import CaseStudies from './case-studies/CaseStudies'
import CaseStudyMap from './case-studies/CaseStudyMap'

const COMPONENTS = {
  DigitalStandard,
  CaseStudies,
  CaseStudyMap
}

function renderComponentInElement(el) {
  var Component = COMPONENTS[el.dataset.component];
  if (!Component) return;
  // get props from elements data attribute, like the post_id
  const props = Object.assign({}, el.dataset);

  ReactDOM.render(<Component {...props} />, el);
}

document
  .querySelectorAll('.__react-component')
  .forEach(renderComponentInElement)


