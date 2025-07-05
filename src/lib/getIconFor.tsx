import {
  FaBolt,
  FaBug,
  FaCheckCircle,
  FaCodeBranch,
  FaCogs,
  FaDatabase,
  FaMobileAlt,
  FaPaintBrush,
  FaRocket,
} from "react-icons/fa";

export function getIconFor(item: string) {
  if (item.includes("bug")) return <FaBug className="text-red-400 mt-1" />;
  if (item.includes("feature"))
    return <FaRocket className="text-yellow-300 mt-1" />;
  if (item.includes("UI") || item.includes("design"))
    return <FaPaintBrush className="text-pink-400 mt-1" />;
  if (item.includes("performance") || item.includes("optimiz"))
    return <FaBolt className="text-orange-400 mt-1" />;
  if (item.includes("API") || item.includes("integration"))
    return <FaCogs className="text-blue-300 mt-1" />;
  if (item.includes("mobile"))
    return <FaMobileAlt className="text-green-300 mt-1" />;
  if (item.includes("dashboard") || item.includes("platform"))
    return <FaDatabase className="text-purple-300 mt-1" />;
  if (item.includes("component"))
    return <FaCodeBranch className="text-cyan-300 mt-1" />;
  return <FaCheckCircle className="text-gray-300 mt-1" />;
}
