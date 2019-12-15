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
    case BoardActionType.ADD_CARD:
      const tmpCards2 = state.cards;
      tmpCards2.map(card => {
        if (card.id !== payload.id) return card;

        const items = card.items;
        items.push({
          id: 12,
          text: payload.title
        });

        return {
          ...card,
          items
        };
      });

      return {
        ...state,
        cards: tmpCards2
      };
    case BoardActionType.CHANGE_CARD_ORDER:
      const { listId, ...movedCard } = payload.movedCard;

      let tmpCards3 = state.cards.map(card => {
        console.log(card.id, listId);
        if (card.id === listId) {
          const items = card.items;

          const index = items.findIndex(item => item.id === movedCard.id);

          items.splice(index, 1);

          return {
            ...card,
            items
          };
        }

        return card;
      });

      tmpCards3 = tmpCards3.map(card => {
        if (card.id === payload.changedCard.listId) {
          const items = card.items;
          const index = items.indexOf(
            item => item.id === payload.changedCard.cardId
          );

          items.splice(index, 0, movedCard);

          return {
            ...card,
            items
          };
        }

        return card;
      });

      // console.log(tmpCards3);

      return {
        ...state,
        cards: tmpCards3
      };
    default:
      return state;
  }
};

export default reducer;
