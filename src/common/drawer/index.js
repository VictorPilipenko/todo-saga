import { useState } from 'react'
import { Drawer } from 'antd'

export const useDrawer = () => {
  const [isVisible, setIsVisible] = useState(false)
  const showDrawer = () => setIsVisible(true)
  const hideDrawer = () => setIsVisible(false)
  const renderDrawer = ({
    render, 
    ...props
  }) => (
      <Drawer
        placement={'left'}
        closable={false}
        onClose={hideDrawer}
        visible={isVisible}
        key={'left'}
        {...props}
      >
        {typeof render === "function" ? render() : <>Empty Drawer</>}
      </Drawer>
    )

  return {
    showDrawer,
    hideDrawer,
    renderDrawer,
  }
}
