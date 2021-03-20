import axios from "axios";
export const GET_DATES = "GET_DATES";
export const GET_ERROR = "GET_ERROR";

export const fetchData = (weeks = {}) => ({
  type: GET_DATES,
  weeks,
});

export function appointmentweeks(
  fnOK,
  fnError,
  storeId,
  n = 0
) {
  return async () => {
    try {
      const {data} = await axios.get(
        `https://dkdev.tech/schedule/getdates/${storeId}/n`
      );
      console.log(data, "weeks");
      fnOK(data);
    } catch (error) {
      if (error) console.log(error);
      fnError(error.message);
    }
  };
}
