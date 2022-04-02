const mongoose = require('mongoose');
const schema = mongoose.Schema;

const shoppingListSchema = new schema ({
  userid : { type: String, require : true},
  ingredientsName: {type: String, require: true, lowercase: true} ,
  quantity : {type:Number, require:true} ,
  measurement : {type:String, require: true},
  status: {type:Boolean, require:true, default:false}
  
})

const shoppingList = mongoose.model('shoppingList', shoppingListSchema);
module.exports = shoppingList;