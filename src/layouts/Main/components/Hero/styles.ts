import { Styles } from "react-jss";

export default (): Styles => ({
  hero: {
    position: "relative",
    overflow: "hidden",
  },
  particles: {
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
});
