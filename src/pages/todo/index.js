
import { useDispatch, useSelector } from "react-redux";
import reduxQuerySync from 'redux-query-sync';
import Template from "./containers/template";
import { getTodos } from "../../store/actions/todo";
import queries from "../../store/queries/todo";
import store from "../../store"
import TodosContainer from "./containers";
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
      <TodosContainer />
    </Template>
  )
}
export default App
