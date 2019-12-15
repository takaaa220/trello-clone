import React, { useContext } from "react";
import { useDrag, useDrop } from "react-dnd";

import BoardContext from "../../contexts/BoardContext";
import { ChangeCardOrder } from "../../actions/BoardActions";
import StatusContext from "../../contexts/StatusContext";
import { changeDragStatus } from "../../actions/StatusActions";
import ListContext from "../../contexts/ListContext";

const ListCard = props => {
  const { dispatch } = useContext(BoardContext);
  const { id } = useContext(ListContext);
  const { dragging, statusDispatch } = useContext(StatusContext);

  const [dragProps, drag] = useDrag({
    item: { type: "card", card: props, listId: id },
    begin: () => {
      statusDispatch(changeDragStatus(true));
    },
    end: () => {
      statusDispatch(changeDragStatus(false));
    }
  });

  const [dropProps, drop] = useDrop({
    accept: "card",
    hover: (item, monitor) => {
      // console.log(item.id, props.id);
    },
    drop: (item, monitor) => {
      const movedCard = {
        ...item.card,
        listId: item.listId
      };
      const changedCard = {
        listId: id,
        cardId: props.id
      };

      dispatch(ChangeCardOrder({ movedCard, changedCard }));
    }
  });

  return (
    <div className="ListCard" ref={dragging ? drop : drag}>
      {props.text}
    </div>
  );
};

export default ListCard;
