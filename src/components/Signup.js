import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Dashboard from './Dashboard';
import { useNavigate } from 'react-router-dom';


const Signup = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const HandleClick = () => {
    navigate('/Dashboard');
  }


  const [formErrors, setFormErrors] = useState({
    email: '',
    password: ''
  });

  const [showLogin, setShowLogin] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Update form data state
    setFormData({
      ...formData,
      [name]: value 
    });

    // Reset corresponding form error
    setFormErrors({
      ...formErrors,
      [name]: ''
    });
  };
  const [error, setError] = useState(null);


  const handleToggleLogin = () => {
    setShowLogin(!showLogin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation
    let isValid = true;

    // Validate username
    if (formData.email.trim() === '') {
      setFormErrors({
        ...formErrors,
        email: 'Email is required'
      });
      isValid = false;
    }

    // Validate password
    if (formData.password.trim() === '') {
      setFormErrors({
        ...formErrors,
        password: 'Password is required'
      });
      isValid = false;
    }
    if (formData.password.length < 6) {
      setFormErrors({
        ...formErrors,
        password: 'Password must be at least 6 characters long'
      });
      isValid = false;
    } else {
      setFormErrors({
        ...formErrors,
        password: ''
      });
    }
    

    // If all validations pass, you can submit the form
    if (isValid) {
      // Perform form submission logic here
      notify(); // Assuming a successful login notification
    }
  };

  const notify = () => {
    toast.success('Sign in success!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark'
    });
  };

  const loginUser = async(e) => {
    e.preventDefault()
    try{
      const response = await axios.post('http://localhost:4000/register',
       {email:formData.email,
        password: formData.password
      });

      if (response.status === 200) {
        const {accessToken, refreshToken} = response.data;

        //save access_token in session storage
        sessionStorage.setItem('access_token', accessToken);
        sessionStorage.setItem('refresh_token', refreshToken);

        //redirect or perform any other action upon successful login
        // window.location.href = '/Dashboard'; //change the URL to your desired route
        navigate('/Dashboard')
      }else {
        //const message-response.data.error.message
        const errorResponse = response.data ? response.data : 'An unknown error occurred';

        setError(errorResponse);
      }
    }catch (error){
      console.error('An error occurred during login:', error);
      setError('An error occurred. Login the user Please try again');
    }
  }

  return (
    <div className="App login-page">
      {/* <button className="login-toggle-btn" onClick={handleToggleLogin}>
        Open Login
      </button> */}
      {showLogin && (
        <div className="login-popup">
          <div className="login-content">
            <span className="close" onClick={handleToggleLogin}>
              <AiOutlineClose />
            </span>
            <label>
              Email: <br />
              <input
                type="text"
                value={formData.email}
                onChange={handleInputChange}
                name="email"
              />
              <span className="error">{formErrors.email}</span>
            </label>
            <br />
            <label>
              Password: <br />
              <input
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                name="password"
              />
              <span className="error">{formErrors.password}</span>
            </label>
            <br />
            <button type="button" className="btn" onClick={loginUser} onSubmit={notify}>
              Sign in
            </button>
            <ToastContainer />
          </div>
        </div>
      )}
    </div>
  );
};
export default Signup;

