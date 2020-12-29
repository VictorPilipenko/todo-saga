import { useEffect, useState } from 'react'
import { useInterval } from '../../hooks/useInterval'
import { usePageVisibility } from '../../hooks/usePageVisibility'

const CheckPageVisibilityStatus = () => {
  const isVisible = usePageVisibility()
  const [time, setTime] = useState(null)

  useInterval(() => {
    console.log('шпионим вне поля зрения')
  }, time)

  useEffect(() => {
    if (isVisible) {
      setTime(null)
    } else {
      setTime(1000)
    }
  }, [isVisible])

  return <></>
}

export default CheckPageVisibilityStatus
