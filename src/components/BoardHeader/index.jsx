import React, { useContext, memo } from "react";
import BoardContext from "../../libs/BoardContext";

const BoardHeader = () => {
  const { title } = useContext(BoardContext);

  return (
    <div className="BoardHeader">
      <h2 className="BoardHeader__Heading">{title}</h2>
    </div>
  );
};

export default memo(BoardHeader);
