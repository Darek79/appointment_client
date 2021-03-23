import axios from "axios";
export const GET_DATES = "GET_DATES";
export const GET_ERROR = "GET_ERROR";
export const GET_RESET = "GET_RESET";

export const fetchData = (week = []) => ({
  type: GET_DATES,
  week,
});

export const fetchreset = () => ({
  type: GET_RESET,
});

export const fetchError = () => ({
  type: GET_ERROR,
});

export const appointmentweeks = (
  fnOK,
  fnError,
  storeId,
  n = 0
) => {
  return async () => {
    console.log("inside");
    try {
      const {data} = await axios.get(
        `http://localhost:5000/schedule/getdates/${storeId}/${n}`
      );
      console.log(data, "weeks");
      fnOK(data);
    } catch (error) {
      if (error) console.log(error);
      fnError();
    }
  };
};
