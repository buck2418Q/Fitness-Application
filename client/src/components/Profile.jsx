import { fadeIn } from "../assets/utils/motion"
import { motion } from "framer-motion";
import profilePic from '../assets/images/profilePic.jpg'
import profileBanner from '../assets/images/profileBanner.jpg'
import { useState } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component'

function Profile() {
  const userName = localStorage.getItem('userName');
  const [activeTab, setActiveTab] = useState('tab1');

  const tabs = ['tab1', 'tab2', 'tab3'];
  const user = {
    fullName: 'John Doe',
    email: 'john@example.com',
    phone: '45783804539',
    mobile: '45783804539',
    address: 'test',
  };

  const userInfo = [
    { label: 'Full Name', value: user.fullName },
    { label: 'Email', value: user.email },
    { label: 'Phone', value: user.phone },
    { label: 'Mobile', value: user.mobile },
    { label: 'Address', value: user.address },
  ];
  const content = {
    tab1: (
      <motion.div initial='hidden' animate='show' variants={fadeIn("", "", .1, 0.5)} className=" rounded-md h-fit w-full">
        <div className="grid grid-cols-2 gap-4">
          {userInfo.map((item) => (
            <div key={item.label} className="col-span-1">
              <h6 className="mb-0">{item.label}</h6>
              <input
                type="text"
                className="mt-1 p-2 border border-gray-300 rounded w-full"
                value={item.value}
                readOnly
              />
            </div>
          ))}
          <div className="col-span-2 text-right">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Save Changes</button>
          </div>
        </div>
      </motion.div>
    ),
    tab2: (
      <motion.div initial='hidden' animate='show' variants={fadeIn("", "", .1, 0.5)} className="bg-blue-200 m-4 p-4 rounded-md h-fit">
        <h2>Content for Tab 2</h2>
        <p>This is the content displayed when Tab 2 is active.</p>
      </motion.div>
    ),
    tab3: (
      <motion.div initial='hidden' animate='show' variants={fadeIn("", "", .1, 0.5)} className="bg-green-200 m-4 p-4 rounded-md h-fit">
        <h2>Content for Tab 3</h2>
        <p>This is the content displayed when Tab 3 is active.</p>
      </motion.div>
    ),
  };

  return (
    <>
      <div className=" flex justify-center w-full gap-4 " style={{ height: 'calc(100vh - 105px)' }}>

        <motion.div initial='hidden' animate='show' variants={fadeIn("right", "spring", .1, 0.5)} className="bg-light dark:bg-secondary text-secondary dark:text-light rounded-lg shadow-lg w-1/4 border border-gray-200 " onClick={(e) => e.stopPropagation()}>

          <div className='p-1 flex flex-col items-center justify-center '>
            <LazyLoadImage src={profileBanner} alt="" className='rounded-lg w-full h-44 object-cover' />
            <LazyLoadImage src={profilePic} alt="" className='rounded-full w-32 top-[-60px]  relative shadow-black border-white border-3' />

          </div>


          <div className="relative top-[-40px] m-3">
            <div className=" flex align-baseline justify-between">
              <p className='text-xl text-center font-bold'>{userName}</p>
              <p className='text-base text-center font-semibold'>{userName}</p>
            </div>

            <div className=" p-2 flex flex-col">

              {tabs.map((tab) => (
                <button
                  key={tab}
                  className="border rounded-md my-4 p-3 cursor-pointer"
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* social links */}
            <ul className="list-none">
              {[
                { icon: 'globe', label: 'Website', value: 'https://bootdey.com' },
                { icon: 'github', label: 'Github', value: 'bootdey' },
                { icon: 'twitter', label: 'Twitter', value: '@bootdey' },
                { icon: 'instagram', label: 'Instagram', value: 'bootdey' },
                { icon: 'facebook', label: 'Facebook', value: 'bootdey' },
              ].map((item) => (
                <li key={item.label} className="flex justify-between items-center py-2">
                  <h6 className="flex items-center mb-0">
                    <i className={`fab fa-${item.icon} mr-2`}></i>{item.label}
                  </h6>
                  <span className="text-gray-600">{item.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
        <div key={activeTab} className="flex relative z-20 overflow-hidden justify-center w-3/4 rounded-md ">
          {content[activeTab]}
        </div>
      </div>
    </>

  )
}

export default Profile



