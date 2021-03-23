import {
  GET_DATES,
  GET_ERROR,
  GET_RESET,
} from "./../actions/appointmentDates";
const init = {
  data: [],
  status: false,
};

function appointmentBooking(
  state = init,
  action
) {
  console.log(Object.entries(state), "L");
  switch (action.type) {
    case GET_DATES:
      return {
        data:
          state.data.length === 0
            ? [action.week]
            : [...state.data, action.week],
        status: true,
      };
    case GET_RESET:
      return {
        data: [],
        status: false,
      };
    case GET_ERROR:
      return {status: false};
    default:
      return state;
  }
}

export default appointmentBooking;
