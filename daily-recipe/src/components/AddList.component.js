import React from 'react'
import axios from 'axios';
import PopUp from './popUp.component';
import { useState } from 'react';
import url from '../config/url';

const AddList = (props) => {
  const  [popUpSuccess,setPopUpSuccess] = useState(false)
  const  [popUpNotLogin,setPopUpNotLogin] = useState(false)

  const handleAddList = async () => {
    
    const userid = props.userid;
    const recipeId = props.recipeId;
    const title = props.title;
    const ingredients = props.ingredients;
    const portion = props.portion;
    let addList ={};

    console.log(userid)
    if (userid !== undefined) {

      const isExist = await axios.get(url+'/addList/userid='+userid+'/recipeId='+recipeId) 
      .then(res => res.data)
      
      const isExistLength = isExist.length
      if (isExistLength){
        
        const id = isExist[0]._id
        const multiplier = isExist[0].multiplier + 1;
       
        await axios.patch(url+'/addList/updatemultiplier/_id='+id,{multiplier})
        .then(res => console.log(res.data));
  
      } else {
        addList = {userid, title, recipeId, ingredients, portion}
        await axios.post(url+'/addList/add',addList)
        .then(res => console.log(res.data));
      }
      setPopUpSuccess(true)
      
    } else {
      setPopUpNotLogin(true)
      
    }
    
    
    
    
  }
  
  return (
    <div>
      {popUpSuccess && <PopUp message="Berhasil ditambahkan ke List Belanja" handleCloseBtn={() => setPopUpSuccess(false)}/>}
      {popUpNotLogin && <PopUp message="Silakan Login dahulu !" handleCloseBtn={() => setPopUpNotLogin(false)}/>}

      {/* <PopUp message="Silakan Login dahulu !" handleCloseBtn={() => setPopUpNotLogin(false)}/> */}
      <button className='btn' onClick={handleAddList} >
        <i className="bi bi-cart-plus" style={{fontSize: "2rem", cursor:'pointer'}}></i>
      </button>
    </div>
       
  )
}

export default AddList