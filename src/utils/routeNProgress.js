import React, { useEffect } from 'react'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const RouteNProgress = () => {
  useEffect(() => {
    NProgress.configure({ showSpinner: false })
    NProgress.start()

    return () => {
      NProgress.done()
    };
  });

  return <></>
};

export default RouteNProgress
