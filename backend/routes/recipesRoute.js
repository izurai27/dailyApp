const router = require ('express').Router();
let recipe = require('../models/resep.model')

//command when user get data
router.route('/').get((req,res) => {
  recipe.find()
  .then(recipe => res.json(recipe))
  .catch(err => res.status (400).json('error :' + err))
});

//command to add recipe
router.route('/add').post((req,res)=>{
  
  const title = req.body.title;
  const thumb = req.body.thumb;
  const portion = req.body.portion
  const cookingStyle = req.body.cookingStyle
  const instruction = req.body.instruction
  const source = req.body.source
  const ytLink = req.body.ytLink
  const ingredients = req.body.ingredients
  const occasion = req.body.occasion
  const mealtype = req.body.mealtype
  const origin = req.body.origin
  const ingredientsInstruction = req.body.ingredientsInstruction
  const newRecipe = new recipe({
    title, thumb, portion, cookingStyle, instruction, source, ytLink, ingredients, occasion, mealtype,origin,ingredientsInstruction
  })

  newRecipe.save()
  .then(()=> res.json('Recipe added, recipe: '+ title))
  .catch(err => res.status(400).json('Error:'+err))
})

// command to find by id
router.route('/id=:id').get((req,res) => {
  recipe.findById(req.params.id)
  .then(recipe => res.json(recipe))
  .catch (err => res.status(400).json('error = '+err))
})

//command to delete by id
router.route('/id=:id').delete((req,res)=>{
  recipe.findByIdAndDelete(req.params.id)
  .then(() => res.json('recipe successfully deleted'))
  .catch(err => res.status(400).json('error: '+err))
})

//command to update by id
router.route('/update/id=:id').post((req,res) => {
  recipe.findById(req.params.id)
  .then(recipe => {
    recipe.title = req.body.title
    recipe.thumb = req.body.thumb
    recipe.portion = req.body.portion
    recipe.cookingStyle = req.body.cookingStyle
    recipe.instruction = req.body.instruction
    recipe.source = req.body.source
    recipe.ytLink = req.body.ytLink
    recipe.ingredients = req.body.ingredients
    recipe.occasion = req.body.occasion
    recipe.mealtype = req.body.mealtype
    recipe.origin = req.body.origin
    recipe.ingredientsInstruction = req.body.ingredientsInstruction

    recipe.save()
    .then(() => res.json(`recipe id = ${req.params.id} successfully updated`))
    .catch(err => res.status(400).json('error: '+err))
  })

    .catch(err => res.status(400).json('Error:'+err))

})




module.exports = router
