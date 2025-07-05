import toast from "react-hot-toast";
import { FaRegCircleCheck } from "react-icons/fa6";

const ToasterSoonerSuccess = (message: string) => {
  toast.dismiss();

  toast.success(message, {
    icon: <FaRegCircleCheck className="text-violet-600" size={22} />,
    style: {
      border: "1px solid #8b5cf6",
      padding: "12px 16px",
      color: "#4c1d95",
      background: "#f5f3ff",
      fontWeight: "500",
    },
  });
};

export default ToasterSoonerSuccess;
