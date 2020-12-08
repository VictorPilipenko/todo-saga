import React from "react"
import { OverlayScrollbarsComponent } from "overlayscrollbars-react"
import { useSelector } from "react-redux"

const ScrollContainer = ({ children }) => {
  const { name } = useSelector(state => state.theme)

  return (
    <OverlayScrollbarsComponent
      className={`os-theme-${name === 'light' ? 'dark' : 'light'}`}
      options={{ scrollbars: { autoHide: "scroll" } }}
    >
      {children}
    </OverlayScrollbarsComponent>
  )
}

export default ScrollContainer
