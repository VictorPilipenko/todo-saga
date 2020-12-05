import OverlayScrollbars from 'overlayscrollbars'
import 'overlayscrollbars/css/OverlayScrollbars.css'

const instBodyOverlayScrollbar = OverlayScrollbars(document.body, {})

export const changeBodyScrollbarTheme = name => {
  return instBodyOverlayScrollbar.options({ 
    className: `os-theme-${name === 'light' ? 'dark' : 'light'}`
  })
}