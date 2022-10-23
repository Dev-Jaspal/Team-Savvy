import './App.css';
import Login from './components/login/Login';
import "./assets/css/bootstrap.min.css";
import ForgotPasswordOtp from './components/forgetPassword/ForgetPasswordOtp';
import ResetPassword from './components/forgetPassword/ResetPassword';
import Sidenav from './components/sidenav/Sidenav';
import Dashboard from './components/dashboard/Dashboard';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Profile from './components/profile/Profile';
import Task from './components/task/Task';
import Payroll from './components/payroll/Payroll';
import Timesheet from './components/timesheet/Timesheet';
import InternalJobs from './components/internaljobs/InternalJobs';
import Header from './components/header/Header';
import Paystub from './components/payroll/PayStub';

import data from './data.json'
import {COLUMNS} from './column'



function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
    {/* <Login/> */}
    {/* <ForgotPasswordOtp/> */}
    {/* <ResetPassword/> */}
    {/* <Profile/> */}
    {/* <Sidebar/> */}
    

    <div className="App">
     <Sidenav/>
      <main className="d-inline-block w-100">
      <header className="sticky-top bg-header">
      <Header/>
      </header>
      <Routes>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/timesheet" element={<Timesheet/>} />
        <Route path="/task" element={<Task/>}/>
        <Route path="/payroll" element={<Payroll data={data} columns={COLUMNS} />} />
        <Route path="/jobs" element={<InternalJobs />} />
        <Route path='/paystub' element={<Paystub/>} />
      </Routes>
      </main> 

     
    </div>
    {/* <ResetPassword/> */}
    
    

    </>
  );
}

export default App;
