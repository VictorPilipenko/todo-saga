
import cogoToast from "cogo-toast";
import config from "../../config/notification";

const notification = {
  error: message => {
    const { hide } = cogoToast.error(
      message || "error",
      {
        ...config,
        onClick: () => hide()
      }
    );
  },
  success: message => {
    const { hide } = cogoToast.success(
      message || "success",
      {
        ...config,
        onClick: () => hide()
      }
    );
  },
  warning: message => {
    const { hide } = cogoToast.warn(message || "warning", {
      ...config,
      onClick: () => hide()
    });
  },
  info: message => {
    const { hide } = cogoToast.info(message || "info", {
      ...config,
      onClick: () => hide()
    });
  },
  loading: message => cogoToast.loading(message || "loading...")
};

export default notification
