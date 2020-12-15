import OverlayScrollbars from 'overlayscrollbars'
import 'overlayscrollbars/css/OverlayScrollbars.css'

const instBodyOverlayScrollbar = OverlayScrollbars(document.body, {
  // https://kingsora.github.io/OverlayScrollbars/#!documentation/options
  scrollbars: {
    visibility: "auto",
    autoHide: "move",
    autoHideDelay: 300,
    dragScrolling: true,
    clickScrolling: false,
    touchSupport: true,
    snapHandle: false
  },
})

export const changeBodyScrollbarTheme = name => {
  return instBodyOverlayScrollbar.options({
    className: `os-theme-${name === 'light' ? 'dark' : 'light'}`
  })
}
