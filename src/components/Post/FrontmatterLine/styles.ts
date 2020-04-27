import { Styles } from "react-jss";

const styles: Styles = {
  title: {
    marginBottom: "0 !important",
  },
  paragraph: {
    fontSize: "14px",
    lineHeight: "2.3",
    fontWeight: 700,
    color: "#8F99A3",
    "&>*": {
      marginInlineEnd: `0.5rem`,
    },
  },
  divider: {
    paddingBottom: "0.3rem",
    borderBottom: "1px solid #E6EAEE",
  },
};

export default styles;
