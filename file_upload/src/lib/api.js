import axios from "axios";

export const fetchItemApi = (itemId) => axios.get(`http://localhost:7777/items/${itemId}`);

export const fetchItemListApi = () => axios.get("http://localhost:7777/items/list");

export const removeItemApi = (itemId) => axios.delete(`http://localhost:7777/items/${itemId}`);
