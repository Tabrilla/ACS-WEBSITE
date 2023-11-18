import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NavbarState {
  isOpenRedux: boolean;
}

// Define the initial state of Admin
const initialState: NavbarState = {
  isOpenRedux: false,
};

export const NavBarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setIsOpenRedux: (state, action: PayloadAction<boolean>) => {
      state.isOpenRedux = action.payload;
    },
  },
});

export const { setIsOpenRedux } = NavBarSlice.actions;

export default NavBarSlice.reducer;
