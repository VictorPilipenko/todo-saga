import { setCurrentPage, setPageSize } from "../../actions/restful/todo";

const queries = {
	page: {
		selector: state => state.todos.pagination.currentPage,
    action: setCurrentPage,
    stringToValue: string => Number.parseInt(string) || 1
  },
  size: {
		selector: state => state.todos.pagination.pageSize,
    action: setPageSize,
    stringToValue: string => Number.parseInt(string) || 1
  },
};

export default queries
