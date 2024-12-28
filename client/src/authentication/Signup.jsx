/* eslint-disable no-unused-vars */
"use client";

// import React from 'react'
import { Button, Input, Select, SelectItem, Link, Divider, } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../assets/utils/motion";
import { toast, Toaster } from "sonner";
import Loader from "../components/Loader";
import { CreateUser, openAuth } from "../services/AuthenticationService";
import { NextButton } from "../components/NextButton";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

function Signup() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const toggleConfirmVisibility = () => setIsConfirmVisible(!isConfirmVisible);
  const [oAuthProvider, setOAuthProvider] = useState({ provider: '', token: '' })
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    age: '',
    height: '',
    weight: '',
    address: '',
    city: '',
    state: '',
    contactNumber: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const navigate = useNavigate();

  const nextStep = () => {
    setStep(step + 1);
  };
  const logInClick = () => {
    navigate('/login');
  }
  const prevStep = () => {
    setStep(step - 1);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const resetForm = () => {

    formData.firstName = ''
    formData.lastName = ''
    formData.gender = ''
    formData.age = ''
    formData.height = ''
    formData.weight = ''
    formData.address = ''
    formData.city = ''
    formData.state = ''
    formData.contactNumber = ''
    formData.email = ''
    formData.password = ''
    formData.confirmPassword = ''

  };

  const createUserClick = async (e) => {
    e.preventDefault();
    // for (const key in formData) {
    //   if (formData[key] === '') {
    //     toast(`Please enter ${key}`);
    //     return;
    //   }
    // }
    console.log('Form Data ', formData);
    try {
      setLoading(true);
      const result = await CreateUser(formData);
      if (result.statusCode === 201) {
        toast.success(result.message);
        navigate('/login')
      } else if (result.statusCode === 203) {
        toast.warning(result.message);
        setStep(1)
      } else if (result.statusCode === 202) {
        toast.error(result.message);
        setStep(1)
      }
    } catch (e) {
      console.error(e)
    }
    finally {
      resetForm()
      setLoading(false)
    }
  };

  // const acceptNumber = (e) => {
  //   e.target.value = e.target.value.replace(/[^0-9]/g, '');
  // };
  const gender = [
    { key: "male", label: "Male" },
    { key: "female", label: "Female" },
    { key: "other", label: "Other" },
  ]
  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      setLoading(true);
      oAuthProvider.provider = 'Google';
      oAuthProvider.token = credentialResponse;
      const result = await openAuth(oAuthProvider);
      console.log('Google Auth Result:', result);
      handleAuthSuccess(result);
    } catch (error) {
      console.error('Error in handleGoogleSuccess:', error);
      toast.error(error.message || 'Google authentication failed');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleFailure = () => {
    console.error("Google Sign-In Failed");
  };

  const handleAuthSuccess = (result) => {
    try {
      if (result.statusCode === 200) {
        toast.success(result.message);

        // Decode the token
        const decodedToken = jwtDecode(result.token);

        switch (decodedToken.role) {
          case 'admin':
            navigate('/admin');
            break;
          case 'user':
            navigate('/user');
            break;
          case 'trainer':
            navigate('/trainer');
            break;
          default:
            toast.error('Invalid User');
            navigate('/');
        }
        sessionStorage.setItem('token', result.token);

      } else if (result.statusCode === 211) {
        toast.error(result.message);
      }
    } catch (error) {
      console.error('Error in handleAuthSuccess:', error);
      toast.error(error.message || 'Something went wrong');
    }
  };


  return (

    <>
      <div className={`absolute z-20 rounded-2xl left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-svh w-svw ${loading === true ? "" : "hidden"}`}>
        <Loader />
      </div>
      <div className="flex flex-col h-full w-full items-center justify-center absolute bg-gradient-to-r from-green-100 to-gray-200">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeIn('', 'spring', .2, 0.75)}
          className="flex w-full max-w-sm flex-col gap-4 rounded-large  border-[1px] p-2 shadow-2xl opacity-35 ">
          <div className="flex flex-col items-center pb-6">
            {/* <AcmeIcon size={60} /> */}
            <p className="text-xl font-medium">Welcome</p>
            <p className="text-small text-default-500">Create an account to get started</p>
          </div>


          <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
            {/* Step 1: Email */}
            {step === 1 && (
              <NextButton color="secondary" size="md" className="w-full" type="submit" onClick={nextStep}>
                Continue with email
              </NextButton>

            )}

            {/* Step 2: First Name, Last Name, Gender, Age */}
            {step === 2 && (
              <div>
                <div className="flex flex-col mb-4">
                  <Input
                    isRequired
                    classNames={{ base: "-mb-[2px]", inputWrapper: "rounded-b-none" }}
                    label="First Name"
                    name="firstName"
                    type="text"
                    variant="bordered"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                  <Input
                    isRequired
                    classNames={{ base: "-mb-[2px]", inputWrapper: "rounded-none" }}
                    label="Last Name"
                    name="lastName"
                    type="text"
                    variant="bordered"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                  <Select
                    radius="none"
                    classNames="rounded-t-none rounded-lg bg-red-500"
                    variant="bordered"
                    items={gender}
                    label="Gender"
                    placeholder="Select gender"

                  >
                    {(item) =>
                      <SelectItem
                        key={item.value}
                        value={item.value}>{item.label}
                      </SelectItem>}
                  </Select>

                  <Input
                    isRequired
                    classNames={{ inputWrapper: "rounded-t-none" }}
                    label="Age"
                    name="age"
                    type="number"
                    variant="bordered"
                    value={formData.age}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex justify-between gap-2 md:gap-28">

                  <NextButton onClick={prevStep} color="secondary" size="md" className="w-full">Back</NextButton>

                  <NextButton onClick={nextStep} color="secondary" size="md" className="w-full">Next</NextButton>

                </div>
              </div>
            )}

            {/* Step 3: Height, Weight, Address, City, State */}
            {step === 3 && (
              <div>
                <div className="flex flex-col mb-4">
                  <Input
                    isRequired
                    classNames={{ base: "-mb-[2px]", inputWrapper: "rounded-b-none" }}
                    label="Height in cm"
                    name="height"
                    type="number"
                    variant="bordered"
                    value={formData.height}
                    onChange={handleInputChange}
                  />
                  <Input
                    isRequired
                    classNames={{ base: "-mb-[2px]", inputWrapper: "rounded-none" }}
                    label="Weight in kg"
                    name="weight"
                    type="number"
                    variant="bordered"
                    value={formData.weight}
                    onChange={handleInputChange}
                  />
                  <Input
                    isRequired
                    classNames={{ base: "-mb-[2px]", inputWrapper: "rounded-none" }}
                    label="Address"
                    name="address"
                    type="text"
                    variant="bordered"
                    value={formData.address}
                    onChange={handleInputChange}
                  />
                  <Input
                    isRequired
                    classNames={{ base: "-mb-[2px]", inputWrapper: "rounded-none" }}
                    label="City"
                    name="city"
                    type="text"
                    variant="bordered"
                    value={formData.city}
                    onChange={handleInputChange}
                  />
                  <Input
                    isRequired
                    classNames={{ inputWrapper: "rounded-t-none" }}
                    label="State"
                    name="state"
                    type="text"
                    variant="bordered"
                    value={formData.state}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex justify-between gap-2 md:gap-28">
                  <NextButton onClick={prevStep} color="secondary" size="md" className="w-full" > Back</NextButton>
                  <NextButton onClick={nextStep} color="secondary" size="md" className="w-full" >Next</NextButton>
                </div>
              </div>
            )}

            {/* Step 4: Contact Number, Email, Password, Confirm Password */}
            {step === 4 && (
              <div>
                <div className="flex flex-col mb-4">
                  <Input
                    isRequired
                    classNames={{ base: "-mb-[2px]", inputWrapper: "rounded-b-none" }}
                    label="Contact Number"
                    name="contactNumber"
                    type="number"
                    variant="bordered"
                    value={formData.contactNumber}
                    onChange={handleInputChange}
                  />
                  <Input
                    isRequired
                    classNames={{ base: "-mb-[2px]", inputWrapper: "rounded-none" }}
                    label="Email"
                    name="email"
                    type="email"
                    variant="bordered"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  <Input
                    isRequired
                    classNames={{ base: "-mb-[2px]", inputWrapper: "rounded-none" }}
                    label="Password"
                    name="password"
                    type={isVisible ? "text" : "password"}
                    variant="bordered"
                    value={formData.password}
                    onChange={handleInputChange}
                    endContent={
                      <button type="button" onClick={toggleVisibility}>
                        {isVisible ? (
                          <Icon
                            className="pointer-events-none text-2xl text-default-400"
                            icon="solar:eye-closed-linear"
                          />
                        ) : (
                          <Icon
                            className="pointer-events-none text-2xl text-default-400"
                            icon="solar:eye-bold"
                          />
                        )}
                      </button>
                    }
                  />
                  <Input
                    isRequired
                    classNames={{ inputWrapper: "rounded-t-none" }}
                    label="Confirm Password"
                    name="confirmPassword"
                    type={isVisible ? "text" : "password"}
                    variant="bordered"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    endContent={
                      <button type="button" onClick={toggleVisibility}>
                        {isVisible ? (
                          <Icon
                            className="pointer-events-none text-2xl text-default-400"
                            icon="solar:eye-closed-linear"
                          />
                        ) : (
                          <Icon
                            className="pointer-events-none text-2xl text-default-400"
                            icon="solar:eye-bold"
                          />
                        )}
                      </button>
                    }
                  />

                </div>
                <div className="flex justify-between gap-2 md:gap-28">
                  <NextButton onClick={prevStep} color="secondary" size="md" className="w-full" >Back</NextButton>
                  <NextButton onClick={createUserClick} type="primary" size="md" className="w-full">Submit</NextButton>
                </div>
              </div>
            )}
          </form>




          <div className="flex items-center gap-4 py-2">
            <Divider className="flex-1" />
            <p className="shrink-0 text-tiny text-default-500">OR</p>
            <Divider className="flex-1" />
          </div>
          <div className="flex flex-col gap-2">
            <GoogleOAuthProvider clientId={googleClientId}>
              <div className="">
                <GoogleLogin
                  onSuccess={handleGoogleSuccess}
                  onError={handleGoogleFailure}
                />
              </div>
            </GoogleOAuthProvider>
            <Button
              startContent={<Icon className="text-default-500" icon="fe:github" width={24} />}
              variant="bordered"
            >
              Sign Up with Github
            </Button>
          </div>
          <p className="text-center text-small">
            Already have an account?&nbsp;
            <Link onClick={logInClick} size="sm" className="hover:cursor-pointer">
              Log In
            </Link>
          </p>
        </motion.div>
      </div>
      <Toaster className="z-40" richColors position="top-right" />

    </>

  )
}

export default Signup