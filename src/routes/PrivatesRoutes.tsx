import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  const studentDataJason = localStorage.getItem("studentData");
  const voterData = studentDataJason ? JSON.parse(studentDataJason) : null;

  return voterData ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
