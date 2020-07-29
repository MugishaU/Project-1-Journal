const title = document.getElementById("title");
const main = document.getElementById("main");
const gif = document.getElementById("gif");

fetch("http://localhost:3000/posts/singlepost")
  .then((r) => r.json())
  .then((data) => displayPost(data));

function displayPost(post) {
  title.textContent = post.title;
}
