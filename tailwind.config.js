import withMT from "@material-tailwind/react/utils/withMT";
import { COLORS } from "./src/constants/COLORS";
export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        PrimaryBg: COLORS.PrimaryBg,
        // SecondaryBg: COLORS.SecondaryBg,
        // yellowText: COLORS.Yellow,
        // FontMainColor: COLORS.FontMainColor,
      },
    },
  },
  plugins: [],
});
