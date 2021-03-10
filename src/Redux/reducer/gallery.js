const init = {
  status: false,
  data: [],
};

export const gallery = (state = init, action) => {
  switch (action.type) {
    case "FETCH_OK":
      return {status: true, data: action.payload};
    case "FETCH_ERROR":
      return {status: false};
    default:
      return state;
  }
};
