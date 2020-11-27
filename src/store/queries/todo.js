import { setCurrentPage, setPageSize, setTotalPages } from "../actions/todo";

export default {
	currentPage: {
		selector: state => state.todos.pagination.currentPage,
    action: setCurrentPage,
    stringToValue: string => Number.parseInt(string) || 1
  },
  pageSize: {
		selector: state => state.todos.pagination.pageSize,
    action: setPageSize,
    stringToValue: string => Number.parseInt(string) || 1
  },
  totalPages: {
		selector: state => state.todos.pagination.totalPages,
    action: setTotalPages,
    stringToValue: string => Number.parseInt(string) || 1
	},
};
