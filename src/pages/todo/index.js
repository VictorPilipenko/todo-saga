
import React from "react";

import TodoTemplate from "./components/template";
import TodoHead from "./containers/head";
import TodoList from "./containers/list";
import TodoCreate from "./containers/create";

function App() {
  return (
    <>
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </>
  );
}
export default App;
