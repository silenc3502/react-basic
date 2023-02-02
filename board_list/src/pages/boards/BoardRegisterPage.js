import React from "react";
import { useNavigate } from "react-router-dom";
import BoardRegisterForm from "../../components/boards/BoardRegisterForm";
import * as client from "../../api/board";

const BoardRegisterPage = ({ history }) => {
  const navigate = useNavigate();

  const onRegister = async (title, content, writer) => {
    try {
      const response = await client.registerBoard(title, content, writer);

      alert("등록되었습니다.");

      //history.push("/read/" + response.data.boardNo);
      navigate("/read/" + response.data.boardNo)
    } catch (e) {
      console.log(e);
    }
  };

  return <BoardRegisterForm onRegister={onRegister} />;
};

export default BoardRegisterPage;
