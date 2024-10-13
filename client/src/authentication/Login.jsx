import { useState } from "react";
import Button from "../components/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { Input } from "@nextui-org/input";

function Login() {
  const navigate = useNavigate();

  const [viewType, setViewType] = useState('')
  const [formData, setFormData] = useState({ email: '', password: '' });


  const toggleEye = () => {
    setViewType(viewType === 'password' ? 'text' : 'password');
  }

  const loginClick = (e) => {
    e.preventDefault();
    console.log(formData);
    // navigate('/home')
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-[#00000033]">

        <div className="bg-white p-8 rounded-3xl shadow-lg w-full md:w-8/12 lg:w-4/12 h-full">
          <h2 className="text-3xl font-bold mb-4">Login </h2>
          <form action="" >
            <div className="w-full">

              <Input name="email"
                label="Email"
                className="w-full  mb-4 border rounded-xl"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required />

              <div className=" relative">
                <Input
                  label="Password"
                  name="password"
                  className="w-full mb-4 border rounded-xl"
                  type={viewType}
                  value={formData.password}
                  onChange={handleChange}
                />

                <button type="button" onClick={toggleEye} className="absolute right-3 top-4">
                  <FontAwesomeIcon icon={viewType === 'password' ? faEye : faEyeSlash} />
                </button>
              </div>


              <Button text="Login"
                onClick={loginClick}
                type="primary"
                size="large"
              />
            </div>
          </form>
        </div>

      </div>
    </>
  );
}

export default Login;