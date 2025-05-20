import React, { useState } from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
} from "recharts";

const initialData = [
  { name: "Direct", value: 400, color: "#3B82F6" },
  { name: "Social Media", value: 300, color: "#34D399" },
  { name: "Email", value: 300, color: "#F59E0B" },
  { name: "Referrals", value: 200, color: "#EF4444" },
  { name: "Others", value: 150, color: "#22D3EE" },
];

const ProjectTechnologiesChart = () => {
  // track which keys are "on"
  const [activeKeys, setActiveKeys] = useState(
    initialData.reduce((acc, { name }) => {
      acc[name] = true;
      return acc;
    }, {}),
  );

  const toggleKey = (name) => {
    setActiveKeys((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  // only slices with activeKeys[name] === true
  const filteredData = initialData.filter((d) => activeKeys[d.name]);

  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={filteredData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
          >
            {filteredData.map((entry) => (
              <Cell key={entry.name} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />

          {/* custom legend rendering from the full initialData */}
          <Legend
            content={() => (
              <ul className="mt-2 flex flex-wrap justify-center gap-4">
                {initialData.map(({ name, color }) => {
                  const isActive = activeKeys[name];
                  return (
                    <li
                      key={name}
                      onClick={() => toggleKey(name)}
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") toggleKey(name);
                      }}
                      className={`flex cursor-pointer items-center space-x-2 select-none ${isActive ? "opacity-100" : "opacity-40"} focus:outline-none`}
                      style={{ outline: "none" }}
                    >
                      <span
                        className="h-3 w-3 rounded-full"
                        style={{ backgroundColor: color }}
                      />
                      <span>{name}</span>
                    </li>
                  );
                })}
              </ul>
            )}
            verticalAlign="top"
            align="center"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProjectTechnologiesChart;
