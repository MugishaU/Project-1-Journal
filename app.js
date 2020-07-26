const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();
const port = 3000;
let posts;

app.use(cors());
app.use(bodyParser.text());
app.listen(port, () =>
  console.log(`Express server running at http://localhost:${port}/posts`)
);

fs.readFile("./database.json", "utf8", (err, jsonString) => {
  if (err) {
    console.log("Error reading file from disk:", err);
    return;
  }
  try {
    database = JSON.parse(jsonString);
  } catch (err) {
    database = { error: `Error parsing JSON string:${err}` };
  }
});

app.get("/posts", (req, res) => res.send(database));

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
