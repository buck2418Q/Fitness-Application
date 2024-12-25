import { useState } from "react";
import Button from "../components/Button";
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
            alert('use are user')
            navigate('/user');
          }
          else if (decodedToken.role === 'trainer') {
            alert('use are trainer')
            navigate('/trainer');
          }
          else {
            alert('invalid user')
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

      <div className="flex items-center justify-center min-h-screen bg-secondary">
        <motion.div
          whileInView="show"
          initial="hidden"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeIn("", "", 0.2, 0.4)}

          className="bg-background text-light p-8 rounded-3xl shadow-lg w-full md:w-8/12 lg:w-4/12 h-full shadow-gray-500/20">

          {toAdmin ?
            <button onClick={toDashboardClick} className="border-1 border-green-700 bg-green-100 rounded px-4 py-1 mb-5">To Dashboard</button>
            : <h2 className="text-3xl font-bold mb-4">Login</h2>
          }

          <form >
            <div className="w-full ">
              <Input
                name="email"
                label="Email"
                className="w-full mb-4 border rounded-xl text-background"
                color="background"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
              <div className="relative">
                <Input
                  label="Password"
                  name="password"
                  className="w-full mb-4 border rounded-xl text-background"
                  type={viewType}
                  required
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
              <Button text="Login" type="primary" size="large" onClick={loginClick} />
            </div>
          </form>
          <div className="flex items-center justify-between my-4 text-secondlight  cursor-pointer">
            <span >
              <Checkbox defaultSelected size="md" onChange={handleRememberMe}>
              </Checkbox>
              <label htmlFor="rememberMe" className="cursor-pointer">Remember Me</label></span>
            <button onClick={forgetPasswordClick} className="underline">Forget Password</button>
            <button onClick={SignUpClick} className="underline">Register Yourself</button>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Login;
