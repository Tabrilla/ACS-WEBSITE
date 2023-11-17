import { Route, Routes } from "react-router-dom";
import { Login, StudentMain } from "../pages";
import PrivateRoutes from "./PrivatesRoutes";
const index = () => {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route element={<StudentMain />} path="/main" />
      </Route>
      <Route element={<Login />} path="/" />
    </Routes>
  );
};

export default index;
