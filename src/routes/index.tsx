import { Route, Routes } from "react-router-dom";
import { Login, Home, Enrollment, Grades, Schedule } from "../pages";
import PrivateRoutes from "./PrivatesRoutes";
const index = () => {
  return (
    <Routes>

      <Route element={<PrivateRoutes />}>
        <Route element={<Home />} path="/home" />
        <Route element={<Enrollment />} path="/enrollment" />
        <Route element={<Grades/>} path="/grades"/>
        <Route element={<Schedule/>} path="/sched"/>
      </Route>

      <Route element={<Login />} path="/" />

    </Routes>
  );
};

export default index;
