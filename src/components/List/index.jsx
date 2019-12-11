import React, { memo } from "react";

import ListCards from "../ListCards";
import ListHeader from "../ListHeader";

const List = props => {
  return (
    <div className="List">
      <ListHeader title={props.title} />
      <ListCards items={props.items} />
    </div>
  );
};

export default memo(List);
