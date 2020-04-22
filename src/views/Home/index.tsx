import React from "react";
import { createUseStyles } from "react-jss";
import Main from "../../layouts/Main";
import Columns from "../../components/Bulma/Columns";
import Column from "../../components/Bulma/Column";
import Box from "../../components/Bulma/Box";
import Post from "../../components/Post";
import styles from "./styles";
import { posts } from "../../data/devData";

const useStyles = createUseStyles(styles);

const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <Main>
      <Columns>
        <Column>
          <Box content>
            {posts.map((post, i) => (
              <Post {...post} key={i} />
            ))}
          </Box>
        </Column>
      </Columns>
    </Main>
  );
};

export default Home;
