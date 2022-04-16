import React, {useEffect, useState} from 'react'
import RecipeAdded from './RecipeAdded.component'
import axios from 'axios'
import updateShoppingList from '../functions/updateShoppingList'
import url from '../config/url'

const ListBelanja = (props) => {
  
  const [titleState, setTitleState] = useState([])
  
  const userid = props.userid
 
  useEffect(() =>  {
   
    const sendGetRequest = async () => {
      try {
        const resp = await axios.get(url+'/addList/userid='+userid);
        
        setTitleState(resp.data.map(element => (
          { 
            userid:element.userid,
            title:element.title, 
            _id:element._id, 
            portion:element.portion, 
            multiplier:element.multiplier,
            ingredients:element.ingredients
          }
          )))
           
      } catch (err) {
        console.error(err);  
      }
      };
          
          sendGetRequest();
          updateShoppingList(userid)
          
        },[userid]);
          
  return (
    <div>
      
      <RecipeAdded recipetitle={titleState} userid={userid}/>
      {/* <ShoppingList userid={userid} /> */}
    </div>

    
  )
}

export default ListBelanja