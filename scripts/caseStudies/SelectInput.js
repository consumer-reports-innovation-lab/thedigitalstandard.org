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
    <div className="form-group">
      <Select
        onChange={onChange}
        placeholder={placeholder}
        options={options}
        isClearable={isClearable}
        isSearchable={false}
        styles={selectStyles}
        theme={theme => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary25: '#a7a9ac',
            primary: '#5fb35f',
            primary50: '#a7a9ac'
          }
        })}
      />
    </div>
  )
}

SelectInput.propTypes = {

}

export default SelectInput
