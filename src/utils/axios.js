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
      url: `http://localhost:5000/${url}`,//DUMMY URL
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
      data: JSON.stringify(payload),
    });
    console.log(res, "update ok");
    if (url === `api/login` && res.data.token) {
      return fnSet(() => ({
        status: true,
        msg: "",
      }));
    }
    if (url === "schedule/create" && res.data) {
      return fnSet(() => ({
        status: true,
        msg: "your updates were saved",
      }));
    }
  } catch (e) {
    console.log(
      e.response.data.message,
      "error update"
    );
    fnSet(() => ({
      status: false,
      msg:
        e.response.data.message ||
        "an error occured",
    }));
    // console.log(e.response.data.message);
  }
};

// url: `https://dkdev.tech/${url}`,
