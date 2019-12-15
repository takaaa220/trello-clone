export const StatusActionType = {
  CHANGE_DRAG_STATUS: "ChangeDragStatus",
  CHANGE_EDIT_STATUS: "ChangeEditStatus"
};

export const changeDragStatus = status => ({
  type: StatusActionType.CHANGE_DRAG_STATUS,
  payload: { status }
});
