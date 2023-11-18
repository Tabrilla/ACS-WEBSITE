import { Route, Routes } from "react-router-dom";
import { Login, Home, Enrollment } from "../pages";
import PrivateRoutes from "./PrivatesRoutes";
const index = () => {
  return (
    <Routes>

      <Route element={<PrivateRoutes />}>
        <Route element={<Home />} path="/home" />
        <Route element={<Enrollment />} path="/enrollment" />
      </Route>

      <Route element={<Login />} path="/" />

    </Routes>
  );
};

export default index;
