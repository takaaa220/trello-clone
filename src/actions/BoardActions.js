export const BoardActionType = {
  CHANGE_TITLE: "ChangeTitle",
  CHANGE_LIST_TITLE: "ChangeListTitle",
  ADD_LIST: "AddList"
};

export const changeTitle = title => ({
  type: BoardActionType.CHANGE_TITLE,
  payload: { title }
});

export const changeListTitle = ({ id, title }) => ({
  type: BoardActionType.CHANGE_LIST_TITLE,
  payload: {
    id,
    title
  }
});

export const AddList = title => ({
  type: BoardActionType.ADD_LIST,
  payload: {
    title
  }
});
