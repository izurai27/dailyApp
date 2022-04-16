import React from 'react'
import RecipeList from './RecipeList.component'
import Hero from './Hero.component'


const Home = (props) => {
  
  return (
    <>
      <Hero/>
      <RecipeList userid={props.userid}/>
      
    </>
  )
}

export default Home