import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  const voterDataJson = localStorage.getItem("voterData");
  const voterData = voterDataJson ? JSON.parse(voterDataJson) : null;

  return voterData ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
