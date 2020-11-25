import React, { useState } from 'react'
import ModalWindowPortal from './portal'

export const useModal = () => {
  const [isVisible, setIsVisible] = useState(false)
  const showModal = () => setIsVisible(true)
  const hideModal = () => setIsVisible(false)
  const renderModal = ({
    message
  }) => (
      isVisible &&
      <ModalWindowPortal hideModal={hideModal}>
        <h3 className="portal-modal-header">{message}</h3>
      </ModalWindowPortal>
    )

  return {
    showModal,
    hideModal,
    renderModal,
  }
}
