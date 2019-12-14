import React, { memo } from "react";

import ListCards from "../ListCards";
import ListHeader from "../ListHeader";
import Add from "../Add";

const List = props => {
  return (
    <div className="List">
      {props.id ? (
        <>
          <ListHeader title={props.title} />
          <ListCards items={props.items} />
        </>
      ) : (
        <Add onSubmit={() => console.log("hello")} />
      )}
    </div>
  );
};

export default memo(List);
