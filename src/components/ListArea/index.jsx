import React, { useContext, memo } from "react";

import BoardContext from "../../contexts/BoardContext";
import ListContext from "../../contexts/ListContext";

import List from "../List";

const ListArea = () => {
  const { cards } = useContext(BoardContext);

  return (
    <div className="ListArea">
      {cards.map(card => (
        <ListContext.Provider key={card.id} value={{ id: card.id }}>
          <List {...card} />
        </ListContext.Provider>
      ))}
      <List />
    </div>
  );
};

export default ListArea;
