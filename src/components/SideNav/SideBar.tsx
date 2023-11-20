import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
// import { Tooltip } from "@mui/material";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useAppSelector } from "../../utils/redux/hooks";

import { useNavigate } from "react-router-dom";

import HomeIcon from '@mui/icons-material/Home';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import GradeIcon from '@mui/icons-material/Grade';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HandshakeIcon from '@mui/icons-material/Handshake';
// import { Tooltip } from "@material-tailwind/react";
import Tooltip from "@mui/material/Tooltip";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": {
      ...openedMixin(theme),
      
    },
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": {
      ...closedMixin(theme),
      
    },
  }),
}));

//

export default function MiniDrawer() {
  const theme = useTheme();
  const { isOpenRedux } = useAppSelector((state) => state.navbar);
  const RollNavigate = useNavigate ();

  return (
    <Box sx={{ display: "flex"}} >
      <CssBaseline />

      <Drawer variant="permanent" open={isOpenRedux}>
        <Divider />
        <DrawerHeader>
          <IconButton>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>

        <List className="text-black">
            <ListItem className="mb-2" disablePadding sx={{ display: "block" }} onClick={() => {RollNavigate("/home")}}>
              <Tooltip title="Home" placement="left">
                  <ListItemButton
                    sx={{ 
                      minHeight: 48,
                      justifyContent: isOpenRedux ? "initial" : "center",
                      px: 2.5,
                    }} 
                  >
                    
                    <ListItemIcon 
                      sx={{
                        minWidth: 0,
                        mr: isOpenRedux ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <HomeIcon/> 
                    </ListItemIcon>

                    <ListItemText
                      primary="Home"
                      sx={{ opacity: isOpenRedux ? 1 : 0 }}
                    />
                  </ListItemButton>
                </Tooltip> 
            </ListItem>
            
            {isOpenRedux && (
              <ListItem sx={{ display: "block" }}>
                <h1 className="font-bold text-xs px-5"> INFORMATION </h1>
              </ListItem>
            )}
            
            <ListItem  disablePadding sx={{ display: "block" }} onClick={() => {RollNavigate("/enrollment")}}>
              <Tooltip title="Enrollment" placement="left">
                  <ListItemButton
                    sx={{ 
                      minHeight: 48,
                      justifyContent: isOpenRedux ? "initial" : "center",
                      px: 2.5,
                    }} 
                  >
                    
                    <ListItemIcon 
                      sx={{
                        minWidth: 0,
                        mr: isOpenRedux ? 3 : "auto",
                        justifyContent: "center", 
                      }}
                    >
                      <AssignmentIndIcon/>
                    </ListItemIcon>

                    <ListItemText
                      primary="Enrollment"
                      sx={{ opacity: isOpenRedux ? 1 : 0 }}
                    />
                  </ListItemButton>
                </Tooltip>  
            </ListItem>

            <ListItem  disablePadding sx={{ display: "block" }} onClick={() => {RollNavigate("/grades")}}>
              <Tooltip title="Student Checklist" placement="left">
                  <ListItemButton
                    sx={{ 
                      minHeight: 48,
                      justifyContent: isOpenRedux ? "initial" : "center",
                      px: 2.5,
                    }} 
                  >
                    
                    <ListItemIcon 
                      sx={{
                        minWidth: 0,
                        mr: isOpenRedux ? 3 : "auto",
                        justifyContent: "center",
                        
                      }}
                    >
                      <GradeIcon/>
                    </ListItemIcon>

                    <ListItemText
                      primary="Student Checklist"
                      sx={{ opacity: isOpenRedux ? 1 : 0 }}
                    />
                  </ListItemButton>
                </Tooltip>  
            </ListItem>
            
            <ListItem  disablePadding sx={{ display: "block" }} onClick={() => {RollNavigate("/sched")}}>
              <Tooltip title="Schedule" placement="left">
                  <ListItemButton
                    sx={{ 
                      minHeight: 48,
                      justifyContent: isOpenRedux ? "initial" : "center",
                      px: 2.5,
                    }} 
                  >
                    
                    <ListItemIcon 
                      sx={{
                        minWidth: 0,
                        mr: isOpenRedux ? 3 : "auto",
                        justifyContent: "center",
                        
                      }}
                    >
                      <CalendarMonthIcon/>
                    </ListItemIcon>

                    <ListItemText
                      primary="Schedule"
                      sx={{ opacity: isOpenRedux ? 1 : 0 }}
                    />
                  </ListItemButton>
                </Tooltip>  
            </ListItem>
        </List>
        
        <Divider/>

        <List className="text-black">
          
          {isOpenRedux && (
            <ListItem sx={{ display: "block" }}>
              <h1 className="font-bold text-xs px-5"> OTHERS </h1>
            </ListItem>
          )}

          {/* HISTORY & VISION & MISSION */}
          <ListItem className="mb-2" disablePadding sx={{ display: "block" }}>
            <Tooltip title="History, Mission & Vision" placement="left">
              <ListItemButton
                component="a" // Use an anchor tag
                href="https://www.sti.edu/about.asp" // Specify the link
                target="_blank" // Optional: open in a new tab
                rel="noopener noreferrer" // Recommended for security when using target="_blank"
                sx={{
                  minHeight: 48,
                  justifyContent: isOpenRedux ? "initial" : "center",
                  px: 2.5,
                  textDecoration: 'none', // Remove underline for anchor tag
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: isOpenRedux ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <HandshakeIcon />
                </ListItemIcon>

                <ListItemText
                  primaryTypographyProps={{ variant: "body1", fontSize: 13.5 }} // Adjust font size
                  primary="History, Mission & Vision"
                  sx={{ opacity: isOpenRedux ? 1 : 0 }}
                />
              </ListItemButton>
            </Tooltip>
          </ListItem>

          {/* ABOUT  */}
           
       




        </List>

        
      </Drawer>
    </Box>
  );
}
