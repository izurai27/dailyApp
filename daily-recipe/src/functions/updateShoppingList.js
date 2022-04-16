import axios from "axios";
import combineArrayElement from "./combineArrayElement";
import totalPerElement from "./totalPerElement";
import url from "../config/url";

const updateShoppingList = async (userid) => {
  try {
    const resp = await axios.get(url+'/addList/userid='+userid);
    
      //menyiapkan data untuk dikirim ke database shopping list  
      //1. mengubah quantity per ingredient menjadi sesuai dengan porsi yang dipilih
      const ingredientArr = resp.data.map(item => {
      return item.ingredients.map(item2 => {
        return ({
            
            userid:item.userid,
            ingredientsName:item2.ingredientsName,
            status:false,
            multipliedQuantity:item2.quantity*item.multiplier, 
            measurement:item2.measurement});
          })
        });
        
        //2. gabung banyak object dalam ingredient array menjadi 1 object  
        const ingredientCombined = combineArrayElement(ingredientArr)
        
        // 3. mereduce ingredientArr sehingga quantity per ingredient merupakan total dari ingredient yg sama (dari resep berbeda)
        // dan menjadikan item untuk ditambahkan ke database shopping list
        const addShopping = totalPerElement(ingredientCombined)
        // console.log(addShopping)          
        
        //4. menghapus semua shoppinglist utk userid tersebut (perlu investigasi dl apakah diperlukan atau tidak)
        await axios.delete(url+'/shoppingList/statusfalse/userid='+userid)
        .then(resp => resp)
        
        //5. menambahkan ke databse shoppinglist dengan iterasi permasing2 ingredients
        const addShoppinglength = addShopping.length
        for (let i=0 ; i < addShoppinglength ; i++){
          
          axios.post(url+'/shoppingList/add',addShopping[i])
          .then(res => console.log(res.data));
        }
      } catch (err) {
        console.error(err);  
      }
};
  

export default updateShoppingList