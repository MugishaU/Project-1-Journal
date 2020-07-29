const headTitle = document.getElementById("headTitle");
const title = document.getElementById("title");
const main = document.getElementById("main");
const giphy = document.getElementById("giphy");
const like = document.getElementById("like");
const clap = document.getElementById("clap");
const love = document.getElementById("love");
const likeCount = document.getElementById("likeCount");
const clapCount = document.getElementById("clapCount");
const loveCount = document.getElementById("loveCount");
const publishedComments = document.getElementById("publishedComments");
const commentForm = document.getElementById("commentForm");
const commentInput = document.getElementById("commentInput");
const submitComment = document.getElementById("submitComment");

fetch("http://localhost:3000/posts/singlepost")
  .then((r) => r.json())
  .then((data) => displayPost(data));

function displayPost(post) {
  headTitle.textContent = `#${post.id} ${post.title}`;
  title.textContent = post.title;
  main.textContent = post.content;
  const url = `http://api.giphy.com/v1/gifs/search?q=${post.gif}&api_key=JRAJgNDb1SCjVI5M9EcLC24CFEBZt6ys&limit=1`;
  fetch(url)
    .then((r) => r.json())
    .then((data) => {
      //grabbing gif image
      giphy.src = data.data[0].images.original.url;
      //making gif image append to div
    })
    .catch(function () {
      console.log("No GIF entry");
    });
  like.textContent = ` ${post.reaction.like}`;
  clap.textContent = ` ${post.reaction.clap}`;
  love.textContent = ` ${post.reaction.love}`;

  reactionCount(like, post.reaction.like, post.id, "like");
  reactionCount(clap, post.reaction.clap, post.id, "clap");
  reactionCount(love, post.reaction.love, post.id, "love");

  for (const comment of post.comments) {
    const commentP = document.createElement("p");
    commentP.textContent = comment;
    publishedComments.append(commentP);
  }
  newComment(commentForm, post.id, "commentInput");
}

function reactionCount(button, count, id, type) {
  button.addEventListener("click", () => {
    count += 1;
    fetch(`http://localhost:3000/posts/findpost?id=${id}&type=${type}`);
    button.innerHTML = ` ${count}`;
    button.disabled = true;
  });
}

function newComment(form, id, name) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const commentContent = { comment: event.target[name].value, id: id };
    const options = { method: "POST", body: JSON.stringify(commentContent) };
    fetch("http://localhost:3000/posts/newcomment", options);
    alert("Comment saved, viewable on refresh");
    form.reset();
  });
}
