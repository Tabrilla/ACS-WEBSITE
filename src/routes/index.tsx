import { Route, Routes } from "react-router-dom";
import { Login } from "../pages";
import PrivateRoutes from "./PrivatesRoutes";
const index = () => {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>{/* Routes */}</Route>
      <Route element={<Login />} path="/" />
    </Routes>
  );
};

export default index;
