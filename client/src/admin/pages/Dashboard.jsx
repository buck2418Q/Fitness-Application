

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { userCount } from "../../services/adminService/userService";
import { trainerCount } from "../../services/adminService/TrainerService";

function Dashboard() {
  const [totalUser, setTotalUsers] = useState(0);
  const [totalTrainer, setTotalTrainer] = useState(0);
  const maxUsers = totalUser ? totalUser * 1.2 : 1; 
  const maxTrainers = totalTrainer ? totalTrainer * 1.2 : 1; 

  useEffect(() => {
    UserCount();
    TrainerCount();
  }, []);

  const UserCount = async () => {
    try {
      const totalUsers = await userCount();
      setTotalUsers(totalUsers);
      console.log("totalUsers", totalUsers);
    } catch (error) {
      console.error(error);
    }
  };

  const TrainerCount = async () => {
    try {
      const result = await trainerCount();
      setTotalTrainer(result);
    } catch (error) {
      console.error(error);
    }
  }

  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const offsetUser = circumference - (totalUser / maxUsers) * circumference;
  const offsetTrainer = circumference - (totalTrainer / maxTrainers) * circumference;

  return (
    <div className="flex gap-6">
      <div className="w-2/6 bg-green-50 border border-green-200 rounded-xl p-4">
        <svg width="160" height="160">
          <circle
            stroke="#eee"
            fill="transparent"
            strokeWidth="12"
            cx="80"
            cy="80"
            r={radius}
          />
          <motion.circle
            stroke="#6ede9f"
            fill="transparent"
            strokeWidth="12"
            cx="80"
            cy="80"
            r={radius}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offsetUser }}
            transition={{ duration: 1 }}
            style={{ strokeDasharray: circumference }}
          />
        </svg>
        <div>Total Users: {totalUser}</div>
      </div>
      <div className="w-2/6 bg-green-50 border border-green-200 rounded-xl p-4">
        <svg width="160" height="160">
          <circle
            stroke="#eee"
            fill="transparent"
            strokeWidth="12"
            cx="80"
            cy="80"
            r={radius}
          />
          <motion.circle
            stroke="#6ede9f"
            fill="transparent"
            strokeWidth="12"
            cx="80"
            cy="80"
            r={radius}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offsetTrainer }}
            transition={{ duration: 1 }}
            style={{ strokeDasharray: circumference }}
          />
        </svg>
        <div>Total Trainers: {totalTrainer}</div>
      </div>
    </div>
  );
}

export default Dashboard;
