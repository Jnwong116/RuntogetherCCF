import { toast } from "react-toastify";

export const errorToast = (message) => {
  toast.error(message, {
    position: "top-center",
    autoclose: 2000,
    hideProgressBar: false,
    pauseOnHover: false,
    closeOnClick: true,
    draggable: true,
  });

  toast.clearWaitingQueue();
};

export const successToast = (message) => {
  toast.success(message, {
    position: "top-center",
    autoclose: 2000,
    hideProgressBar: false,
    pauseOnHover: false,
    closeOnClick: true,
    draggable: true,
  });

  toast.clearWaitingQueue();
};

export const closeToasts = () => {
  toast.dismiss();
};
