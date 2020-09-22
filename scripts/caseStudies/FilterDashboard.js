import React from 'react'
// import PropTypes from 'prop-types'
import { ExploreProvider } from './FilterContext'
import ExploreList from "./FilterList"
import ExploreFilters from "./Filters"

const FilterDashboard = () => {
  return (
    <>
      <ExploreProvider>
        <section>
          <div className="container">
            <ExploreFilters />
            <ExploreList />
          </div>
        </section>
      </ExploreProvider>
    </>
  )
}

FilterDashboard.propTypes = {

}

export default FilterDashboard
