
import cogoToast from "cogo-toast";

const defaultOptions = {
  position: "top-right"
};

const notification = {
  error: message => {
    const { hide } = cogoToast.error(
      message || "error",
      {
        ...defaultOptions,
        onClick: () => hide()
      }
    );
  },
  success: message => {
    const { hide } = cogoToast.success(
      message || "success",
      {
        ...defaultOptions,
        onClick: () => hide()
      }
    );
  },
  warning: message => {
    const { hide } = cogoToast.warn(message || "warning", {
      ...defaultOptions,
      onClick: () => hide()
    });
  },
  info: message => {
    const { hide } = cogoToast.info(message || "info", {
      ...defaultOptions,
      onClick: () => hide()
    });
  },
  loading: message => cogoToast.loading(message || "loading...")
};

export default notification
