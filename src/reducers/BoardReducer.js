const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ChagneTitle":
      return {
        ...state,
        title: payload.title
      };
  }
};

export default reducer;
