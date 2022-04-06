import React, {useState} from 'react'
import './RecipeAdded.css'
// import Gap from './gap'
import axios from 'axios'

const RecipeAdded = (props) => {
  // const [titles,setTitles] = useState([])
  const title = props.recipetitle
  // setTitles(title)

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
      axios.delete('http://localhost:5000/addList/id='+targetId)
            .then(resp => console.log(resp))
      
    } else {
      text = "You canceled!";
    }

    console.log(text)
  }

  const handleDecr = () => {
    
  }

  const handleIncr = () => {

  }


  return (
    <div className='container'>
      <div className='header d-flex justify-content-between'>
        <span className='titleRecipeAdded'>Makanan yang akan dimasak</span>
        <span className='button-group'>
          <button className='btn-sm btn-primary' onClick={hideList}><i id="arrow" className="bi bi-caret-up bi-caret-down "></i></button>
          {/* <button className='btn-sm btn-secondary' onClick={showDelete}><i class="bi bi-pencil"></i></button> */}
        </span>
        
      
      </div>

      <ul id="listRecipeAdded" className="list-group">
        {title.map(element => {
          return(
            <li className="list-group-item " key={element._id}>
              <div className=" wrapRecipeAdded d-flex flex-column align-items-start " >
                <div className='recipeAddedItem '>{element.title} untuk {element.portion*element.multiplier} porsi</div>
                <small className="buttonGroup align-self-end">
                  <button data-value={element._id} className='btn btn-secnndary delete-btn ' onClick={handleDelete}><i className="bi bi-trash3 trashIcon"></i></button>
                  <button className="btn" onClick={handleIncr}><i className="bi bi-plus-circle"></i></button>
                  <span className='portionAmount'><small>{element.portion*element.multiplier} porsi</small></span>
                  <button className='btn ' onClick={handleDecr}><i className="bi bi-dash-circle"></i></button>
                </small>
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