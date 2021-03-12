const init = {
  status: false,
  data: [],
};

export const user = (state = init, action) => {
  switch (action.type) {
    case "FETCH_OK_USER":
      return {status: true, data: action.payload};
    case "FETCH_ERROR_USER":
      return {status: false};
    default:
      return state;
  }
};
