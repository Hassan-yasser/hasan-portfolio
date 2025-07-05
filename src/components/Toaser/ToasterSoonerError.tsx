import toast from "react-hot-toast";
import { FiAlertTriangle } from "react-icons/fi";

const ToasterSoonerError = (message: string) => {
  toast.dismiss();

  toast.error(message, {
    icon: <FiAlertTriangle className="text-red-600" size={22} />,
    style: {
      border: "1px solid #f87171",
      padding: "12px 16px",
      color: "#7f1d1d",
      background: "#fef2f2",
      fontWeight: "500",
    },
  });
};

export default ToasterSoonerError;
