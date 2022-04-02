import React, {useEffect, useState} from 'react'
import RecipeAdded from './RecipeAdded.component'
import axios from 'axios'
import ShoppingList from './ShoppingList.component'


const ListBelanja = () => {
  // const [recipeAdded,setrecipeAdded] = useState([])
  const [titleState, setTitleState] = useState([])
  
  const userid = "izma"
 
  useEffect(() =>  {
    
    
    const sendGetRequest = async () => {
      try {
          const resp = await axios.get('http://localhost:5000/addList/userid='+userid);
         
          setTitleState(resp.data.map(element => ({title:element.title, _id:element._id})))
                    
          const temp = resp.data.map(element => element.ingredients)
          const len = temp.length
          
          let ingredientCombined = []
          for (let i=0 ; i<len ; i++){
            ingredientCombined = [...ingredientCombined,...temp[i]]
          }

          const ingredientReduce=[]
          ingredientCombined.reduce(function(result, item) {
            
            if (!result[item.ingredientsName]) {
              result[item.ingredientsName] = { ingredientsName: item.ingredientsName, quantity: 0, measurement:item.measurement };
              ingredientReduce.push(result[item.ingredientsName])
            }

            result[item.ingredientsName].quantity += item.quantity;
                     
            return result;

          }, {});

          const addShopping = ingredientReduce.map(elemen => ({
            userid : userid,
            ingredientsName :elemen.ingredientsName,
            quantity : elemen.quantity,
            measurement :  elemen.measurement
          }))
          console.log(addShopping)
          
          
          await axios.delete('http://localhost:5000/shoppingList/deleteby/userid='+userid)
          .then(resp => console.log(resp))
          
          
          const addShoppinglength = addShopping.length
          for (let i=0 ; i < addShoppinglength ; i++){
            // console.log(addShopping[i])
            axios.post('http://localhost:5000/shoppingList/add',addShopping[i])
            .then(res => console.log(res.data));
          }

          
    


      } catch (err) {
          
          console.error(err);
      }
    };
  
  sendGetRequest();

  },[]);
  
  


  
  
  
  return (
    <div>
      {/* <div>
        note: <br/>
        1. bagaimana kalau mau masak lebih dari jumlah porsi yang ada di resep? <br/>



      </div> */}
      <RecipeAdded recipetitle={titleState}/>
      <ShoppingList />
      
      {/* <button className='btn btn-primary' onClick={createShoppingList}>Buat daftar Belanja</button> */}
      {/* <ShoppingList ingredient={ingState}/> */}
    </div>

    
  )
}

export default ListBelanja