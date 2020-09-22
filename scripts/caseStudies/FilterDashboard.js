import React from 'react'
// import PropTypes from 'prop-types'
import { FilterProvider } from './FilterContext'
import FilterList from "./FilterList"
import Filters from "./Filters"

const FilterDashboard = () => {
  return (
    <>
      <FilterProvider>
        <section>
          <div className="container">
            <Filters />
            <FilterList />
          </div>
        </section>
      </FilterProvider>
    </>
  )
}

FilterDashboard.propTypes = {

}

export default FilterDashboard
