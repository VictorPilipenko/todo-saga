import { CubeLoader, DefaultLoader } from '../../common/loader'
import { getConnectionSpeed } from '../../utils/network'

const Loader = () => {
  const getLoader = () => {
    if (getConnectionSpeed() < 0.5) {
      return <CubeLoader global size={200} border={5} />
    }
    return <DefaultLoader global />
  }

  return getLoader()
}

export default Loader
