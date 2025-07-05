import { techStack } from "@/data/Teck";
import React from "react";
import { FaTools } from "react-icons/fa";

const TeckSkill = () => {
  return (
    <div>
      <h4 className="text-xl font-semibold flex items-center gap-2 mt-4 mb-3">
        <FaTools className="text-violet-500" />
        Tech Stack
      </h4>
      <div className="flex flex-wrap gap-4">
        {techStack.map((tool) => (
          <div
            key={tool.name}
            className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-xl shadow-md hover:scale-105 hover:shadow-purple-400/40 transition"
          >
            {tool.icon}
            <span className="text-sm">{tool.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeckSkill;
