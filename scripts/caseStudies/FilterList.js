import React, { useContext } from "react"
import { FilterContext } from './FilterContext'
import FilterListItem from './FilterListItem'

const FilterList = () => {
  const [state, setState] = useContext(FilterContext)
  const { visibleItems, selectedItem, filteredItems } = state

  return (
    <>
      <div className="row mt-5">
        <div className="col-12">
          {filteredItems.length === 0 && (
            <div className="row">
              <div className="col-12">
                <p className="text-center">Please adjust your filter preferences.</p>
              </div>
            </div>
          )}
          {filteredItems.length !== 0 && visibleItems && (
            <div >
              {visibleItems.map(item => <FilterListItem key={item.slug} item={item} />)}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default FilterList