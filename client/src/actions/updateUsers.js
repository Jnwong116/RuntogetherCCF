import { errorToast } from "./toastify";
import ENV from "./../config";
import { STATUS } from "../constants";
import { login } from "./loadInfo";

const API_HOST = ENV.api_host;

export const createTempUser = (fbUser) => {
  return {
    name: fbUser.name,
    position: [],
    vision: "",
    visionName: "",
    status: STATUS.WAITING,
    nominations: [],
    picture: fbUser.picture.data.url,
    id: fbUser.id,
  };
};

const udpatePositions = (user, positions, status) => {
  const url = `${API_HOST}/users/position/${user.id}`;

  const request = new Request(url, {
    method: "post",
    body: JSON.stringify({
      positions: positions,
      status: status,
    }),
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
        return res;
      } else {
        // errorToast(res);
        return;
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

const updateVision = (user, visionName, visionLink) => {
  const url = `${API_HOST}/users/vision/${user.id}`;

  const request = new Request(url, {
    method: "post",
    body: JSON.stringify({
      visionName: visionName,
      visionLink: visionLink,
    }),
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
        return res;
      } else {
        // errorToast(res);
        return;
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

const createUser = (fbUser) => {
  const url = `${API_HOST}/users/register`;

  const request = new Request(url, {
    method: "post",
    body: JSON.stringify({
      id: fbUser.id,
      name: fbUser.name,
      position: [],
      picture: fbUser.picture,
    }),
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
        return res;
      } else {
        return;
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const checkUserProfile = (
  user,
  position,
  status,
  visionName,
  visionLink,
  page
) => {
  let ready = true;
  // Checks status
  switch (status) {
    case STATUS.DECIDED:
      if (position === undefined || position.length !== 1) {
        ready = false;
        errorToast("Please select only one position");
      }
      break;
    case STATUS.CONSIDERING:
      if (position === undefined || position.length === 0) {
        ready = false;
        errorToast("Please select a position");
      }
      break;
    default:
      break;
  }

  if (ready) {
    // Checks if user is temp or not
    let newUser = undefined;
    if (status !== STATUS.WAITING) {
      newUser = createUser(user);
    }

    const person = newUser !== undefined ? newUser : user;

    udpatePositions(person, position, status);
    updateVision(person, visionName, visionLink);
    login(person, page);
    page.forceUpdate();
  }
};
