import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ItemModifyForm from "../components/ItemModifyForm";
import {
  fetchItem,
  FETCH_ITEM,
} from "../modules/item";
import axios from "axios";

const ItemModifyPage = ({ match, history }) => {
  const { itemId } = useParams();

  const dispatch = useDispatch();
  
  const { item, isLoading } = useSelector(({ item, loading }) => ({
    item: item.item,
    isLoading: loading[FETCH_ITEM],
  }));

  const navigate = useNavigate();

  const onModify = (itemName, price, description, file) => {
    const itemObject = {
      itemId: itemId,
      itemName: itemName,
      price: price,
      description: description,
    };

    const formData = new FormData();

    formData.append("file", file);

    formData.append(
        "item",
        new Blob([JSON.stringify(itemObject)], { type: "application/json" })
    )

    axios.put(`http://localhost:7777/items/modify`, formData)
    .then((res) => {
      alert("수정되었습니다.");

      navigate("/read/" + res.data.itemId);
    })
    .catch((err) => {
      alert(err.response.data.msg);
    });
  };

  useEffect(() => {
    dispatch(fetchItem(itemId));
  }, [dispatch, itemId]);

  return (
    <ItemModifyForm
      item={item}
      isLoading={isLoading}
      onModify={onModify}
    />
  );
};

export default ItemModifyPage;
