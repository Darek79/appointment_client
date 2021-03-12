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
export const fetched_data_user = (data = []) => {
  return {
    type: "FETCH_OK_USER",
    payload: data,
  };
};
export const fetched_error_user = () => ({
  type: "FETCH_ERROR_USER",
});

export const fetch_files = (fnOK, FnERR) => {
  return async () => {
    try {
      const key = "AccessKey";
      const res = await fetch(
        "https://storage.bunnycdn.com/dkdevappointment/",
        {
          method: "GET",
          referrerPolicy: "no-referrer",
          headers: {
            [key]:
              "0fe84002-e413-4668-8c1ab4e1905b-e4c7-4ede",
          },
        }
      );
      const data = await res.json();
      const filtered = data.map(
        (el) => el.ObjectName
      );
      fnOK(filtered);
    } catch (error) {
      if (error) console.log(error);
      FnERR();
    }
  };
};

export const fetch_data = (
  fnOK,
  FnERR,
  url,
  val
) => {
  return async () => {
    try {
      const {data} = await axios.get(url);
      fnOK(data[`${val}`]);
    } catch (error) {
      if (error) console.log(error);
      FnERR();
    }
  };
};
