import React, { useContext, memo } from "react";

import ListContext from "../../contexts/ListContext";
import BoardContext from "../../contexts/BoardContext";
import { AddList } from "../../actions/BoardActions";

import ListCards from "../ListCards";
import ListHeader from "../ListHeader";
import Add from "../Add";

const List = props => {
  const { id } = useContext(ListContext);
  const { dispatch } = useContext(BoardContext);

  const addCard = value => {
    dispatch(AddList(value));
  };

  return (
    <div className="List">
      {props.id ? (
        <>
          <ListHeader title={props.title} />
          <ListCards items={props.items} />
        </>
      ) : (
        <Add onSubmit={addCard} />
      )}
    </div>
  );
};

export default memo(List);
