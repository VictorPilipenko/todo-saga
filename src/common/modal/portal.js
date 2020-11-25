import React, { useRef } from 'react'
import ReactDOM from 'react-dom'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'
import "./portal.css"

const ModalWindowPortal = React.memo(({ hideModal, children }) => {
  // Create a ref that we add to the element for which we want to detect outside clicks
  const ref = useRef()
  // Call hook passing in the ref and a function to call on outside click
  useOnClickOutside(ref, hideModal)

  const domEl = document.getElementById('root')
  if (!domEl) return null

  return ReactDOM.createPortal(
    <div className="portal-modal-background">
      <div className="portal-modal" ref={ref}>
        <button type='button' className="close-button" onClick={hideModal}>x</button>
        {children}
      </div>
    </div>,
    domEl
  )
})

export default ModalWindowPortal
