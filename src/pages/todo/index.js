
import React from "react";
import { Helmet } from "react-helmet";

import TodoTemplate from "./components/template";
import TodoHead from "./containers/head";
import TodoList from "./containers/list";
import TodoCreate from "./containers/create";

const pageTitle = "todo - Main Page"
const pageDescription = "We love learning - every day, in every form."

function App() {
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta property="og:title" content={pageTitle} />
        <meta name="description" content={pageDescription} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
      </Helmet>
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </>
  );
}
export default App;
