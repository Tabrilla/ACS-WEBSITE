import { useAppDispatch, useAppSelector } from "../../utils/redux/hooks";
import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { setIsOpenRedux } from "../../utils/redux/modules/NavbarSlice";
import { COLORS } from "../../constants/COLORS";

const AppBar = styled(
  MuiAppBar,
  {}
)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
}));
const Navbar = () => {
  const dispatch = useAppDispatch();
  const { isOpenRedux } = useAppSelector((state) => state.navbar);

  const handleDrawerOpen = () => {
    dispatch(setIsOpenRedux(!isOpenRedux));
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ bgcolor: COLORS.PrimaryBg }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            ACS Enrollment System
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
