import React, {useEffect, useState} from 'react'
import RecipeAdded from './RecipeAdded.component'
import axios from 'axios'
// import ShoppingList from './ShoppingList.component'
// import combineArrayElement from '../functions/combineArrayElement'
// import totalPerElement from '../functions/totalPerElement'
import updateShoppingList from '../functions/updateShoppingList'


const ListBelanja = (props) => {
  
  const [titleState, setTitleState] = useState([])
  
  const userid = props.userid
 
  useEffect(() =>  {
    
    const sendGetRequest = async () => {
      try {
          const resp = await axios.get('http://localhost:5000/addList/userid='+userid);
          
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

            console.log(resp.data)
            
            
            //menyiapkan data untuk dikirim ke database shopping list  
            //1. mengubah quantity per ingredient menjadi sesuai dengan porsi yang dipilih
            // const ingredientArr = resp.data.map(item => {
            // return item.ingredients.map(item2 => {
            //   return ({
                  
            //       userid:item.userid,
            //       ingredientsName:item2.ingredientsName,
            //       multipliedQuantity:item2.quantity*item.multiplier, 
            //       measurement:item2.measurement});
            //     })
            //   });
              
              //2. gabung banyak object dalam ingredient array menjadi 1 object  
              // const ingredientCombined = combineArrayElement(ingredientArr)
              
              // 3. mereduce ingredientArr sehingga quantity per ingredient merupakan total dari ingredient yg sama (dari resep berbeda)
              // dan menjadikan item untuk ditambahkan ke database shopping list
              // const addShopping = totalPerElement(ingredientCombined)
              // console.log(addShopping)          
              
              //4. menghapus semua shoppinglist utk userid tersebut (perlu investigasi dl apakah diperlukan atau tidak)
              // await axios.delete('http://localhost:5000/shoppingList/deleteby/userid='+userid)
              // .then(resp => console.log(resp))
              
              //5. menambahkan ke databse shoppinglist dengan iterasi permasing2 ingredients
              // const addShoppinglength = addShopping.length
              // for (let i=0 ; i < addShoppinglength ; i++){
                // console.log(addShopping[i])
                // axios.post('http://localhost:5000/shoppingList/add',addShopping[i])
                // .then(res => console.log(res.data));
              // }
            } catch (err) {
              console.error(err);  
            }
          };
          
          sendGetRequest();
          updateShoppingList(userid)
          
        },[userid]);
        
        console.log(titleState)
  
  return (
    <div>
      <RecipeAdded recipetitle={titleState} userid={userid}/>
      {/* <ShoppingList userid={userid} /> */}
    </div>

    
  )
}

export default ListBelanja