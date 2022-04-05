const mongoose = require('mongoose');
const schema = mongoose.Schema;

const addListSchema = new schema ({
  userid : { type: String, require : true},
  recipeId : { type: String, require : true},
  title : { type: String, require : true},
  portion : {type : Number, require : true},
  multiplier : { type: Number, require : true, default:1},
  // instruction : [String],
  // source : {type:String, require : true},
  // ytLink : {type:String, require: true},
  
  ingredients : [{
                    ingredientsName: {type: String, require: true, lowercase: true} ,
                    quantity : {type:Number, require:true} ,
                    measurement : {type:String, require: true}
                  }],
  
 
    
  
 
  // mealtype : [String], //lauk, sayur, dessert, buah
  // origin: String,
  // ingredientsInstruction: [ingredientsInstructionSchema]
})

const addList = mongoose.model('addList', addListSchema);
module.exports = addList;