import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ItemRead from "../components/ItemRead";
import {
  fetchItem,
  FETCH_ITEM,
} from "../modules/item";
import { removeItemApi } from "../lib/api";

const ItemReadPage = ({ match, history }) => {
  const { itemId } = useParams();
  
  const dispatch = useDispatch();
  
  const { item, isLoading } = useSelector(({ item, loading }) => ({
    item: item.item,
    isLoading: loading[FETCH_ITEM],
  }));

  const navigate = useNavigate();

  const onRemove = async () => {
    try {
      await removeItemApi(itemId);

      alert("삭제되었습니다.");

      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    dispatch(fetchItem(itemId));
  }, [dispatch, itemId]);
  
  return (
    <ItemRead
      itemId={itemId}
      item={item}
      isLoading={isLoading}
      onRemove={onRemove}
    />
  );
};

export default ItemReadPage;
