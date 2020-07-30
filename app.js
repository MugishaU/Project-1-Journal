const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();
const port = 3000;
let posts;
let singlePostId;

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
        like: 0,
        clap: 0,
        love: 0,
    },
    comments: [],
    };

    newPost.title += newPostContent.title;
    newPost.description += newPostContent.description;
    newPost.content += newPostContent.content;
    newPost.gif += newPostContent.gif;
    posts.push(newPost);
    writeJSON(posts);
    readJSON();
});

app.get("/posts/findpost", (req, res) => {
  let id = req.query.id;
  let type = req.query.type;
  posts[id].reaction[type] += 1;
  writeJSON(posts);
});

app.post("/posts/newcomment", (req, res) => {
  const newCommentContent = JSON.parse(req.body);
  const id = newCommentContent.id;
  const comment = newCommentContent.comment;
  posts[id].comments.push(comment);
  writeJSON(posts);
});

app.get("/posts/postid", (req, res) => {
  singlePostId = req.query.id;
});

app.get("/posts/singlepost", (req, res) => {
  res.send(JSON.stringify(posts[singlePostId]));
});

app.get("/posts/search/allPosts", (req, res) => {
    readJSON();
    let searchTerm = req.query.q;
    searchTerm = searchTerm.toLowerCase();
    let returnPosts = postFilter(searchTerm, 'allPost');
    res.send(JSON.stringify(returnPosts));
});

app.get("/posts/search/home", (req, res) => {
    readJSON();
    let searchTerm = req.query.q;
    searchTerm = searchTerm.toLowerCase();
    let returnPosts = postFilter(searchTerm, 'home');
    res.send(JSON.stringify(returnPosts));
});

function postFilter(searchTerm, origin){
    if(origin === 'home'){
        return posts.filter((post) =>
            post.title.toLowerCase().includes(searchTerm) ||
            post.description.toLowerCase().includes(searchTerm)
        );
    } else {
        return posts.filter((post) =>
            post.title.toLowerCase().includes(searchTerm) ||
            post.content.toLowerCase().includes(searchTerm)
        );
    }
};

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
