import React, {useEffect, useState} from 'react'
import './RecipeAdded.css'
// import Gap from './gap'
import axios from 'axios'
import ShoppingList from './ShoppingList.component'
import updateShoppingList from '../functions/updateShoppingList'
import url from '../config/url'

const RecipeAdded = (props) => {
  const [titles, setTitles] = useState(["blah"])
  const [show,setShow] = useState('block')
  const recipetitle = props.recipetitle
  const userid = props.userid
  const warning = document.querySelector("#warning")
    
  useEffect(() => {   
    
    setTitles([...recipetitle ])

  },[recipetitle])

  //command utnuk menampilkan list recipeadded dan menyembunyikannya, supaya halaman bisa langsung menampilkan list belanja
  const hideList = () => {
    const listRecipeAdded = document.querySelector("#listRecipeAdded");
    const arrow = document.querySelector("#arrow")
    listRecipeAdded.classList.toggle("hide")
    arrow.classList.toggle("bi-caret-up")
  }

  const handleDelete = (e) => {
    const targetId = e.target.dataset.value;
    console.log(targetId)
    let text;
    if (window.confirm("Anda akan hapus resep ini dari list Makanan yang akan dimasak?") === true) {
      text = "You pressed OK!";
      axios.delete(url+'/addList/id='+targetId)
            .then(resp => console.log(resp))
      
    } else {
      text = "You canceled!";
    }

    console.log(text)
  }

  const handleIncrDecr = (e) => {

  //1. update multiplier untuk titles
    const index = e.target.dataset.index
    const titleCopy = [...titles]

    if(e.target.classList.contains('btnAdd')){
      titleCopy[index].multiplier += 1
    } else if(e.target.classList.contains('btnMin')) {
      console.log(e.target.classList.contains('btnMin'))
      if (titleCopy[index].multiplier > 1) { titleCopy[index].multiplier -= 1 }
    }
    
    setTitles([...titleCopy])
    
  //2. tampilkan warning dan button refresh shoppinglist, shoppinglist di hide
    setShow('none')
    
    warning.style.display = "block"

  //3. update ke database
    titles.forEach(elemen => {
      axios.patch(url+'/addList/updatemultiplier/_id='+elemen._id,{multiplier:elemen.multiplier})
      .then(res => console.log(res.data));
    })
    

  
    

  }

  const handleRefresh = async () => {

    await updateShoppingList(userid);

    //re-render shoppinglist
    setShow('block')

    warning.style.display = "none"
  }


  return (
    <div>
      <div className='container'>
        <div className='header d-flex justify-content-between'>
          <span className='titleRecipeAdded'>Makanan yang akan dimasak</span>
          <span className='button-group'>
            <button className='btn-sm btn-primary' onClick={hideList}><i id="arrow" className="bi bi-caret-up bi-caret-down "></i></button>
            {/* <button className='btn-sm btn-secondary' onClick={showDelete}><i class="bi bi-pencil"></i></button> */}
          </span>
          
        
        </div>

        <ul id="listRecipeAdded" className="list-group">
          {titles.map((element, index) => {
            return(
              <li className="list-group-item " key={index}>
                <div className=" wrapRecipeAdded d-flex flex-column align-items-start " >
                  <div className='recipeAddedItem '>{element.title} untuk {element.portion*element.multiplier} porsi</div>
                  <small className="buttonGroup align-self-end">
                    <button data-value={element._id} className='btn btn-secnndary delete-btn ' onClick={handleDelete}><i className="noaction  bi bi-trash3 trashIcon"></i></button>
                    <button className="btn btnAdd" data-index={index} onClick={handleIncrDecr}><i className="noaction bi bi-plus-circle"></i></button>
                    <span className='portionAmount'><small>{element.portion*element.multiplier} porsi</small></span>
                    {/* <span className='portionAmount'><small>{element.multipliedQuantity} porsi</small></span> */}
                    <button className='btn btnMin' data-index={index} onClick={handleIncrDecr}><i className="noaction bi bi-dash-circle"></i></button>
                  </small>
                </div>
                
              </li>
              
            )
          })}
        </ul>
        
      </div>
      <div id='warning' style={{display:"none"}}>
        <button className='btn-primary' onClick={handleRefresh}>Tampilkan List Belanja</button>
      </div>
      <ShoppingList userid={userid} show={show} />
    </div>

    
  )
}

export default RecipeAdded