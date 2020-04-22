import { PostProps } from "../components/Post";
import { PostTag } from "../models/PostTag";

export const posts: PostProps[] = [
  {
    title: "Bulma: How do you center a button in a box?",
    author: "@jsmith",
    date: "",
    tag: PostTag.Question,
    content: "",
    commentCount: 5,
  },
  {
    title: "How can I make a bulma button go full width?",
    author: "@red",
    date: "",
    tag: PostTag.Question,
    content: "",
    commentCount: 2,
  },
  {
    title:
      "TypeError: Data must be a string or a buffer when trying to use vue-bulma-tabs",
    author: "@jsmith",
    date: "",
    tag: PostTag.Question,
    content: "",
    commentCount: 7,
  },
  {
    title: "How to vertically center elements in Bulma?",
    author: "@brown",
    date: "",
    tag: PostTag.HowTo,
    content: "",
    commentCount: 13,
  },
  {
    title:
      "I'm trying to use hamburger menu on bulma css, but it doesn't work. What is wrong?",
    author: "@hamburgler",
    date: "",
    tag: PostTag.Question,
    content: "",
    commentCount: 4,
  },
];
