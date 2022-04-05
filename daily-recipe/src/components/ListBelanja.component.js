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
          console.log(resp.data)
          setTitleState(resp.data.map(element => (
            {
              title:element.title, 
              _id:element._id, 
              portion:element.portion, 
              multiplier:element.multiplier
            }
            )))
                    
          // const ingredientArr = resp.data.map(element => element.ingredients)
          const ingredientArr = resp.data.map(item => {
            return item.ingredients.map(item2 => {
              return (

              //  console.log(item2.ingredientsName,item2.quantity, item.multiplier))
               {ingredientsName:item2.ingredientsName,multipliedQuantity:item2.quantity*item.multiplier, measurement:item2.measurement});
             })
            });
          const len = ingredientArr.length
          console.log(ingredientArr,len)
          let ingredientCombined = []
          for (let i=0 ; i<len ; i++){
            ingredientCombined = [...ingredientCombined,...ingredientArr[i]]
          }
          console.log(ingredientCombined)

          const ingredientReduce=[]
          ingredientCombined.reduce(function(result, item) {
            
            if (!result[item.ingredientsName]) {
              result[item.ingredientsName] = { ingredientsName: item.ingredientsName, multipliedQuantity: 0, measurement:item.measurement };
              ingredientReduce.push(result[item.ingredientsName])
            }

            result[item.ingredientsName].multipliedQuantity += item.multipliedQuantity;
                     
            return result;

          }, {});

          console.log(ingredientReduce)

          const addShopping = ingredientReduce.map(elemen => ({
            userid : userid,
            ingredientsName :elemen.ingredientsName,
            quantity : elemen.multipliedQuantity,
            measurement :  elemen.measurement
          }))
          console.log(addShopping)
          
          //perlu investigasi dl apakah diperlukan atau tidak
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