import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListGroup from "./components/ListGroup";
import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import {useState} from "react";
import Layout from "./components/Layout/Layout";
import Unauthorized from "./components/Unauthorized/Unauthorized";
import Home from "./components/Home/Home";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import PersistLogin from "./components/PersistLogin/PersistLogin";
import Admin from "./components/Admin/admin";




function App() {
    const [token, setToken] = useState();


   return (
       <Routes>
           <Route path="/" element={<Layout />}>

               {/* default */}
               <Route index element={<Home />} />
               <Route path="Home" element={<Home />} />

               {/* public */}
               <Route path="login" element={<Login />} />
               <Route path="unauthorized" element={<Unauthorized />} />

               {/* private */}
               <Route element={<PersistLogin />}>
                   <Route element={<RequireAuth allowedRoles={["admin"]}/>}>
                       <Route path="register" element={<Register />} />
                   </Route>

                   <Route element={<RequireAuth allowedRoles={["user", "admin"]}/>}>
                       <Route path="dashboard" element={<Dashboard />} />
                   </Route>

                   <Route element={<RequireAuth allowedRoles={["admin"]}/>}>
                       <Route path="Admin" element={<Admin />} />
                   </Route>

               </Route>


           </Route>
       </Routes>
  );
}


export default App;