import { useEffect } from 'react'
import NProgress from 'nprogress'
import { MobileLoader, DefaultLoader } from '../../common/loader'
import config from '../../config/nprogress'
import 'nprogress/nprogress.css'
import { Default, Mobile } from '../../common/responsive'
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
  
  return <>
    <Default><DefaultLoader global /></Default>
    <Mobile><MobileLoader global size={200} border={5} /></Mobile>
  </>
};

export default RouteNProgress
