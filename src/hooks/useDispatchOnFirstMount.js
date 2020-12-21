import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useIsFirstMount } from "./useIsFirstMount"

const useDispatchOnFirstMount = ({ handler, condition = true }) => {
  const dispatch = useDispatch()
  const isFirstMount = useIsFirstMount()
  useEffect(() => {
    if (isFirstMount && condition) {
      dispatch(handler)
    }
  }, [
    dispatch,
    isFirstMount,
    handler,
    condition
  ])
}

export default useDispatchOnFirstMount
