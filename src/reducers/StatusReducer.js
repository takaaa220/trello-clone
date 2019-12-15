import { StatusActionType } from "../actions/StatusActions";

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case StatusActionType.CHANGE_DRAG_STATUS:
      return {
        ...state,
        dragging: payload.status
      };
    default:
      return state;
  }
};

export default reducer;
