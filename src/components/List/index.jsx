import React from "react";

import ListCard from "../ListCard";

const List = () => {
  return (
    <div className="List">
      <div className="ListHeader">
        <h3 className="ListHeader__Heading">未着手</h3>
        <div>+</div>
      </div>
      <div className="ListCard">
        <ListCard />
        <ListCard />
        <ListCard />
      </div>
    </div>
  );
};

export default List;
