import React, { useState } from "react";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const Adduser = () => {
    const [newUser, setNewUser] = useState({
        email: '',
        password: ''
    })

    const [error, setError] = useState(null); // Define the error state
    // handle input change
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setNewUser({
            ...newUser,
            [name]: value
        });
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:4000/register',
             {email:newUser.email,
              password: newUser.password
            });
      
            if (response.status === 200) {
              const {accesstoken, refreshtoken} = response.data;
      
              //save access_token in session storage
              sessionStorage.setItem('access_token', accesstoken);
              sessionStorage.setItem('refresh_token', refreshtoken);
      
              //redirect or perform any other action upon successful login
              window.location.href = '/Dashboard'; //change the URL to your desired route
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
        <div>
            <h1>Add User</h1>
            {error && <p>Error: {error}</p>}
            <form onSubmit={handleSubmit}>
                <label>Email: </label>
                <input type="text" value={newUser.email} onChange={handleInputChange} name="email" />
                <br/><br/>
                <label>Password:</label>
                <input type="password" value={newUser.password} onChange={handleInputChange} name="password" />
                <br/><br/>
                <button className="btn bg-dark" onSubmit={{notify}}>ADD</button>
                <ToastContainer />
            </form>
        </div>
    )
}
export default Adduser;