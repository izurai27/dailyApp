import React from 'react'

const FilterByOrigin = (props) => {
  
  const handleChange = (e) => {
    console.log(e.target.value)
    props.changeOriginValue(e.target.value)
  }

  return (
    
    <select defaultValue="all" onChange={handleChange} className="form-select form-select-sm" aria-label=".form-select-sm example" style={{width:"fit-content"}}>
      <option  value = "all" >Semua Daerah</option>
      {props.origin.map((elemen,index) => {
        return (
          <option value={elemen} key={index}>{elemen}</option>
        )
      })}
      
      
    </select>
  )
}

export default FilterByOrigin