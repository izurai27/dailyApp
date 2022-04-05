const router = require ('express').Router();
let addList = require('../models/addList.model')

router.route('/').get((req,res) => {
  addList.find()
  .then(addList => res.json(addList))
  .catch(err => res.status (400).json('error :' + err))
});

//command to find by userid
router.route('/userid=:userid').get((req,res) => {
  addList.find({"userid":req.params.userid})
  .then(addList => res.json(addList))
  .catch(err => res.status (400).json('error :' + err))
});

//command to find by userid and recipeId
router.route('/userid=:userid/recipeId=:recipeId').get((req,res) => {
  console.log(req.params.userid, req.params.recipeId)
  addList.find({userid:req.params.userid, recipeId:req.params.recipeId})
  .then(addList => res.json(addList))
  .catch(err => res.status (400).json('error :' + err))
});


//command to add addList list
router.route('/add').post((req,res)=>{
  
  const userid = req.body.userid;
  const title = req.body.title;
  const portion = req.body.portion
  const recipeId = req.body.recipeId
  const ingredients = req.body.ingredients
  const multiplier = req.body.multiplier

  const newAddList = new addList({
    userid,title, recipeId, ingredients, portion, multiplier
  })

  newAddList.save()
  .then(()=> res.json('Recipe added, userid: '+ userid))
  .catch(err => res.status(400).json('Error:'+err))
})

//command to delete by id
router.route('/id=:id').delete((req,res)=>{
  addList.findByIdAndDelete(req.params.id)
  .then(() => res.json('addlist '+req.params.id+' successfully deleted'))
  .catch(err => res.status(400).json('error: '+err))
})

//command to update multiplier only
router.route('/updatemultiplier/_id=:id').patch((req,res) => {
  addList.updateOne({ _id: req.params.id }, { multiplier : req.body.multiplier })
  .then (() => {res.json('item successfully updated');console.log(res)})
  .catch(err => res.status(400).json('Error:'+err))
})

module.exports = router