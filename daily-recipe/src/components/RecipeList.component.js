import React, {useEffect, useState} from 'react'
import axios from 'axios';
import AddList from './AddList.component';
import {Link} from 'react-router-dom'
import url from '../config/url';
import FilterByOrigin from './FilterByOrigin.component';
import FilterByCookingStyle from './FilterByCookingStyle.component';
import FilterBySource from './FilterBySource.component copy';

const RecipeList = (props) => {
  const [recipes,setRecipe] = useState([]);
  const [originValue,setOriginValue] = useState("all");
  const [cookingStyleValue, setCookingStyle] = useState("all")
  const [sourceValue, setSource] = useState("all")
  const [recipeData, setRecipeData] = useState([])
 
  let origin,cookingstyle,source
  const userid = props.userid

  useEffect(() => {   
    
    let temp =[]

    axios.get(url+'/recipes')
      .then(res => {
        setRecipe(res.data)
        setRecipeData(res.data)
        temp = [...res.data]
        console.log(temp)
        
        if(originValue!=="all"){
          temp = temp.filter(recipe => recipe.origin === originValue)
          setRecipe(temp)
          console.log(temp)
        }
        
    
        if(cookingStyleValue!=="all"){
          temp = temp.filter(recipe => recipe.cookingStyle === cookingStyleValue)
          setRecipe(temp)
          console.log(temp)
        }
        
        
        if(sourceValue!=="all"){
          temp = temp.filter(recipe => recipe.source === sourceValue)
          setRecipe(temp)
          console.log(temp)
        }

      })
      .catch(err => {
        console.log(err);
      })
    
      

  },[originValue,cookingStyleValue, sourceValue])
  
  
  
  origin = recipeData.map(recipe => recipe.origin)
  origin = [...new Set(origin)]
  
  cookingstyle = recipeData.map(recipe => recipe.cookingStyle)
  cookingstyle = [...new Set(cookingstyle)]
  
  source = recipeData.map(recipe => recipe.source)
  source = [...new Set(source)]
  

  const changeOriginValue = (value) => {
    setOriginValue(value)
  }

  const changeCookingStyleValue = (value) => {
    setCookingStyle(value)
  }

  const changeSourceValue = (value) => {
    setSource(value)
  }
 
  

  return (
    <div>
      <FilterByOrigin origin={origin}  changeOriginValue={changeOriginValue}/>
      <FilterByCookingStyle cookingStyle={cookingstyle}  changeCookingStyleValue={changeCookingStyleValue}/>
      <FilterBySource source={source} changeSourceValue={changeSourceValue}/>
      <div className="container-md d-flex flex-row justify-content-evenly flex-wrap mb-5">
        {recipes.map((elemen)=>{
          return(
              <div className="card mt-4 shadow mx-2" style={{width: "15rem"}} key={elemen._id}>
                <img src={elemen.thumb} className="card-img-top" alt="food"/>
                <div className="card-body">
                  <div className="card-title" style={{fontSize: "1rem", fontWeight:"600"}}>Resep {elemen.title}</div>
                  <div className="card-text" style={{fontSize: "14px"}}>Sumber : {elemen.source}</div>
                  <div className="card-text" style={{fontSize: "14px"}}>Untuk {elemen.portion} porsi</div>
                  <span style={{color: "red"}}>{elemen.origin}, {elemen.cookingStyle}</span>
                  <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                    <a href={elemen.ytLink} style={{fontSize: "2rem", color:'red'}} target="_blank" rel="noreferrer noopener"><i className="bi bi-youtube"></i></a>
                    <AddList recipeId={elemen._id} userid={userid} ingredients={elemen.ingredients} title={elemen.title} portion={elemen.portion} />
                    <Link to={"/detail/"+elemen._id}>Lihat resep</Link>
                  </div>
                  
                </div>
              </div>
            
          )    
        })}

      </div>
    </div>
  )
}

export default RecipeList