import { ReactNode } from "react";
import { Navbar, SideBar } from "../components";
import { Box } from "@mui/material";

interface DrawerNavLayoutProps {
  children: ReactNode;
}
export const DrawerAndNavLayout = ({ children }: DrawerNavLayoutProps) => {
  return (
    <>
      <Navbar />
        <Box sx={{ display: "flex" }}>
          <SideBar />
            <Box sx={{ flexGrow: 1, p: 4, pt: 12}}>
              {children}
            </Box>
      </Box>
      
      
    </>
  );
};
