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
    });
    console.log(res);
    fnSet(() => res.data);
  } catch (e) {
    console.log(e.response.data.message);
    fnSet(() => e.response.data.message);
    // console.log(e.response.data.message);
  }
};
