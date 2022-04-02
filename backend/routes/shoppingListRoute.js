const router = require ('express').Router();
let shopping = require('../models/shoppingList.model')

//command when user get data
router.route('/').get((req,res) => {
  shopping.find()
  .then(shopping => res.json(shopping))
  .catch(err => res.status (400).json('error :' + err))
});

router.route('/userid=:userid').get((req,res) => {
  shopping.find({userid : req.params.userid})
  .then(shopping => res.json(shopping))
  .catch(err => res.status (400).json('error :' + err))
});

//command to add shopping
router.route('/add').post((req,res)=>{
  
  const userid = req.body.userid
  const ingredientsName = req.body.ingredientsName
  const quantity = req.body.quantity
  const measurement = req.body.measurement


  // status = req.body.status
  const newShopping = new shopping({
    userid, ingredientsName,quantity,measurement
  })

  newShopping.save()
  .then(()=> res.json('shopping item added, shopping: '+ userid))
  .catch(err => res.status(400).json('Error:'+err))
})

//command to delete by id
router.route('/id=:id').delete((req,res)=>{
  shopping.findByIdAndDelete(req.params.id)
  .then(() => res.json('shopping successfully deleted'))
  .catch(err => res.status(400).json('error: '+err))
})

//delete many by userid
router.route('/deleteby/userid=:userid').delete((req,res)=>{
  shopping.deleteMany({userid : req.params.userid})
  .then(() => res.json('shopping successfully deleted'))
  .catch(err => res.status(400).json('error: '+err))
})

//command to update status only
router.route('/updateStatus/_id=:id').patch((req,res) => {
  shopping.updateOne({ _id: req.params.id }, { status : req.body.status })
  .then (() => {res.json('item successfully updated');console.log(res)})
  .catch(err => res.status(400).json('Error:'+err))
})
// await Person.updateOne({ name: 'Jean-Luc Picard' }, { ship: 'USS Enterprise' })

//command to update by id
router.route('/update/userid=:id').post((req,res) => {
  shopping.findById(req.params.id)
  .then(shopping => {

    shopping.userid = req.body.userid
    shopping.ingredientsName = req.body.ingredientsName
    shopping.quantity = req.body.quantity
    shopping.measurement = req.body.measurement
    shopping.status = req.body.measurement

    shopping.save()
    .then(() => res.json(`shopping id = ${req.params.id} successfully updated`))
    .catch(err => res.status(400).json('error: '+err))
  })

    .catch(err => res.status(400).json('Error:'+err))

})


module.exports = router
