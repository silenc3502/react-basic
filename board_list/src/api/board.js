import axios from "axios";

export const registerBoard = (title, content, writer) => axios.post("http://localhost:7777/boards/register", { title, content, writer });

export const fetchBoard = (boardNo) => axios.get(`http://localhost:7777/boards/${boardNo}`);

export const fetchBoardList = () => axios.get("http://localhost:7777/boards/list");

export const removeBoard = (boardNo) => axios.delete(`http://localhost:7777/boards/${boardNo}`);

export const modifyBoard = (boardNo, title, content, writer, regDate) => axios.put(`http://localhost:7777/boards/${boardNo}`, { title, content, writer, regDate });
