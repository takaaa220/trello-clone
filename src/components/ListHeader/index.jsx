import React, { useContext, memo } from "react";

import { changeListTitle } from "../../actions/BoardActions";
import BoardContext from "../../contexts/BoardContext";
import ListContext from "../../contexts/ListContext";
import Edit from "../Edit";

const ListHeader = ({ title }) => {
  const { id } = useContext(ListContext);
  const { dispatch } = useContext(BoardContext);

  const onSubmit = value => {
    dispatch(changeListTitle({ id, title: value }));
  };

  return (
    <div className="ListHeader">
      <Edit onSubmit={onSubmit} value={title} />
      <div>+</div>
    </div>
  );
};

export default memo(ListHeader);
