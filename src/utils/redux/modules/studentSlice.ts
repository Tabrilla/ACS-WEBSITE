import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface StudentState {
  firstName: string;
  lastName: string;
  studentId: string;
  course: string;
  year: string;
  roomNo: string;
}

const initialState: StudentState = {
  firstName: "",
  lastName: "",
  studentId: "",
  course: "",
  year: "",
  roomNo: "",
};

const studentSlice = createSlice({
  name: "studentSlice",
  initialState,
  reducers: {
    setStudentInfo: (
      state: StudentState,
      action: PayloadAction<Partial<StudentState>>
    ) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    clearStudentInfo() {
      return initialState;
    },
  },
});

export const { setStudentInfo, clearStudentInfo } = studentSlice.actions;

export default studentSlice.reducer;
