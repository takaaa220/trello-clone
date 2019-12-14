import React, { useContext, memo } from "react";

import BoardContext from "../../contexts/BoardContext";

import List from "../List";
import Add from "../Add";

const ListArea = () => {
  const { cards } = useContext(BoardContext);

  return (
    <div className="ListArea">
      {cards.map(card => (
        <List key={card.id} {...card} />
      ))}
      <List />
    </div>
  );
};

export default memo(ListArea);
