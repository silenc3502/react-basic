import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BoardModifyForm from "../../components/boards/BoardModifyForm";
import * as client from "../../api/board";

const BoardModifyPage = ({ match, history }) => {
  const { boardNo } = useParams();
  
  const [board, setBoard] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const navigate = useNavigate();

  const onModify = async (boardNo, title, content, writer, regDate) => {
    try {
      await client.modifyBoard(boardNo, title, content, writer, regDate);

      alert("수정되었습니다.");

      navigate("/read/" + boardNo);
    } catch (e) {
      console.log(e);
    }
  };

  const readBoard = async (boardNo) => {
    setLoading(true);
    try {
      const response = await client.fetchBoard(boardNo);

      setBoard(response.data);

      setLoading(false);
    } catch (e) {
      throw e;
    }
  };

  useEffect(() => {
    readBoard(boardNo);
  }, [boardNo]);

  return (
    <BoardModifyForm
      board={board}
      isLoading={isLoading}
      onModify={onModify}
    />
  );
};

export default BoardModifyPage;
