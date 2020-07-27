const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();
const port = 3000;
let posts;

readJSON();
app.use(cors());
app.use(bodyParser.text());
app.listen(port, () =>
  console.log(`Express server running at http://localhost:${port}/posts`)
);


app.get("/posts", (req, res) => {
  readJSON();
  res.send(posts);
});


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
  readJSON();
  writeJSON(posts);

  console.log(newPostContent);
});

function readJSON() {
  fs.readFile("./posts.json", "utf8", (err, jsonString) => {
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
}

function writeJSON(body) {
  const jsonString = JSON.stringify(body);
  fs.writeFile("./posts.json", jsonString, (err) => {
    err
      ? console.log("Error writing file", err)
      : console.log("Successfully written to posts.json");
  });
}




// [
//   {
//     id: 0,
//     title: "Test Post",
//     description: "A brief post to test with",
//     content:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus bibendum lectus nec massa eleifend, vitae faucibus odio tincidunt. Pellentesque eleifend, augue nec congue molestie.",
//     gif: "",
//     reaction: { thumbUp: 5, clap: 0, love: 0 },
//     comments: ["comment1", "comment2", "comment3"],
//   },
// ];



