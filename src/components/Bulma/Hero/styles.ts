import { Styles } from "react-jss";

export default (): Styles => ({
  "@global": {
    "#tsparticles": {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
  },
  hero: {
    position: "relative",
    overflow: "hidden",
  },
});
