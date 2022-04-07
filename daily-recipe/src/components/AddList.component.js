import React from 'react'
import axios from 'axios';

const AddList = (props) => {

  const handleAddList = async () => {
    
    const userid = props.userid;
    const recipeId = props.recipeId;
    const title = props.title;
    const ingredients = props.ingredients;
    const portion = props.portion;
    let addList ={};
    console.log(userid)
    const isExist = await axios.get('http://localhost:5000/addList/userid='+userid+'/recipeId='+recipeId) 
    .then(res => res.data)
    
    const isExistLength = isExist.length
    if (isExistLength){
      
      const id = isExist[0]._id
      const multiplier = isExist[0].multiplier + 1;
      // addList = {userid, title, recipeId, ingredients, multiplier}
      await axios.patch('http://localhost:5000/addList/updatemultiplier/_id='+id,{multiplier})
      .then(res => console.log(res.data));

    } else {
      addList = {userid, title, recipeId, ingredients, portion}
      await axios.post('http://localhost:5000/addList/add',addList)
      .then(res => console.log(res.data));
    }

    console.log(addList)

    
    

  }

  return (
    <button className='btn' onClick={handleAddList} >
      <i className="bi bi-cart-plus" style={{fontSize: "2rem", cursor:'pointer'}}></i>

    </button>
       
  )
}

export default AddList