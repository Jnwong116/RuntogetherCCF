import { errorToast } from "./toastify";
import ENV from "./../config";
import { STATUS } from "../constants";

const API_HOST = ENV.api_host;

export const createUser = (fbUser) => {
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
