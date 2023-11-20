import React, { useState } from "react";
import axios from "axios";

const Update = () => {
  const [updateUser, setUpdateUser] = useState({
    id: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Update form data state
    setUpdateUser({
      ...updateUser,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(`http://localhost:4000/register/${updateUser.id}`);

      if (response.status === 200) {
        const { accessToken, refreshToken } = response.data;

        // save access_token in session storage
        sessionStorage.setItem('access_token', accessToken);
        sessionStorage.setItem('refresh_token', refreshToken);

        // redirect or perform any other action upon successful login
        window.location.href = '/Dashboard'; // change the URL to your desired route
      } else {
        // const message-response.data.error.message
        const errorResponse = response.data ? response.data : 'An unknown error occurred';

        setError(errorResponse);
      }
    } catch (error) {
      console.error('An error occurred during login:', error);
      setError('An error occurred. Delete the user. Please try again');
    }
  };

  return (
    <div>
      <h1>Update User</h1>
      {error && <p>Error: {error}</p>}
      <form onSubmit={handleSubmit}>
        <label>ID:</label>
        <input type="number" value={updateUser.id} onChange={handleInputChange} name="id" />
        <br /><br />
        <label>Email:</label>
        <input type="text" value={updateUser.email} onChange={handleInputChange} name="email" />
        <br /><br />
        <label>Password:</label>
        <input type="password" value={updateUser.password} onChange={handleInputChange} name="password" />
        <br /><br />
        <button type="submit" className="btn bg-dark">Update</button>
      </form>
    </div>
  );
};

export default Update;
