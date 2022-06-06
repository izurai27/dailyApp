import React, {useEffect, useState} from 'react'
import axios from 'axios';
import './shopping.css'
import url from '../config/url';

const ShoppingList = (props) => {

  // const [shoppingItem,setShoppingItem] = useState([])
  const [statusFalse,setstatusFalse] = useState([])
  const [statusTrue,setstatusTrue] = useState([])
  const show = props.show
  const userid = props.userid;

  useEffect(() =>  {
    getShoppingList(userid) 
  },[userid,show]);
  
  const getShoppingList = async (userid) => {
    try {
      
        const resp = await axios.get(url+'/shoppingList/userid='+userid);
        setstatusFalse(resp.data.filter(element => element.status === false))
        setstatusTrue(resp.data.filter(element => element.status === true))
        return resp.data          
    } catch (err) {
        
        console.error(err);
    }
  };
  const statusFalseCopy = [...statusFalse]
  
  function handleChecked (e) {
    const index = e.target.dataset.index;
    statusFalseCopy[index].status = !statusFalseCopy[index].status
    //  
    setstatusFalse([...statusFalseCopy])
    
  }
  
  const handleIncrDecr = (e) => {
    const index = e.target.dataset.index
    
    if(e.target.classList.contains('btnAdd')){
      statusFalseCopy[index].multipliedQuantity += 1
    } else if(e.target.classList.contains('btnMin')) {
      console.log(e.target.classList.contains('btnMin'))
      if (statusFalseCopy[index].multipliedQuantity > 1) { statusFalseCopy[index].multipliedQuantity -= 1 }
    }
    setstatusFalse([...statusFalseCopy])
  }
  
   
  const handleEdit = async (e) => {
    
    const edit = document.querySelectorAll('.edit')
    edit.forEach(element => {
      element.style.display="block"
    })
    const editSave = document.querySelector('.editSave')
    editSave.style.display="inline-block"
    e.target.style.display = 'none'
    
    const checkInput = document.querySelectorAll('.form-check-input')
    checkInput.forEach(element => {
      element.style.display="none"
    })
  }
  
  const handlechangeAmount = (e) => {
    const index = e.target.dataset.index
    statusFalseCopy[index].multipliedQuantity = e.target.value
    setstatusFalse([...statusFalseCopy])
  }
  
  const handleSave = async (e) => {
    //update shoppingList ke database dan rerender
    
    //menghapus semua shoppinglist utk userid tersebut (perlu investigasi dl apakah diperlukan atau tidak)
    await axios.delete(url+'/shoppingList/statusfalse/userid='+userid)
    .then(resp => console.log(resp))
    
    //menambahkan ke databse shoppinglist dengan iterasi permasing2 ingredients
    const statusFalselength = statusFalse.length
    for (let i=0 ; i < statusFalselength ; i++){
      // console.log(addShopping[i])
      axios.post(url+'/shoppingList/add',statusFalse[i])
      .then(res => console.log(res.data));
    }
    
    //hide buttons    
    const editShow = document.querySelector('.editShow')
    editShow.style.display="inline-block"
    e.target.style.display = 'none'
    
    const edit = document.querySelectorAll('.edit')
    edit.forEach(element => {
      element.style.display="none"
    })
    
    const checkInput = document.querySelectorAll('.form-check-input')
    checkInput.forEach(element => {
      element.style.display="inline"
    })
  }
  
  const handlerefresh = async (e) => {
    
    
    // await axios.delete(url+'/shoppingList/statusfalse/userid='+userid)
    //   .then(resp => console.log(resp))
      
      //menambahkan ke databse shoppinglist dengan iterasi permasing2 ingredients
      const statusFalselength = statusFalse.length
      for (let i=0 ; i < statusFalselength ; i++){
        // console.log(statusFalse[i])
        const id = statusFalse[i]._id
        const statusUpdate = statusFalse[i].status
        axios.patch(url+'/shoppingList/updateStatus/userid='+userid+'/_id='+id,{status:statusUpdate })
        .then(res => console.log(res.data));
      }

      getShoppingList(userid) 

  }

  return (
    <div style={{display:show}}>
      <div className='container'>
        
          <div className='header d-flex justify-content-between'>
            <span className='titleRecipeAdded'>List belanja</span>
            <span className='button-group'>
              <button className='btn-sm btn-primary' onClick={handlerefresh}><i className="bi bi-arrow-clockwise"></i></button>
              <button className='btn-sm btn-secondary editShow' onClick={handleEdit}><i className="bi bi-pencil"></i></button>
              <button className='btn-sm btn-secondary editSave' onClick={handleSave}><i className="bi bi-save"></i></button>
            </span>
          </div>
        
        <div>
        
        {statusFalse.map((element, index) => {
          return (
            <div className=' wrapRecipeAdded d-flex flex-column align-items-start shopList' key={element._id}>

              <div className="form-check">
                <input className="form-check-input" type="checkbox" value={element.status} id="flexCheckDefault" data-id={element._id} data-index={index} onChange={handleChecked}/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    {element.ingredientsName} {element.multipliedQuantity} {element.measurement} 
                </label>
              </div>

              <small className="buttonGroup align-self-end edit">
                {/* <button data-value={element._id} className='btn btn-secnndary delete-btn ' onClick={handleDelete}><i className="bi bi-trash3 trashIcon"></i></button> */}
                <button className="btn btnAdd" data-index={index} onClick={handleIncrDecr}><i className="bi bi-plus-circle"></i></button>
                <input type="text" value={element.multipliedQuantity} onChange={handlechangeAmount} data-index={index}/>
                <button className='btn btnMin' data-index={index} onClick={handleIncrDecr}><i className="bi bi-dash-circle"></i></button>
              </small>
            </div>
            )  
        })}

        
        
        </div>
      </div>

        

      <div className='container'>
        <div className='titleRecipeAdded'> Sudah dibeli</div>
        {statusTrue.map(element => {
          // if (element.status === false){return false}

        return (
              <div key={element._id}>
                <div style={{textDecoration:"line-through", marginLeft:"20px", color:"grey"}}>
                    {element.ingredientsName} {element.multipliedQuantity} {element.measurement} 
                </div>
              </div>
          )
        })}
      </div>
    </div>
  )
}

export default ShoppingList