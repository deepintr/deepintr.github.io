import { Styles } from "react-jss";

export default (): Styles => ({
  post: {
    margin: "1rem",
    paddingBottom: "1rem",
    borderBottom: "1px solid #E6EAEE",
    "&:last-child": {
      paddingBottom: 0,
      borderBottom: "none",
    },
  },
  paragraph: {
    fontSize: "14px",
    lineHeight: "2.3",
    fontWeight: 700,
    color: "#8F99A3",
  },
});
