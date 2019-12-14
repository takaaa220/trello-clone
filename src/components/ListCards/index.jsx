import React, { useContext, memo } from "react";

import ListContext from "../../contexts/ListContext";
import BoardContext from "../../contexts/BoardContext";
import { AddCard } from "../../actions/BoardActions";

import ListCard from "../ListCard";
import Add from "../Add";

const ListCards = ({ items }) => {
  const { id } = useContext(ListContext);
  const { dispatch } = useContext(BoardContext);

  const onSubmit = value => {
    dispatch(
      AddCard({
        id,
        title: value
      })
    );
  };

  return (
    <div className="ListCards">
      {items.map(item => (
        <ListCard key={item.id} {...item} />
      ))}
      <Add isCard onSubmit={onSubmit} />
    </div>
  );
};

export default memo(ListCards);
