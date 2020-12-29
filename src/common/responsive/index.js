import { useMediaQuery } from 'react-responsive'
import sizes from './sizes'

export const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery(sizes.desktop)
  return isDesktop ? children : null
}

export const Tablet = ({ children }) => {
  const isTablet = useMediaQuery(sizes.tablet)
  return isTablet ? children : null
}

export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery(sizes.mobile)
  return isMobile ? children : null
}

export const Default = ({ children }) => {
  const isNotMobile = useMediaQuery(sizes.default)
  return isNotMobile ? children : null
}

// const Example = () => (
//   <>
//     <Desktop>Desktop or laptop</Desktop>
//     <Tablet>Tablet</Tablet>
//     <Mobile>Mobile</Mobile>
//     <Default>Not mobile (desktop or laptop or tablet)</Default>
//   </>
// )
