import React, {useEffect, useState} from 'react'
import axios from 'axios';
import AddList from './AddList.component';
import {Link} from 'react-router-dom'
//command to get data from recipe database//

const url = 'http://localhost:5000/recipes';



const RecipeList = () => {
  const [recipes,setRecipe] = useState([]);

  useEffect(() => {   
     axios.get(url)
      .then(res => {
        setRecipe(res.data)
        // console.log(res.data)
      })
      .catch(err => {
        console.log(err);
      })

  },[])
  
  console.log(recipes)

  return (
    
    <div className="container-md d-flex flex-row justify-content-evenly flex-wrap mb-5">
      {recipes.map((elemen)=>{
        return(
          <div className="card mt-4 shadow mx-2" style={{width: "15rem"}} key={elemen._id}>
            <img src={elemen.thumb} className="card-img-top" alt="food"/>
            <div className="card-body">
              <div className="card-title" style={{fontSize: "1rem", fontWeight:"600"}}>{elemen.title}</div>
              <div className="card-title" style={{fontSize: "14px"}}>Sumber : Devina Hermawan</div>
              <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                <a href={elemen.ytLink} style={{fontSize: "2rem", color:'red'}} target="_blank" rel="noreferrer noopener"><i className="bi bi-youtube"></i></a>
                <AddList recipeId={elemen._id} userid='izma' ingredients={elemen.ingredients} title={elemen.title}/>
                <Link to={"/detail/"+elemen._id}>Lihat resep</Link>
              </div>
              
            </div>
          </div>
        )    
      })}














      {/* <div className="card mt-4 shadow mx-2" style={{width: "15rem"}}>
        <img src="https://img.youtube.com/vi/mSwwXJuBzZQ/maxresdefault.jpg" className="card-img-top" alt="food"/>
        <div className="card-body">
          <div className="card-title fs-5">Resep Ayam rica-rica kemangi</div>
          <div className="card-title fs-7">Sumber : Devina Hermawan</div>
          <a href="https://www.youtube.com/watch?v=mSwwXJuBzZQ" className="btn btn-secondary" target="_blank" rel="noreferrer noopener">YouTube Link</a>
          <button type="button" className="btn btn-primary mt-3">Masukkan ke list belanja</button>
          <img src={listImg} className="img-thumbnail" alt="listbelanjaImg" style={{width:"50px", height:"50px", border:"none", cursor:"pointer"}}></img>
        </div>
      </div>

      <div className="card mt-4 shadow mx-2" style={{width: "15rem"}}>
        <img src="https://img.youtube.com/vi/I2-BO2J6XyQ/maxresdefault.jpg" className="card-img-top" alt="food"/>
        <div className="card-body">
          <div className="card-title fs-5">Resep Ayam rica-rica kemangi</div>
          <div className="card-title fs-6">Sumber : Devina Hermawan</div>
          <a href="https://www.youtube.com/watch?v=I2-BO2J6XyQ" className="btn btn-secondary" target="_blank" rel="noreferrer noopener">YouTube Link</a>
          <button type="button" className="btn btn-primary mt-3">Masukkan ke list belanja</button>
        </div>
      </div>

      <div className="card mt-4 shadow mx-2" style={{width: "15rem"}}>
        <img src="https://img.youtube.com/vi/lGvbzHJJ3QM/maxresdefault.jpg" className="card-img-top" alt="food"/>
        <div className="card-body">
          <h5 className="card-title fs-5">Resep Ayam Goreng Mentega</h5>
          <h6 className="card-title fs-6">Sumber : Devina Hermawan</h6>
          <a href="https://www.youtube.com/watch?v=lGvbzHJJ3QM" className="btn btn-secondary" target="_blank" rel="noreferrer noopener">YouTube Link</a>
          <button type="button" className="btn btn-primary mt-3">Masukkan ke list belanja</button>
        </div>
      </div>

      <div className="card mt-4 shadow mx-2" style={{width: "15rem"}}>
        <img src="https://img.youtube.com/vi/FvO_s3GYQs4/maxresdefault.jpg" className="card-img-top" alt="food"/>
        <div className="card-body">
          <h5 className="card-title fs-5">Resep Bistik Ayam Krispi</h5>
          <h6 className="card-title fs-6">Sumber : Devina Hermawan</h6>
          <a href="https://www.youtube.com/watch?v=FvO_s3GYQs4" className="btn btn-secondary" target="_blank" rel="noreferrer noopener">YouTube Link</a>
          <button type="button" className="btn btn-primary mt-3">Masukkan ke list belanja</button>
        </div>
      </div>

      <div className="card mt-4 shadow mx-2" style={{width: "15rem"}}>
        <img src="https://img.youtube.com/vi/Iw_KY_HiQWo/maxresdefault.jpg" className="card-img-top" alt="food"/>
        <div className="card-body">
          <h5 className="card-title fs-5">Resep Ayam Bakar Taliwang</h5>
          <h6 className="card-title fs-6">Sumber : Devina Hermawan</h6>
          <a href="https://www.youtube.com/watch?v=Iw_KY_HiQWo" className="btn btn-secondary" target="_blank" rel="noreferrer noopener">YouTube Link</a>
          <button type="button" className="btn btn-primary mt-3">Masukkan ke list belanja</button>
        </div>
      </div>

      <div className="card mt-4 shadow mx-2" style={{width: "15rem"}}>
        <img src="https://img.youtube.com/vi/lGPMYSL2XzE/maxresdefault.jpg" className="card-img-top" alt="food"/>
        <div className="card-body">
          <h5 className="card-title fs-5">Resep Dendeng Batokok</h5>
          <h6 className="card-title fs-6">Sumber : Devina Hermawan</h6>
          <a href="https://www.youtube.com/watch?v=lGPMYSL2XzE" className="btn btn-secondary" target="_blank" rel="noreferrer noopener">YouTube Link</a>
          <button type="button" className="btn btn-primary mt-3">Masukkan ke list belanja</button>        
        </div>
      </div> */}

    </div>
  )
}

export default RecipeList