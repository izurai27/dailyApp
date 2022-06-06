import React, {useEffect, useState} from 'react'
import axios from 'axios';
import AddList from './AddList.component';
import {Link} from 'react-router-dom'
import url from '../config/url';


const RecipeList = (props) => {
  const [recipes,setRecipe] = useState([]);
  
  const userid = props.userid

  useEffect(() => {   
     axios.get(url+'/recipes')
      .then(res => {
        setRecipe(res.data)
        
      })
      .catch(err => {
        console.log(err);
      })

    

  },[])
  
  

  return (
    <div>
      <div className="container-md d-flex flex-row justify-content-evenly flex-wrap mb-5">
        {recipes.map((elemen)=>{
          return(
              <div className="card mt-4 shadow mx-2" style={{width: "15rem"}} key={elemen._id}>
                <img src={elemen.thumb} className="card-img-top" alt="food"/>
                <div className="card-body">
                  <div className="card-title" style={{fontSize: "1rem", fontWeight:"600"}}>Resep {elemen.title}</div>
                  <div className="card-text" style={{fontSize: "14px"}}>Sumber : {elemen.source}</div>
                  <div className="card-text" style={{fontSize: "14px"}}>Untuk {elemen.portion} porsi</div>
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