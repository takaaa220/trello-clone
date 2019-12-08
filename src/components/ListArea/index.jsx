import React, { useContext, memo } from "react";

import BoardContext from "../../libs/BoardContext";

import List from "../List";

const ListArea = () => {
  const { cards } = useContext(BoardContext);

  return (
    <div className="ListArea">
      {cards.map(card => (
        <List key={card.id} {...card} />
      ))}
    </div>
  );
};

export default memo(ListArea);
