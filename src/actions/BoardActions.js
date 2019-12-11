export const BoardActionType = {
  CHANGE_TITLE: "ChageTitle"
};

export const changeTitle = title => ({
  type: BoardActionType.CHANGE_TITLE,
  payload: { title }
});
