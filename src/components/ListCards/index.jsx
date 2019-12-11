import React, { memo } from "react";

import ListCard from "../ListCard";

const ListCards = ({ items }) => {
  return (
    <div className="ListCards">
      {items.map(item => (
        <ListCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default memo(ListCards);
