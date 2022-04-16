import React from 'react'
import './modalPopup.css'

const Modal = (props) => {
  
  return (
    <div>
      
      <div className='modalMessage'>{props.message}</div>
      <button value={true} className='okBtn' onClick={props.handleOkBtn}>OK</button>
      <button value={false} className='cancelBtn' onClick={props.handleNoBtn}>Cancel</button>
    </div>
  )
}

export default Modal