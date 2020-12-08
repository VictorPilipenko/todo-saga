
import React from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
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

const pageTitle = "todo - Main Page"
const pageDescription = "We love learning - every day, in every form."

const App = () => {
  const { pagination } = useSelector(state => state.todos)

  const getTodosAPI = () => {
    return getTodos({
      page: pagination.currentPage,
      pageSize: pagination.pageSize
    })
  }

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta property="og:title" content={pageTitle} />
        <meta name="description" content={pageDescription} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
      </Helmet>
      <Template callOnPageVisibility={getTodosAPI}>
        <TodosContainer />
      </Template>
    </>
  );
}
export default App;