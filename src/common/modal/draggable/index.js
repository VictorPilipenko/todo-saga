import Draggable from 'react-draggable'
import { useState } from 'react'
import { ModalBlock } from './index.styled'

export const useDraggableModal = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isDisabled, setIsDisabled] = useState(true)

  const showDraggableModal = () => setIsVisible(true)
  const hideDraggableModal = () => setIsVisible(false)

  const setDisabled = () => setIsDisabled(true)
  const unsetDisabled = () => setIsDisabled(false)

  const renderDraggableModal = ({ render, title, ...props }) => (
    <ModalBlock
      destroyOnClose={true}
      focusTriggerAfterClose={false}
      visible={isVisible}
      onCancel={hideDraggableModal}
      title={
        <div
          style={{
            width: '100%',
            cursor: 'move',
          }}
          onMouseOver={() => {
            if (isDisabled) {
              unsetDisabled()
            }
          }}
          onMouseOut={() => {
            setDisabled()
          }}
          // fix eslintjsx-a11y/mouse-events-have-key-events
          // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/mouse-events-have-key-events.md
          onFocus={() => {}}
          onBlur={() => {}}
        >
          {title ?? 'Draggable Modal'}
        </div>
      }
      modalRender={(modal) => (
        <Draggable disabled={isDisabled}>{modal}</Draggable>
      )}
      {...props}
    >
      {typeof render === 'function' ? render() : <>Empty Modal</>}
    </ModalBlock>
  )

  return {
    showDraggableModal,
    hideDraggableModal,
    renderDraggableModal,
  }
}
