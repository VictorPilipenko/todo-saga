import React, { useEffect } from 'react'
import NProgress from 'nprogress'
import { Loader } from '../common/loader'
import 'nprogress/nprogress.css'

const RouteNProgress = () => {
  useEffect(() => {
    NProgress.start()
    NProgress.inc()

    return () => {
      NProgress.done()
      NProgress.remove()
    }
  })

  return <Loader global />
};

export default RouteNProgress
