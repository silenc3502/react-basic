import React from "react";
import { Route, Routes } from "react-router-dom";
import ItemListPage from "./pages/ItemListPage";
import ItemRegisterPage from "./pages/ItemRegisterPage";
import ItemModifyPage from "./pages/ItemModifyPage";
import ItemReadPage from "./pages/ItemReadPage";

function App() {
  return (
    <>
        <Routes>
            <Route element={<ItemListPage/>} path="/" exact></Route>
            <Route element={<ItemRegisterPage/>} path="/create"></Route>
            <Route element={<ItemModifyPage/>} path="/edit/:itemId"></Route>
            <Route element={<ItemReadPage/>} path="/read/:itemId"></Route>
        </Routes>
    </>
  );
}

export default App;
