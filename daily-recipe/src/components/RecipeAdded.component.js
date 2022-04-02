import React from 'react'
import './RecipeAdded.css'
// import Gap from './gap'

const RecipeAdded = (props) => {
  const title = props.recipetitle
  console.log(title)
  return (
    <div className='container'>
      <div className='header d-flex justify-content-between'>
        <span className='titleRecipeAdded'>Makanan yang akan dimasak</span>
        <span className='button-group'>
          <button className='btn-sm btn-primary'><i class="bi bi-caret-up"></i></button>
          <button className='btn-sm btn-secondary'><i class="bi bi-pencil"></i></button>
        </span>
        
      
      </div>

      <ul className="list-group">
        {title.map(element => {
          return(
            <li className="list-group-item " key={element._id}>
              <div className=" wrapRecipeAdded " >
                <span className='recipeAddedItem'>{element.title}</span>
                <button data-value={element._id} className='btn-sm btn-danger delete-btn'><i class="bi bi-trash3"></i></button>
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