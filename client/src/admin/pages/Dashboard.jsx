

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { userCount } from "../../services/adminService/userService";
import { trainerCount } from "../../services/adminService/TrainerService";
import { traineeLoader, trainerLoader } from '../../components/icons'
import { fadeIn } from "../../assets/utils/motion";
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
    <>
      <div className="flex flex-col gap-5 text-background">
        <div className="flex gap-5">
          {/* trainer  */}
          <div className=" w-2/6 bg-green-50 border border-green-200 rounded-xl p-4 flex justify-between hover:shadow-md hover:bg-green-100 hover:border-green-300 transition ease-in-out duration-300">
            <div>
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
                  stroke="#93c5fd"
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
            <motion.img
              initial='hidden'
              animate={'show'}
              variants={fadeIn("up", "", 0.6, 0.5)} src={trainerLoader} alt="" className="h-56 aspect-auto hover:cursor-pointer" />
          </div>

          {/* trainee */}
          <div className="w-2/6 bg-green-50 border border-green-200 rounded-xl p-4 flex justify-between hover:shadow-md hover:bg-green-100 hover:border-green-300 transition ease-in-out duration-300">
            <div>
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
            <motion.img
              initial='hidden'
              animate={'show'}
              variants={fadeIn("up", "", 0.6, 0.5)}
              src={traineeLoader} alt="" className="h-56 aspect-auto  hover:cursor-pointer" />
          </div>

          <div className="w-2/6 flex flex-col gap-5">
            <div className=" bg-blue-50 border border-blue-200 rounded-xl p-4 flex justify-between h-[50%] text-light dark:text-background">1</div>
            <div className=" bg-blue-50 border border-blue-200 rounded-xl p-4 flex justify-between h-[50%] text-light dark:text-background">2</div>
          </div>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex justify-between text-backgroun">
          section 2
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex justify-between text-backgroun">
          section 3
        </div>


      </div>
    </>
  );
}

export default Dashboard;
