import axios from "axios";
export const fetched_data = (data = []) => {
  return {
    type: "FETCH_OK",
    payload: data,
  };
};
export const fetched_error = () => ({
  type: "FETCH_ERROR",
});

export const fetch_files = (
  fnOK,
  FnERR,
  config
) => {
  return async () => {
    try {
      const {data} = await axios(config);
      console.log(data, "axios");
      fnOK(data);
    } catch (error) {
      if (error) console.log(error);
      FnERR();
    }
  };
};
