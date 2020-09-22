import React, { useContext } from "react"
import SelectInput from './SelectInput'
import BasicSelectInput from './BasicSelectInput'
import { OrgOptions, StatusOptions } from './FilterOptions'
import { FilterContext } from './FilterContext'

const Filters = () => {
  const [state, setState] = useContext(FilterContext)

  return (
    <>
      <div className="row">
        <div className="col-12 col-sm-6 d-flex justify-content-start align-items-center mb-3 mb-md-0">
          <span className="item-text text-dark-blue pr-3" >Filter By</span>
          <BasicSelectInput
            name="orgFilter"
            options={OrgOptions}
            value={state.filterOrg}
            onChange={({ target: { value: filterOrg } }) => setState(state => ({ ...state, filterOrg }))}
            placeholder="All..."
          />
        </div>
        <div className="col-12 col-sm-6 d-flex justify-content-end align-items-center">
          <span className="item-text text-dark-blue pr-3" >Filter By</span>
          <BasicSelectInput
            name="typeFilter"
            options={StatusOptions}
            value={state.filterStatus}
            onChange={({ target: { value: filterStatus } }) => setState(state => ({ ...state, filterStatus }))}
            placeholder="All..."
          />
        </div>
      </div>
    </>
  )
}

export default Filters