import React from 'react'
import PropTypes from 'prop-types'

const Criteria = ({ title_criteria, indicator: indicators }) => {

  return (
    <>
      <div className="row standard-wrapper">
        <div className="col-12 col-lg-4 criteria-wrapper ">
          <div className="sticky-top">
            <h3 className="text-uppercase text-black-50 mr-4 mb-2">Criteria</h3>
            <p className="mt-3">{title_criteria}</p>
          </div>
        </div>
        <div className="col-12 col-lg-8 indicator-wrapper">
          {indicators && indicators.map(({ id, title_ind, procedure }, index) => {
            const procedures = procedure.filter(v => v != ' ')

            return (
              <div key={id} className="row">
                <div className="col-12">
                  <h4 className="text-uppercase text-black-50 mr-4 mb-2">Indicator</h4>
                  <ul className="pt-3 ml-n3">
                    <li>{title_ind}</li>
                  </ul>
                  {procedures && (
                    <div className="procedure-wrapper">
                      <h4 className="text-uppercase text-black-50 mr-4 mb-2">Procedure</h4>
                      <ul className="pl-3">
                        {procedures.map(({ id, title_proc }) => <li key={id}>{title_proc}</li>)}
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
  title_criteria: PropTypes.string,
  indicator: PropTypes.instanceOf(Array),
}

export default Criteria
