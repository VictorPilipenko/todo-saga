import { useEffect } from 'react'
import { useWindowFocus } from '../../hooks/useWindowFocus'

const CheckWindowFocusStatus = () => {
  const isWindowFocused = useWindowFocus()

  useEffect(() => {
    if (isWindowFocused) {
      console.log('окно в фокусе')
    } else {
      console.log('окно не в фокусе')
    }
  }, [isWindowFocused])

  return <></>
}

export default CheckWindowFocusStatus
