import React, { memo } from "react";

import ListContext from "../../libs/ListContext";

import ListCards from "../ListCards";
import ListHeader from "../ListHeader";

const List = props => {
  return (
    <ListContext.Provider value={props}>
      <div className="List">
        <ListHeader />
        <ListCards />
      </div>
    </ListContext.Provider>
  );
};

export default memo(List);
