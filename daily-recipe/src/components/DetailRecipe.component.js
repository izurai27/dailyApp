import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import Gap from './gap'
import AddList from './AddList.component';
import url from '../config/url';

// const url = url+'/recipes';

const DetailRecipe = () => {
  const [recipeDetail,setRecipeDetail] = useState([]);
  const [ingInstruction,setIngInstruction] = useState([])
  const [instruction,setInstruction] = useState([])
  const {id} = useParams()

  useEffect(() => {   
     axios.get(url+'/recipes/id='+id)
      .then(res => {
        setRecipeDetail(res.data)
        // console.log(res.data)
        setIngInstruction(res.data.ingredientsInstruction)
        setInstruction (res.data.instruction)
      })
      .catch(err => {
        console.log(err);
      })

  },[id])
  
  console.log('recipeDetail '+recipeDetail,'recipeId: '+ id)

  return (
    <div>
      <br/>
      <Link to='/'><button className='btn btn-primary mx-3'>back</button></Link>
      <div className="container-md d-flex flex-row justify-content-evenly flex-wrap mb-5">
            <div className="card mt-4 shadow mx-2" style={{width: "40rem"}} key={recipeDetail._id}>
              <img src={recipeDetail.thumb} className="card-img-top" alt="food"/>
              <div className="card-body">
                <div className="card-title" style={{fontSize: "1rem", fontWeight:"600"}}>{recipeDetail.title}</div>
                <div className="card-text" style={{fontSize: "14px"}}>Untuk {recipeDetail.portion} porsi</div>
                <div className="card-text" style={{fontSize: "14px"}}>Sumber : {recipeDetail.source}</div><br/>
                {ingInstruction.map(elemen => 
                  {return (
                    <div>
                      <div>{elemen.description}:</div>
                      {elemen.detail.map(element => {
                        return (
                          <div key={element._id}>{element}</div>
                          )
                          
                        })}
                    <Gap height="20px"/> 
                    </div>
                    
                    )}
                    )}
                <div>Cara Memasak:</div>
                {instruction.map(elemen => {
                  return(
                    <div>{elemen}</div>
                    )
                })}
                <a href={recipeDetail.ytLink} style={{fontSize: "2rem", color:'red'}} target="_blank" rel="noreferrer noopener"><i className="bi bi-youtube"></i></a>
                <AddList _id={recipeDetail._id}/>
              </div>
            </div>
      </div>

    </div>
  )}

export default DetailRecipe