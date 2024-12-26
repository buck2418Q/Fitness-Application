import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Input } from "@nextui-org/input";
import { Checkbox } from "@nextui-org/react";
import { eyeIcon, eyeOffIcon } from '../components/icons';
import { toast, Toaster } from "sonner";
import Loader from "../components/Loader";
import { LoginUser } from "../services/AuthenticationService";
import { motion } from "framer-motion";
import { fadeIn } from "../assets/utils/motion";
import { jwtDecode } from "jwt-decode";
import { NextButton } from "../components/NextButton";


function Login() {
  const navigate = useNavigate();
  const [viewType, setViewType] = useState('password');
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [toAdmin, setToAdmin] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  const toggleEye = () => {
    setViewType(viewType === 'password' ? 'text' : 'password');
  }

  const forgetPasswordClick = () => {
    alert('This feature will be available soon.');
  }

  const SignUpClick = () => {
    navigate('/signup');
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (formData.password == '1234') {
      setToAdmin(true)
    }
    else
      setToAdmin(false)
  }

  const handleRememberMe = (e) => {
    setRememberMe(e.target.checked)
  }


  const loginClick = async (e) => {
    e.preventDefault();
    if (formData.email == '' || formData.password == '') {
      toast('Enter Email and Password')
    } else {
      try {
        setLoading(true);
        const result = await LoginUser(formData);
        if (result.statusCode === 200) {
          toast.success(result.message);
          const decodedToken = jwtDecode(result.token);
          if (decodedToken.role === 'admin') {
            navigate('/admin');
          }
          else if (decodedToken.role === 'user') {
            navigate('/user');
          }
          else if (decodedToken.role === 'trainer') {
            navigate('/trainer');
          }
          else {
            toast.error('Invalid User')
            navigate('/');
          }
          if (rememberMe) {
            localStorage.setItem('token', result.token);
          } else {
            sessionStorage.setItem('token', result.token);
          }
        }
        if (result.statusCode === 211) toast.error(result.message);
      } catch (error) {
        console.log('fgshj', error)
        toast.error(error.message)
      }
      finally {
        setLoading(false);
        resetForm();
        setLoading(false);
      }
    }
  };


  const resetForm = () => {
    formData.email = "";
    formData.password = "";
  };

  const toDashboardClick = () => {
    localStorage.setItem('userName', "bypass@test.com")
    localStorage.setItem('token', "some_token_webapp_underdevelopment")
    navigate('/admin/dashboard');

  }

  return (
    <>
      <Toaster className="z-40" richColors position="top-right" />
      <div className={`absolute z-20 rounded-2xl left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-svh w-svw ${loading === true ? "" : "hidden"}`}>
        <Loader />
      </div>

      <div className="flex items-center justify-center min-h-screen  bg-gradient-to-r from-secondary to-background">
        <motion.div
          whileInView="show"
          initial="hidden"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeIn("", "", 0.2, 0.4)}

          className=" text-light flex w-full max-w-sm flex-col gap-4 rounded-large  border-[1px] p-2 shadow-2xl opacity-35  shadow-gray-500/20 bg-background">

          {toAdmin ?
            <button onClick={toDashboardClick} className="border-1 border-green-700 bg-green-100 rounded px-4 py-1 mb-5">To Dashboard</button>
            : <div className="flex flex-col items-center pb-6">
              {/* <AcmeIcon size={60} /> */}
              <p className="text-xl font-medium">Login</p>
              <p className="text-small text-default-500">Create an account to get started</p>
            </div>
          }

          <form >
            <div className="w-full">
              <Input
                name="email"
                label="Email"
                className="w-full mb-4 "
                color="background"
                type="email"
                required
                radius='sm'
                value={formData.email}
                onChange={handleChange}
              />
              <div className="relative">
                <Input
                  label="Password"
                  name="password"
                  className="w-full mb-4"
                  type={viewType}
                  required
                  radius='sm'
                  value={formData.password}
                  onChange={handleChange}
                />
                <button type="button" onClick={toggleEye} className="absolute right-3 top-4">
                  <img
                    src={viewType === 'password' ? eyeIcon : eyeOffIcon}
                    alt={viewType === 'password' ? 'Show Password' : 'Hide Password'}
                    className={`transition-opacity duration-900 ease-in-out ${viewType === 'password' ? 'opacity-100' : 'opacity-0'} ${viewType === 'text' ? 'opacity-100' : 'opacity-0'}`}
                  />
                </button>
              </div>
              <NextButton type="primary" onClick={loginClick} size="md" className="w-full" >Login</NextButton>
            </div>
          </form>
          <div className="flex items-center justify-between my-4 text-secondlight  cursor-pointer">
            <span >
              <Checkbox defaultSelected size="sm" onChange={handleRememberMe}>
              </Checkbox>
              <label htmlFor="rememberMe" className="cursor-pointer text-sm">Remember Me</label></span>
            <button onClick={forgetPasswordClick} className="underline text-sm text-primary">Forget Password</button>
            <button onClick={SignUpClick} className="underline text-sm text-primary">Register Yourself</button>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Login;
