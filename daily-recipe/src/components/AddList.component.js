import React from 'react'
import axios from 'axios';

const AddList = (props) => {

  const handleAddList = () => {
    

    const addlist = {
      userid : props.userid,
      title:props.title,
      recipeId : props.recipeId,
      ingredients : props.ingredients
    
    }

    console.log(addlist)
    axios.post('http://localhost:5000/addList/add',addlist)
    .then(res => console.log(res.data));
    






  }

  return (
    <i className="bi bi-cart-plus" onClick={handleAddList} style={{fontSize: "2rem", cursor:'pointer'}}></i>
       
  )
}

export default AddList