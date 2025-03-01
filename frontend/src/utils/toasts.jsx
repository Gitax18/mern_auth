import { toast } from "react-toastify";

export const HandleSuccess = function (msg) {
  toast.success(msg, {
    position: "top-right",
  });
};

export const HandleError = function (msg) {
  toast.error(msg, {
    position: "top-right",
  });
};
