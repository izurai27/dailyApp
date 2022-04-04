import React from 'react'
import './RecipeAdded.css'
// import Gap from './gap'

const RecipeAdded = (props) => {
  const title = props.recipetitle
  console.log(title)

  const hideList = () => {
    const listRecipeAdded = document.querySelector("#listRecipeAdded");
    const arrow = document.querySelector("#arrow")
    listRecipeAdded.classList.toggle("hide")
    arrow.classList.toggle("bi-caret-up")
  }

  const handleDelete = (e) => {
    const targetId = e.target.dataset.value;
    console.log(targetId)
  }

  return (
    <div className='container'>
      <div className='header d-flex justify-content-between'>
        <span className='titleRecipeAdded'>Makanan yang akan dimasak</span>
        <span className='button-group'>
          <button className='btn-sm btn-primary' onClick={hideList}><i id="arrow" class="bi bi-caret-up bi-caret-down "></i></button>
          {/* <button className='btn-sm btn-secondary' onClick={showDelete}><i class="bi bi-pencil"></i></button> */}
        </span>
        
      
      </div>

      <ul id="listRecipeAdded" className="list-group">
        {title.map(element => {
          return(
            <li className="list-group-item " key={element._id}>
              <div className=" wrapRecipeAdded " >
                <span className='recipeAddedItem'>{element.title}</span>
                <button data-value={element._id} className='btn-sm btn-danger delete-btn' onClick={handleDelete}><i class="bi bi-trash3 trashIcon"></i></button>
              </div>
              {/* <Gap height="10px"/>   */}
            </li>
            
          )
        })}
      </ul>
    </div>

    
  )
}

export default RecipeAdded