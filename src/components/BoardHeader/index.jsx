import React, { useContext, memo } from "react";

import BoardContext from "../../contexts/BoardContext";
import { changeTitle } from "../../actions/BoardActions";

import Edit from "../Edit";

const BoardHeader = ({ title }) => {
  const { dispatch } = useContext(BoardContext);

  const onSubmit = text => {
    dispatch(changeTitle(text));
  };

  return (
    <div className="BoardHeader">
      <Edit onSubmit={onSubmit} value={title} />
    </div>
  );
};

export default memo(BoardHeader);
