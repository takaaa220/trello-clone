import { BoardActionType } from "../actions/BoardActions";

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case BoardActionType.CHANGE_TITLE:
      return {
        ...state,
        title: payload.title
      };
    case BoardActionType.CHANGE_LIST_TITLE:
      const cards = state.cards.map(card =>
        card.id === payload.id
          ? {
              ...card,
              title: payload.title
            }
          : card
      );

      return {
        ...state,
        cards
      };
    case BoardActionType.ADD_LIST:
      const tmpCards = state.cards;
      tmpCards.push({
        id: tmpCards.length + 1,
        title: payload.title,
        items: []
      });

      return {
        ...state,
        cards: tmpCards
      };
    default:
      return state;
  }
};

export default reducer;
