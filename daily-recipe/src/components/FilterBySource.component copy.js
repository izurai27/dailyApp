import React from 'react'

const FilterBySource = (props) => {
  
  const handleChange = (e) => {
    props.changeSourceValue(e.target.value);
  }

  return (
    
    <select defaultValue="all" onChange={handleChange} className="form-select form-select-sm" aria-label=".form-select-sm example" style={{width:"fit-content"}}>
      <option  value = "all" >Resep oleh</option>
      {props.source.map((elemen,index) => {
        return (
          <option value={elemen} key={index}>{elemen}</option>
        )
      })}
      
      
    </select>
  )
}

export default FilterBySource