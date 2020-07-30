const postSection = document.getElementById("postSection");
const searchBar = document.getElementById("searchBar");
const main = document.getElementById("main");

searchBar.addEventListener("submit", (event) => {
  event.preventDefault();
  document.getElementById("postSection").remove();
  const postSection = document.createElement("section");
  postSection.setAttribute("id", "postSection");
  main.append(postSection);
  let searchTerm = event.target.search.value; // handle '&'
  let newSearchTerm = "";
  for (let i = 0; i < searchTerm.length; i++) {
    let letter = searchTerm[i];
    if (letter === "&") {
      newSearchTerm += "%26";
    } else {
      newSearchTerm += letter;
    }
  }
  fetch(`https://majc-blogs.herokuapp.com/post/search/home?q=${newSearchTerm}`)
    .then((r) => r.json())
    .then((data) => displayPosts(data));
});

fetch("https://majc-blogs.herokuapp.com/posts")
  .then((r) => r.json())
  .then((data) => displayPosts(data));

function displayPosts(posts) {
  for (post of posts) {
    //article//
    const article = document.createElement(`article`);
    article.setAttribute("id", `post${post.id}`);
    document.getElementById("postSection").append(article);
    //title//
    const title = document.createElement(`h2`);
    title.setAttribute("id", `title${post.id}`);
    title.textContent = post.title;
    article.append(title);
    //description//
    const description = document.createElement(`p`);
    description.setAttribute("id", `description${post.id}`);
    description.textContent = post.description;
    article.append(description);

    //gif//
    //Create div element for gif and append to article
    const gifDiv = document.createElement("div");
    gifDiv.setAttribute("id", "gifDiv");
    article.append(gifDiv);
    const giphy = document.createElement("img");

    const url = `http://api.giphy.com/v1/gifs/search?q=${post.gif}&api_key=JRAJgNDb1SCjVI5M9EcLC24CFEBZt6ys&offset=${post.id}&rating=g&limit=1`;
    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        //grabbing gif image
        giphy.src = data.data[0].images.original.url;
        //making gif image append to div
        gifDiv.append(giphy);
      })
      .catch(function () {
        console.log("No GIF entry");
      });

    //reaction bar//
    const reactionBar = document.createElement("div");
    reactionBar.setAttribute("id", `reactionBar${post.id}`);
    article.append(reactionBar);
    //like//
    const like = document.createElement("i");
    like.setAttribute("id", `like${post.id}`);
    like.setAttribute("class", "fas fa-thumbs-up");
    like.textContent = ` ${post.reaction.like}`;
    reactionBar.append(like);

    //clap//
    const clap = document.createElement("i");
    clap.setAttribute("id", `clap${post.id}`);
    clap.setAttribute("class", "fas fa-sign-language");
    clap.textContent = ` ${post.reaction.clap}`;
    reactionBar.append(clap);

    //love//
    const love = document.createElement("i");
    love.setAttribute("id", `love${post.id}`);
    love.textContent = ` ${post.reaction.love}`;
    love.setAttribute("class", "fas fa-heart");
    reactionBar.append(love);

    const br = document.createElement("br");
    reactionBar.append(br);

    //post Link//
    const postLink = document.createElement("a");
    postLink.setAttribute("id", `postLink${post.id}`);
    postLink.setAttribute("href", `singlepost.html`);
    reactionBar.append(postLink);
    //button in "post Link" to Go to Post//
    const buttonPostLink = document.createElement("button");
    buttonPostLink.setAttribute("id", "buttonPostLink");
    buttonPostLink.textContent = "Go to Post";
    postLink.append(buttonPostLink);
    postId(buttonPostLink, post.id);
  }
}

function postId(button, id) {
  button.addEventListener("click", () => {
    fetch(`https://majc-blogs.herokuapp.com/posts/postid?id=${id}`);
  });
}

// To the top button //
const buttonToTop = document.getElementById("buttonToTop");
buttonToTop.addEventListener("click", () => {
  // window.scrollTo(0, 0);
  window.scrollTo({
    top: 0,
    left: 0,
    behaviour: "smooth",
  });
});
// End of "scroll to the top" button//
