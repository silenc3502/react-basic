import React from "react";
import { useNavigate } from "react-router-dom";
import ItemRegisterForm from "../components/ItemRegisterForm";
import axios from "axios";

const ItemRegisterPage = ({ history }) => {
  const navigate = useNavigate();

  const onRegister = (itemName, price, description, file) => {
    const itemObject = {
      itemId: 0,
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

    axios.post("http://localhost:7777/items/register", formData)
    .then((res) => {
      alert("등록되었습니다.");

      navigate("/read/" + res.data);
    })
    .catch((err) => {
      alert(err);
    });
  };

  return <ItemRegisterForm onRegister={onRegister} />;
};

export default ItemRegisterPage;
