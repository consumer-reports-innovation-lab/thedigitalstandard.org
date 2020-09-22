import React from 'react'
import PropTypes from 'prop-types'

const FilterListItem = ({ item }) => {
  return (
    <div className={`${item.type} item`}>
      <img
        class="img-fluid mb-3"
        alt="{{ study.title }}"
        src="{{ study.featured_image }}"
      />
      <div>
        <a href="{{ study.url }}" class="text-medium">{{ study.title }}</a>
        <p class="mt-2 text-medium text-thin">{{ study.lead_organiziation }}</p>
      </div>
    </div>
  )
}

FilterListItem.propTypes = {
  item: PropTypes.instanceOf(Object)
}

export default FilterListItem



