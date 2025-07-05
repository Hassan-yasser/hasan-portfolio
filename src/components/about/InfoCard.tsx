import React from "react";

const InfoCard = ({
  icon,
  color,
  title,
  desc,
}: {
  icon: React.ReactNode;
  color: string;
  title: string;
  desc: string;
}) => {
  return (
    <div className="flex gap-4 items-start">
      <div className={`text-3xl mt-1 ${color}`}>{icon}</div>
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm text-purple-300 mt-2">{desc}</p>
      </div>
    </div>
  );
};

export default InfoCard;
