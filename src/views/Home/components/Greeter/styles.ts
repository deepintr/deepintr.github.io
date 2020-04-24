import { Styles } from "react-jss";

const styles: Styles = {
  root: {
    display: "relative",
  },
  logo: {
    width: "6rem",
    height: "6rem",
    boxShadow: "0 0 6px grey",
    borderRadius: "50%",
    marginBottom: "1rem",
    padding: "4px",
  },
  title: {
    fontWeight: 400,
    fontSize: "1.6rem",
  },
  seperator: {
    position: "absolute",
    zIndex: -5,
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  content: {
    paddingTop: "1rem",
  },
};

export default styles;
