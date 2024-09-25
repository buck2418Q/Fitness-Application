// import React from 'react'

import { useState } from "react";
import ButtonUi from '../components/Button'
import file from '../assets/icons/file.png'

function Signup() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };
  const returnHome = () => {
    alert('back to home')
    setStep(1)
  }
  const acceptNumber = (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, '')
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#00000033]">
      <div className="bg-white p-8 rounded-3xl shadow-lg w-full md:w-8/12 lg:w-5/12 h-full">
        <h2 className="text-3xl font-bold mb-4">Join Us Now</h2>
        <hr />
        <div className={`${step === 4 ? 'hidden' : 'flex items-center justify-between m-6 overflow-hidden'}`}>
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-black text-white">
            1
          </span>
          <span className="w-4/12 h-[2px] rounded-xl bg-gray-400"></span>
          <span className={`flex items-center justify-center w-10 h-10 rounded-full  text-white ${step === 2 || step === 3 ? 'bg-black' : 'bg-gray-400'}`}>
            2
          </span>

          <span className="w-4/12 h-[2px] rounded-xl bg-gray-400"></span>
          <span className={`flex items-center justify-center w-10 h-10 rounded-full  text-white ${step === 3 ? 'bg-black' : 'bg-gray-400'}`}>
            3
          </span>

        </div>
        {step === 1 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Basic Details</h2>
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 md:mr-2">
                <input className="w-full p-2 mb-4 border rounded-xl" type="text" placeholder="Enter name" />
                <input className="w-full p-2 mb-4 border rounded-xl" type="text" placeholder="Enter phone no" />
                <input className="w-full p-2 mb-4 border rounded-xl" type="email" placeholder="Enter email" />
              </div>
              <div className="w-full md:w-1/2 md:ml-2 mb-4">
                <label htmlFor="file-upload" className="border w-full h-full flex flex-col items-center justify-center cursor-pointer rounded-xl">
                  <img src={file} alt="" />
                  <span className="text-s m-1 text-center"> Drop your file here or browse</span>
                  <span className="text-xs font-thin text-center">Maximum uploaded file size: 05 MB</span>
                </label>
                <input type="file" name="" id="file-upload" className="hidden" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-2">
              <select className="w-full p-2 mb-4 border rounded-xl">
                <option value="" disabled defaultValue>Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <input className="w-full p-2 mb-4 border rounded-xl" type="text" placeholder="Enter age" onInput={acceptNumber} />
              <input className="w-full p-2 mb-4 border rounded-xl" type="text" placeholder="Enter height" onInput={acceptNumber} />
              <input className="w-full p-2 mb-4 border rounded-xl" type="text" placeholder="Enter weight" onInput={acceptNumber} />
            </div>
            <div className="w-full">
              <ButtonUi
                text="Next"
                onClick={nextStep}
                type="secondary"
                size="medium"
              />
            </div>
          </div>
        )}
        {step === 2 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Membership Details</h2>
            <input className="w-full p-2 mb-4 border rounded-xl" type="text" placeholder="Select Plan" />
            <input className="w-full p-2 mb-4 border rounded-xl" type="text" placeholder="Plan Duration" />
            <input className="w-full p-2 mb-4 border rounded-xl" type="date" placeholder="Start Date" />
            <input className="w-full p-2 mb-4 border rounded-xl" type="date" placeholder="End Date" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
              <span className="bg-gray-200 p-2 rounded-xl">Goal 1</span>
              <span className="bg-gray-200 p-2 rounded-xl">Goal 2</span>
              <span className="bg-gray-200 p-2 rounded-xl">Goal 3</span>
              <span className="bg-gray-200 p-2 rounded-xl">Goal 4</span>
              <span className="bg-gray-200 p-2 rounded-xl">Goal 5</span>
              <span className="bg-gray-200 p-2 rounded-xl">Goal 6</span>
              <span className="bg-gray-200 p-2 rounded-xl">Goal 7</span>
              <span className="bg-gray-200 p-2 rounded-xl">Goal 8</span>
            </div>
            <div className="flex justify-evenly gap-2 md:gap-28">
              <div></div>
              <div className="w-full">
                <ButtonUi
                  text="Back"
                  onClick={prevStep}
                  type="secondary"
                  size="medium"
                />
              </div>
              <div className="w-full">
                <ButtonUi
                  text="Next"
                  onClick={nextStep}
                  type="secondary"
                  size="medium"
                />
              </div>
              <div></div>
            </div>
          </div>
        )}
        {step === 3 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Pricing</h2>
            <div className="flex justify-evenly gap-2 md:gap-28">
              <div></div>
              <div className="w-full">
                <ButtonUi
                  text="Back"
                  onClick={prevStep}
                  type="secondary"
                  size="medium"
                />
              </div>
              <div className="w-full">
                <ButtonUi
                  text="Next"
                  onClick={nextStep}
                  type="secondary"
                  size="medium"
                />
              </div>
              <div></div>
            </div>
          </div>
        )}
        {step === 4 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Thank you !!</h2>
            <ButtonUi
              text="Back To Home"
              onClick={returnHome}
              type="secondary"
              size="medium"
            />
          </div>
        )}
      </div>
    </div >
  )
}

export default Signup