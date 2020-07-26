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
    posts = JSON.parse(jsonString);
  } catch (err) {
    posts = { error: `Error parsing JSON string:${err}` };
  }
});

app.get("/posts", (req, res) => res.send(posts));

app.post("/posts/newpost", (req, res) => {
  const newPostContent = JSON.parse(req.body);
  const newPost = {
    id: posts.length,
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
  const jsonString = JSON.stringify(posts);
  fs.writeFile("./database.json", jsonString, (err) => {
    if (err) {
      console.log("Error writing file", err);
    } else {
      console.log(`Successfully saved "${newPost.title}" to file`);
    }
  });

  res.send(console.log(newPostContent));
});

// {{"id": 0,
// "title": "Test Post",
// "description": "A brief post to test with",
// "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus bibendum lectus nec massa eleifend, vitae faucibus odio tincidunt. Pellentesque eleifend, augue nec congue molestie.",
// "gif": "",
// "reaction": { "thumbUp": 5, "clap": 0, "love": 0 },
// "comments": ["comment1", "comment2", "comment3"]}}
