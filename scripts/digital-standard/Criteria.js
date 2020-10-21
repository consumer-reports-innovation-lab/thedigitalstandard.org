import React from 'react'
import PropTypes from 'prop-types'

const Criteria = ({ criteria }) => {
  const { summary, indicators } = criteria

  return (
    <>
      <div className="row standard-wrapper">
        <div className="col-12 col-lg-4 criteria-wrapper ">
          <div className="sticky-top">
            <h3 className="text-uppercase text-black-50 mr-4 mb-2">Criteria</h3>
            <p className="mt-3">{summary}</p>
          </div>
        </div>
        <div className="col-12 col-lg-8 indicator-wrapper">
          {indicators && indicators.map((item, index) => {
            const filteredIndicators = item.indicator.split(`\n`).filter(v => v != '')
            const procedures = item.procedure.filter(v => v != ' ')

            return (
              <div className="row">
                <div className="col-12">
                  <h4 className="text-uppercase text-black-50 mr-4 mb-2">Indicators</h4>
                  <ul className="pt-3 ml-n3">
                    {filteredIndicators.length ? (
                      filteredIndicators.map(indicator => {
                        return indicator === '' ? <li>tbd</li> : <li>{indicator}</li>
                      })
                    ) : (
                        <li>TBD</li>
                      )}
                  </ul>
                  {item.procedure && (
                    <div className="procedure-wrapper">
                      <h4 className="text-uppercase text-black-50 mr-4 mb-2">Procedure</h4>
                      <ul className="pl-3">
                        {procedures.map(procedure => <li>{procedure}</li>)}
                      </ul>
                    </div>
                  )}
                  {index !== indicators.length - 1 && <hr className="my-5" />}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

Criteria.propTypes = {
  criteria: PropTypes.instanceOf(Object)
}

export default Criteria
