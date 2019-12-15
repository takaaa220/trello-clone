import React, { useContext } from "react";
import Backend from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

import BoardContext from "../../contexts/BoardContext";
import ListContext from "../../contexts/ListContext";

import List from "../List";

const ListArea = () => {
  const { cards } = useContext(BoardContext);

  return (
    <div className="ListArea">
      <DndProvider backend={Backend}>
        {cards.map(card => (
          <ListContext.Provider key={card.id} value={{ id: card.id }}>
            <List {...card} />
          </ListContext.Provider>
        ))}
      </DndProvider>
      <List />
    </div>
  );
};

export default ListArea;
