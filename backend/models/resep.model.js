const mongoose = require('mongoose');
const schema = mongoose.Schema;

const detailIngredients = new schema ({
  ingredientsName: {type: String, require: true, lowercase: true} ,
	quantity : {type:Number, require:true} ,
	measurement : {type:String, require: true}
})

const ingredientsInstructionSchema = new schema({
  description: {type:String, require:true} ,
  detail: [String]
})

const recipeSchema = new schema ({
  title : { type: String, require : true},
  thumb : {type: String, require : true},
  portion : {type : Number, require : true},
  cookingStyle : { type: String, require : true},
  instruction : [String],
  source : {type:String, require : true},
  ytLink : {type:String, require: true},
  ingredients : [detailIngredients],
  occasion : [String], //hari raya, sarapan, malam, sedang hujan, bulan puasa, dll
  mealtype : [String], //lauk, sayur, dessert, buah
  origin: String,
  ingredientsInstruction: [ingredientsInstructionSchema]
})

const recipe = mongoose.model('recipe', recipeSchema);
module.exports = recipe;