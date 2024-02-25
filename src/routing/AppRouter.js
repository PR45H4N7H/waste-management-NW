// AppRouter.js
import React from "react";
import { Routes, Route } from 'react-router-dom';
import LoginForm from "../logndsign/LoginForm";
import SignUp from "../logndsign/SignUp";
import Inter from "../userInter/Inter";
import ManagerInter from "../userInter/ManagerInter"
import Home from "../userInter/Home";
import EmployeesForm from "../userInter/Employees"; // Updated import
import ShowEmp from "../userInter/ShowEmp";
import Stats from "../userInter/Stats";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="data" element={<Inter />} />
            <Route path="SignUp" element={<SignUp />} />
            <Route path="manager" element={<ManagerInter />} />
            <Route path="mHome" element={<Home />} />
            <Route path="emp" element={<EmployeesForm />} /> {/* Updated usage */}
            <Route path="showEmp" element={<ShowEmp />} /> 
            <Route path="stats" element={<Stats />} />
        </Routes>
    );
}

export default AppRouter;
