/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Input } from "@nextui-org/input";
import { Checkbox } from "@nextui-org/react";
import { eyeIcon, eyeOffIcon } from '../components/icons';
import { toast, Toaster } from "sonner";
import Loader from "../components/Loader";
import { LoginUser, openAuth } from "../services/AuthenticationService";
import { motion } from "framer-motion";
import { fadeIn } from "../assets/utils/motion";
import { jwtDecode } from "jwt-decode";
import { NextButton } from "../components/NextButton";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { Divider, } from "@nextui-org/react";
import FacebookLogin from "./FacebookLogin";
const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

function Login() {
  const navigate = useNavigate();
  const [viewType, setViewType] = useState('password');
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [oAuthProvider, setOAuthProvider] = useState({ provider: '', token: '' })
  const [oAuthFacebook, setOAuthFacebook] = useState({ provider: '', firstName: '', lastName: '', email: '', profilePicture: '', facebookId: '' })

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

  }

  const handleRememberMe = (e) => {
    setRememberMe(e.target.checked)
  }



  const loginClick = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      toast.error('Enter Email and Password');
      return;
    }
    try {
      setLoading(true);
      const result = await LoginUser(formData);
      console.log('Login Result:', result);

      handleAuthSuccess(result);
    } catch (error) {
      console.error('Error in loginClick:', error);
      toast.error(error.message || 'Login failed');
    } finally {
      setLoading(false);
      resetForm();
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
        if (rememberMe) {
          localStorage.setItem('token', result.token);
        } else {
          sessionStorage.setItem('token', result.token);
        }
      } else if (result.statusCode === 211) {
        toast.error(result.message);
      }
    } catch (error) {
      console.error('Error in handleAuthSuccess:', error);
      toast.error(error.message || 'Something went wrong');
    }
  };

  const handleFacebookSuccess = async (accessToken, profile) => {
    try {
      let nameParts = profile.name.split(' ');
      let firstName = nameParts[0];
      let lastName = nameParts[1];
      oAuthFacebook.provider = 'Facebook',
        oAuthFacebook.facebookId = profile.id
      oAuthFacebook.firstName = firstName,
        oAuthFacebook.lastName = lastName;
      oAuthFacebook.email = profile.email;
      oAuthFacebook.profilePicture = profile.picture.data.url;
      const result = await openAuth(oAuthFacebook)
      handleAuthSuccess(result);
    } catch (error) {
      console.error('Error in handle Facebook Success:', error);
      toast.error(error.message || 'facebook authentication failed');
    } finally {
      setLoading(false);
    }
  };




  return (
    <>
      <Toaster className="z-40" richColors position="top-right" />
      <div className={`absolute z-20 rounded-2xl left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-svh w-svw ${loading === true ? "" : "hidden"}`}>
        <Loader />
      </div>

      <div className="flex items-center justify-center min-h-screen  bg-gradient-to-br from-secondary to-background dark:from-secondlight dark:to-light">
        <motion.div
          whileInView="show"
          initial="hidden"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeIn("", "", 0.2, 0.4)}

          className="flex w-full max-w-sm flex-col gap-4 rounded-large  border-[1px] p-2 shadow-2xl opacity-35  shadow-gray-500/20  text-light dark:text-background dark:border-background bg-gradient-to-t from-secondary to-background dark:from-secondlight dark:via-light dark:to-light ">

          <div className="flex flex-col items-center pb-4">
            {/* <AcmeIcon size={60} /> */}
            <p className="text-xl font-medium">Login</p>
            <p className="text-small text-default-500">Fitness360</p>
          </div>


          <form >
            <div className="w-full">
              <Input
                name="email"
                label="Email"
                className="w-full mb-4 text-background  h-12"
                // color="background"
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
                  className="w-full mb-2  text-background h-12"
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
              <div className="flex items-center justify-between mb-4 px-2 text-secondlight dark:text-secondary  cursor-pointer">
                <span >
                  <Checkbox defaultSelected size="sm" onChange={handleRememberMe}>
                  </Checkbox>
                  <label htmlFor="rememberMe" className="cursor-pointer text-sm">Remember Me</label></span>
                {/* <button onClick={forgetPasswordClick} className="underline text-sm text-primary">Forget Password</button> */}
                <button onClick={SignUpClick} className="underline text-sm text-primary">Register Yourself</button>
              </div>
              <NextButton type="primary" onClick={loginClick} size="md" className="w-full" >Login</NextButton>
            </div>
          </form>
          <div className="flex items-center gap-4 py-2">
            <Divider className="flex-1 bg-default-500 " />
            <p className="shrink-0 text-tiny text-default-500">OR</p>
            <Divider className="flex-1 bg-default-500" />
          </div>

          <GoogleOAuthProvider clientId={googleClientId}>
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleFailure}

            />
          </GoogleOAuthProvider>
          <FacebookLogin onSuccess={handleFacebookSuccess} />

        </motion.div>

      </div>
    </>
  );
}

export default Login;
