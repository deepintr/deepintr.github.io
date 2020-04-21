import { Styles } from "react-jss";

export default (): Styles => ({
  root: {
    width: "100%",
    height: "100%",
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
