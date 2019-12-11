import React, { useContext } from "react";

import BoardContext from "../../contexts/BoardContext";

import BoardHeader from "../BoardHeader";
import ListArea from "../ListArea";

const Board = () => {
  const { title } = useContext(BoardContext);

  return (
    <div className="Board">
      <BoardHeader title={title} />
      <ListArea />
    </div>
  );
};

export default Board;
