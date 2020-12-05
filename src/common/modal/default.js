import React, { useState } from 'react'
import { Modal } from 'antd';

export const useModal = () => {
  const [isVisible, setIsVisible] = useState(false)
  const showModal = () => setIsVisible(true)
  const hideModal = () => setIsVisible(false)
  const renderModal = ({
    message
  }) => (
      <Modal
        footer={null}
        visible={isVisible}
        onCancel={hideModal}
      >
        <h3>{message}</h3>
      </Modal>
    )

  return {
    showModal,
    hideModal,
    renderModal,
  }
}
