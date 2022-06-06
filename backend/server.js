const express = require('express');
const cors = require('cors');
require('dotenv').config({ path: "./config.env" });
const mongoose = require('mongoose');
const uri = process.env.DAILYAPP_URI;
const recipeRouter = require ('./routes/recipesRoute');
const addListRouter = require('./routes/addListRoute')
const shoppingListRouter = require('./routes/shoppingListRoute')

console.log(uri)
mongoose.connect (uri)

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully')
})

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use('/recipes', recipeRouter)
app.use('/addList', addListRouter)
app.use('/shoppingList', shoppingListRouter )

app.listen(PORT, ()=> {
  console.log('server in running on port:' + PORT)
})
