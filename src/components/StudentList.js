import React, { useState, useEffect } from "react";
import axios from "axios";

const Studentlist = () => {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const accessToken = sessionStorage.getItem('access_token');
        const response = await axios.get('http://localhost:4000/students', {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });

        if (response.status === 200) {
          setStudents(response.data); // assuming the response is an array of students
        } else {
          const errorResponse = response.data ? response.data : 'An unknown error occurred';
          setError(errorResponse);
        }
      } catch (error) {
        console.error('An error occurred while fetching students:', error);
        setError('An error occurred. Please try again.');
      }
    };

    fetchStudents();
  }, []); // empty dependency array to ensure the effect runs once on mount

  return (
    <div>
      <h1 className="text-center">Student List</h1>
      {error && <p>Error: {error}</p>}
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.firstname}</td>
              <td>{student.lastname}</td>
              <td>{student.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Studentlist;
