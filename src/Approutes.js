import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Adduser from "./components/Adduser";
import Studentlist from "./components/StudentList";
import Delete from "./components/Delete";
import Update from "./components/Update";
import Notfound from "./components/Notfound";


const Approutes = () =>{
    return(
            <Routes>
                <Route path="/home" Component={Navbar} />
                <Route path="/Login" Component={Login} />
                <Route path="/Signup" Component={Signup}/>
                <Route path="/Dashboard" Component={Dashboard}/>
                <Route path="/Adduser" Component={Adduser} />
                <Route path="/StudentList" Component={Studentlist}/>
                <Route path="/Delete" Component={Delete}/>
                <Route path="/Update" Component={Update}/>
                <Route path="*" Component={Notfound}/>
            </Routes>
    );
}

export default Approutes;