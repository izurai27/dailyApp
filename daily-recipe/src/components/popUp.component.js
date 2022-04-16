import React from 'react'
import './modalPopup.css'

const PopUp = (props) => {
  
  return (
    <div className="background">
      <div className='containerModal'>
        <div className='popupMessage'>{props.message}</div>
        <button className='closeBtn btn-sm btn-primary' onClick={props.handleCloseBtn}>OK</button>
        
      </div>
    </div>
  )
}

export default PopUp