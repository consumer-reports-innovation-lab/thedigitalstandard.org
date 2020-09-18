import React from 'react'
import ReactDOM from 'react-dom'
import HelloWorld from './HelloWorld'
import DigitalStandard from './DigitalStandard'

const COMPONENTS = {
  HelloWorld,
  DigitalStandard
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


