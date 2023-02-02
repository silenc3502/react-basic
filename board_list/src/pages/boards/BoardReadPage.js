import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BoardRead from "../../components/boards/BoardRead";
import * as client from "../../api/board";

const BoardReadPage = ({ match, history }) => {
  const { boardNo } = useParams();

  const [board, setBoard] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const navigate = useNavigate();

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

  const onRemove = async () => {
    console.log("boardNo = " + boardNo);

    try {
      await client.removeBoard(boardNo);

      alert("삭제되었습니다.");

      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    readBoard(boardNo);
  }, [boardNo]);

  return (
    <BoardRead
      boardNo={boardNo}
      board={board}
      isLoading={isLoading}
      onRemove={onRemove}
    />
  );
};

export default BoardReadPage;
