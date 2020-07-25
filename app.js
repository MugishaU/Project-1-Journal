const express = require("express");
const cors = require("cors");
const port = 3000;
const bodyParser = require("body-parser");
const app = express();

let idCount = 1;
let posts = [
  {
    id: 0,
    title: "Test Post",
    description: "A brief post to test with",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus bibendum lectus nec massa eleifend, vitae faucibus odio tincidunt. Pellentesque eleifend, augue nec congue molestie.",
    gif: "",
    reaction: {
      thumbUp: 5,
      clap: 0,
      love: 0,
    },
    comments: ["comment1", "comment2", "comment3"],
  },
];

app.use(cors());
app.use(bodyParser.text());
app.listen(port, () =>
  console.log(`Express server running at http://localhost:${port}/posts`)
);

app.get("/posts", (req, res) => res.send(posts));

app.post("/posts/newpost", (req, res) => {
  const newPostContent = JSON.parse(req.body);
  let newPost = {
    id: idCount,
    title: "",
    description: "",
    content: "",
    gif: "",
    reaction: {
      thumbUp: 0,
      clap: 0,
      love: 0,
    },
    comments: [],
  };

  newPost.title += newPostContent.title;
  newPost.description += newPostContent.description;
  newPost.content += newPostContent.content;
  posts.push(newPost);
  idCount++;
  res.send(console.log(newPostContent));
});
