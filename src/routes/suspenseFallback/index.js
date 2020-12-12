import React, { useEffect } from 'react'
import NProgress from 'nprogress'
import { Loader } from '../../common/loader'
import config from '../../config/nprogress'
import 'nprogress/nprogress.css'
NProgress.configure(config)

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
