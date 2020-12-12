import { useState } from 'react'
import { Modal } from 'antd';

export const useModal = () => {
  const [isVisible, setIsVisible] = useState(false)
  const showModal = () => setIsVisible(true)
  const hideModal = () => setIsVisible(false)
  const renderModal = ({
    render,
    ...props
  }) => (
      <Modal
        destroyOnClose={true}
        focusTriggerAfterClose={false}
        visible={isVisible}
        onCancel={hideModal}
        {...props}
      >
        {typeof render === "function" ? render() : <>Empty Modal</>}
      </Modal>
    )

  return {
    showModal,
    hideModal,
    renderModal,
  }
}
