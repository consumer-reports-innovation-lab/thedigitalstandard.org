import React from 'react'
import Select from 'react-select'
// import PropTypes from 'prop-types'
const selectStyles = {
  control: (provided, state) => ({
    ...provided,
    minHeight: '35px'
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#5fb35f' : 'white'
  }),
  menuList: (provided, state) => ({
    ...provided,
    padding: 0
  }),
  dropdownIndicator: () => ({
    display: 'none'
  }),
  indicatorSeparator: () => ({
    display: 'none'
  })
}

const SelectInput = ({
  value,
  placeholder,
  onChange,
  options,
  isClearable
}) => {
  return (
    <div className="select">
      <select className="slct" value={value} onChange={onChange}>
        {options && options.map(option => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  )
}

SelectInput.propTypes = {

}

export default SelectInput
