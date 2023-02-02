import React, { useState, useEffect } from "react";
import BoardList from "../../components/boards/BoardList";
import * as client from "../../api/board";

const BoardListPage = () => {
  const [boards, setBoards] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const listBoard = async () => {
    setLoading(true);
    try {
      const response = await client.fetchBoardList();

      setBoards(response.data);

      setLoading(false);
    } catch (e) {
      setLoading(false);
      throw e;
    }
  };

  useEffect(() => {
    listBoard();
  }, []);

  return <BoardList boards={boards} isLoading={isLoading} />;
};

export default BoardListPage;
