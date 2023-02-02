import React from 'react';
import { Route, Routes } from "react-router-dom";
import BoardListPage from "./pages/boards/BoardListPage"
import BoardRegisterPage from "./pages/boards/BoardRegisterPage";
import BoardModifyPage from "./pages/boards/BoardModifyPage";
import BoardReadPage from "./pages/boards/BoardReadPage";

function App () {
  return (
    <Routes>
      <Route component={BoardListPage} path="/" exact />
      <Route component={BoardRegisterPage} path="/create" />
      <Route component={BoardModifyPage} path="/edit/:boardNo" />
      <Route component={BoardReadPage} path="/read/:boardNo" />
    </Routes>
  );
}

export default App;
