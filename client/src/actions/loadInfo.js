import { errorToast } from "./toastify";
import ENV from "./../config";

const API_HOST = ENV.api_host;

export const getAllUsers = (page) => {
  const url = `${API_HOST}/users/`;

  const request = new Request(url, {
    method: "get",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
  });

  fetch(request)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        return res.text();
      }
    })
    .then((res) => {
      if (typeof res === "object") {
        page.setState({
          candidates: res,
        });
        return;
      } else {
        errorToast(res);
        return;
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
