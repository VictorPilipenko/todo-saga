import { useDispatch, useSelector } from 'react-redux'
import reduxQuerySync from 'redux-query-sync'
import { getTodos } from '../../store/restful/todo/actions'
import queries from '../../store/restful/todo/queries'
import SocketComponent from './components/socket'
import Template from './containers/template'
import TodosContainer from './containers'
import store from '../../store'
reduxQuerySync({
  store,
  params: queries,
  initialTruth: 'location',
  replaceState: true,
})

const App = () => {
  const dispatch = useDispatch()
  const { pagination } = useSelector((state) => state.todos)

  const getTodosAPI = () => {
    dispatch(
      getTodos({
        page: pagination.currentPage,
        pageSize: pagination.pageSize,
      })
    )
  }

  return (
    <Template callOnPageVisibility={getTodosAPI}>
      <SocketComponent />
      <TodosContainer />
    </Template>
  )
}
export default App
