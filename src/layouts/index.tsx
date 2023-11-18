import { ReactNode } from "react";
import { Navbar, SideBar } from "../components";

interface DrawerNavLayoutProps {
  children: ReactNode;
}
export const DrawerAndNavLayout = ({ children }: DrawerNavLayoutProps) => {
  return (
    <>
      <Navbar />
      {children}
      <SideBar />
    </>
  );
};
