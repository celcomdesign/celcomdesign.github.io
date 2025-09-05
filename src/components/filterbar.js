import React from "react"
import Select from "react-select"

const FilterBar = ({ className, onFocus, onBlur, onChange, options }) => {
  const selectStyles = {
    option: (provided, state) => ({
      ...provided,
      "&:hover": {
        color: "#009bdf",
        backgroundColor: "#f3f3f3"
      },
      color: state.isSelected ? "black" : "",
      fontSize: 16,
      backgroundColor: state.isSelected ? "#f3f3f3" : "",
      textAlign: "left",
      borderRadius: ".5rem",
      padding: ".5rem",
      cursor: "pointer"
    }),
    menu: (base) => ({
      ...base,
      padding: ".5rem",
      borderRadius: "0 0 .5rem .5rem",
      border: "1px solid #f3f3f3",
      boxShadow: "0 0.125rem 0.3125rem rgb(0 0 0 / 15%)"
    }),
    container: (base) => ({
      ...base,
      width: "100%",
      backgroundColor: "transparent",
      border: "none",
      padding: 0
    }),
    placeholder: (base) => ({
      ...base,
      fontSize: "1.5rem",
      fontWeight: 100
    }),
    input: (base) => ({
      ...base,
      padding: 0,
      margin: 0
    }),
    control: (base) => ({
      ...base,
      borderRadius: 0,
      width: "100%",
      minHeight: "20px",
      textAlign: "left",
      cursor: "text",
      backgroundColor: "transparent",
      border: "none",
      boxShadow: "none"
    }),
    dropdownIndicator: (base) => ({
      ...base,
      display: "none"
    }),
    indicatorSeparator: (base) => ({
      ...base,
      display: "none"
    }),
    noOptionsMessage: (base) => ({
      ...base,
      fontSize: 16
    }),
    valueContainer: (base) => ({
      ...base,
      padding: 0,
      backgroundColor: "transparent",
      border: "none"
    })
  }

  return (
    <Select
      className={className}
      styles={selectStyles}
      placeholder=""
      onFocus={onFocus}
      onBlur={onBlur}
      onChange={onChange}
      options={options}
    />
  )
}

export default FilterBar
