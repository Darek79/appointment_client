import axios from "axios";

export const sendData = async (
  method,
  url,
  payload,
  fnSet
) => {
  try {
    const res = await axios({
      method: method,
      url: `https://dkdev.tech/${url}`,
      headers: {"Content-Type": "application/json"},
      data: JSON.stringify(payload),
      withCredentials: true,
    });
    console.log(res);
    fnSet(() => res.data.msg);
  } catch (e) {
    console.log(e.response.data.message);
    fnSet(() => e.response.data.message);
    // console.log(e.response.data.message);
  }
};
