import React, { memo, useContext } from "react";

import ListContext from "../../libs/ListContext";

import ListCard from "../ListCard";

const ListCards = () => {
  const { items } = useContext(ListContext);

  return (
    <div className="ListCards">
      {items.map(item => (
        <ListCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default memo(ListCards);
