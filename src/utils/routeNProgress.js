import React, { useEffect } from 'react'
import NProgress from 'nprogress'
import { Loader } from '../common/loader';
import 'nprogress/nprogress.css'

const RouteNProgress = () => {
  useEffect(() => {
    NProgress.start()

    return () => {
      NProgress.done()
    };
  });

  return <Loader />
};

export default RouteNProgress
