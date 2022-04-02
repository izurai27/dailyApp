import React, {useEffect, useState} from 'react'
import axios from 'axios';

const IngredientList = () => {

  // const [shoppingItem,setShoppingItem] = useState([])
  const [statusFalse,setstatusFalse] = useState([])
  const [statusTrue,setstatusTrue] = useState([])
  
  const userid = 'izma'

  useEffect(() =>  {
    
    
    const sendGetRequest = async () => {
      try {
          const resp = await axios.get('http://localhost:5000/shoppingList/userid='+userid);

          // setShoppingItem(resp.data)
          setstatusFalse(resp.data.filter(element => element.status === false))
          setstatusTrue(resp.data.filter(element => element.status === true))
                    
      } catch (err) {
          
          console.error(err);
      }
    };
  
  sendGetRequest();

  },[]);
  
  // console.log(shoppingItem)
  function handleChecked (e) {
    const id = e.target.dataset.id;
    const value = (e.target.value === false) ? false : true;
    axios.patch('http://localhost:5000/shoppingList/updateStatus/_id='+id,{"status": !value})
    .then(res => console.log(res));
    console.log(value,!value)


  }

  return (
    <div>
    <div className='container'>
      
        <div className='header d-flex justify-content-between'>
          <span className='titleRecipeAdded'>List belanja</span>
          <span className='button-group'>
            <button className='btn-sm btn-primary'><i class="bi bi-arrow-clockwise"></i></button>
            <button className='btn-sm btn-secondary'><i class="bi bi-pencil"></i></button>
          </span>
        </div>
      
      <div>
      
      {statusFalse.map(element => {
          // if (element.status === false ){ return false }

          return (
              <div className="form-check" key={element._id}>
              <input className="form-check-input" type="checkbox" value={element.status} id="flexCheckDefault" data-id={element._id} onChange={handleChecked}/>
              <label className="form-check-label" htmlFor="flexCheckDefault">
                  {element.ingredientsName} {element.quantity} {element.measurement} 
              </label>
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
                  {element.ingredientsName} {element.quantity} {element.measurement} 
              </div>
            </div>
        )
      })}
    </div>
  </div>
  )
}

export default IngredientList