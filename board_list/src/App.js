import React from 'react';
import { Route, Routes } from "react-router-dom";
import BoardListPage from "./pages/boards/BoardListPage"
import BoardRegisterPage from "./pages/boards/BoardRegisterPage";
import BoardModifyPage from "./pages/boards/BoardModifyPage";
import BoardReadPage from "./pages/boards/BoardReadPage";

function App () {
  return (
      <>
          <Routes>
              <Route element={<BoardListPage/>} path="/" exact></Route>
              <Route element={<BoardRegisterPage/>} path="/create"></Route>
              <Route element={<BoardModifyPage/>} path="/edit/:boardNo"></Route>
              <Route element={<BoardReadPage/>} path="/read/:boardNo"></Route>
          </Routes>
      </>
  );
}

export default App;
