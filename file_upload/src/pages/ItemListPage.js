import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "../components/ItemList";
import {
  fetchItemList,
  FETCH_ITEM_LIST,
} from "../modules/item";

const ItemListPage = () => {
  const dispatch = useDispatch();
  
  const { items, isLoading } = useSelector(({ item, loading }) => ({
    items: item.items,
    isLoading: loading[FETCH_ITEM_LIST],
  }));
  
  useEffect(() => {
    dispatch(fetchItemList());
  }, [dispatch]);
  
  return <ItemList items={items} isLoading={isLoading} />;
};

export default ItemListPage;
