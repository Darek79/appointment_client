import {
  GET_DATES,
  GET_ERROR,
} from "./../actions/appointmentDates";
const init = {
  weeks: [],
  status: false,
};

function appointmentBooking(
  state = init,
  action
) {
  switch (action.type) {
    case GET_DATES:
      return {
        data: [...state.weeks, ...action.weeks],
        status: true,
      };
    case GET_ERROR:
      return {status: false};
    default:
      return state;
  }
}

export default appointmentBooking;
