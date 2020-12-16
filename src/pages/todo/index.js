
import { useDispatch, useSelector } from "react-redux";
import reduxQuerySync from 'redux-query-sync';
import Template from "./containers/template";
import { getTodos } from "../../store/actions/restful/todo";
import queries from "../../store/queries/restful/todo";
import store from "../../store"
import TodosContainer from "./containers";
import SocketComponent from "./components/socket";
reduxQuerySync({
  store,
  params: queries,
  initialTruth: 'location',
  replaceState: true
})

const App = () => {
  const dispatch = useDispatch()
  const { pagination } = useSelector(state => state.todos)

  const getTodosAPI = () => {
    dispatch(getTodos({
      page: pagination.currentPage,
      pageSize: pagination.pageSize
    }))
  }

  return (
    <Template callOnPageVisibility={getTodosAPI}>
      <SocketComponent />
      <TodosContainer />
    </Template>
  )
}
export default App
