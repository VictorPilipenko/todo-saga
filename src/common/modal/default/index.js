import { useState } from 'react'
import { ModalBlock } from './index.styled'

export const useModal = () => {
  const [isVisible, setIsVisible] = useState(false)
  const showModal = () => setIsVisible(true)
  const hideModal = () => setIsVisible(false)
  const renderModal = ({ render, ...props }) => (
    <ModalBlock
      destroyOnClose={true}
      focusTriggerAfterClose={false}
      visible={isVisible}
      onCancel={hideModal}
      {...props}
    >
      {typeof render === 'function' ? render() : <>Empty Modal</>}
    </ModalBlock>
  )

  return {
    showModal,
    hideModal,
    renderModal,
  }
}
