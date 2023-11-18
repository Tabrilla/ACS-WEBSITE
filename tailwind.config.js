import withMT from "@material-tailwind/react/utils/withMT";
import { COLORS } from "./src/constants/COLORS";
export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        PrimaryBg: COLORS.PrimaryBg,
        StudentBg: COLORS.StudentBg,
        InsideStudentBg: COLORS.InsideStudentBg,
        IconColor: COLORS.IconColor,
      },
    },
  },
  plugins: [],
});
