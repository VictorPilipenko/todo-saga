
import React from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import Template from "./containers/template";
import TodoHead from "./containers/head";
import TodoList from "./containers/list";
import TodoCreate from "./containers/create";
import { getTodos } from "../../store/actions/todo";

import reduxQuerySync from 'redux-query-sync';
import queries from "../../store/queries/todo";
import store from "../../store"
reduxQuerySync({
  store,
  params: queries,
  initialTruth: 'location',
  replaceState: true // use getTodosOnLocationChange action if fasle
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
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </Template>
    </>
  );
}
export default App;
