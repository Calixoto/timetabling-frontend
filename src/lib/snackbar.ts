import { toast } from "react-toastify";
export const snackbar = (
  type: "success" | "error" | "info" | "warning",
  message: string,
) => {
  return toast[type](message, {
    position: "bottom-center",
    autoClose: 2500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};
