import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useIsFirstMount } from "./useIsFirstMount"

const useDispatchOnFirstMount = ({ handler }) => {
  const dispatch = useDispatch()
  const isFirstMount = useIsFirstMount()
  useEffect(() => {
    if (isFirstMount) {
      dispatch(handler)
    }
  }, [
    dispatch,
    isFirstMount,
    handler,
  ])
}

export default useDispatchOnFirstMount