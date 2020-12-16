import { useEffect } from 'react'
import NProgress from 'nprogress'
import { CubeLoader, DefaultLoader } from '../../common/loader'
import config from '../../config/nprogress'
import 'nprogress/nprogress.css'
import { getConnectionSpeed } from '../../utils/network'
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

  const getLoader = () => {
    if(getConnectionSpeed() < 0.5){
      return <CubeLoader global size={200} border={5} />
    }
    return <DefaultLoader global />
  }
  
  return getLoader()
}

export default RouteNProgress
