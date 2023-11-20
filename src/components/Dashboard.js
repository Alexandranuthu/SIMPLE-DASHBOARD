import React from "react";
import { Link } from "react-router-dom";
import './Dashboard.css';
import { MdAddToPhotos } from "react-icons/md";
import { FaList } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
import Sidebar from "./Sidebar";

const Dashboard = () => {
    return (
        <div>
            <h2>Welcome to the Dashboard</h2>
            <Sidebar />
            <nav className="Dashboard-list">
                <ul>
                    <li className="add-user card" styles={"width: 18rem;"}>
                        <img src="./Images/adduser.png" className="card-img-top add"/>
                    <MdAddToPhotos />
                        <Link to="/Adduser">Add User</Link>
                    </li>
                    <li className="student-list card">
                        <img src="./Images/getlist.png" className="card-img-top get"/>
                        <FaList />
                        <Link to="/StudentList">Students List</Link>
                    </li>
                    <li className="delete-user card">
                        <img src="./Images/delete.png" className="card-img-top delete"/>
                        <MdDelete />
                        <Link to="/Delete">Delete User</Link>
                    </li>
                    <li className="update-user card">
                        <img src="./Images/update.png" className="card-img-top update"/>
                        <GrUpdate />
                        <Link to="/Update">Update User</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Dashboard;