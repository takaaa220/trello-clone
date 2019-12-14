import React, { memo } from "react";

import ListCard from "../ListCard";
import Add from "../Add";

const ListCards = ({ items }) => {
  return (
    <div className="ListCards">
      {items.map(item => (
        <ListCard key={item.id} {...item} />
      ))}
      <Add isCard onSubmit={() => console.log("hello")} />
    </div>
  );
};

export default memo(ListCards);
