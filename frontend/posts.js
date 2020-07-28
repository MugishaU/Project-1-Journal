const postSection = document.getElementById("postSection");

fetch("http://localhost:3000/posts")
  .then((r) => r.json())
  .then((data) => displayPosts(data));

function displayPosts(posts) {
  for (post of posts) {
    //article//
    const article = document.createElement(`article`);
    article.setAttribute("id", `post${post.id}`);
    postSection.append(article);
    //title//
    const title = document.createElement(`h1`);
    title.setAttribute("id", `title${post.id}`);
    title.textContent = post.title;
    article.append(title);
    //main body of post//
    const main = document.createElement("p");
    main.setAttribute("id", `main${post.id}`);
    main.textContent = post.content;
    article.append(main);
    //gif//
    //reaction bar//
    const reactionBar = document.createElement("div");
    reactionBar.setAttribute("id", `reactionBar${post.id}`);
    article.append(reactionBar);

    //like//
    const like = document.createElement("button");
    like.setAttribute("id", `like${post.id}`);
    like.setAttribute("class", "fas fa-thumbs-up");
    reactionBar.append(like);

    const likeCount = document.createElement("h5");
    likeCount.setAttribute("id", `likeCount${post.id}`);
    like.textContent = ` ${post.reaction.like}`;
    reactionBar.append(likeCount);
    reactionCount(like, post.reaction.like, post.id, "like");

    //clap//
    const clap = document.createElement("button");
    clap.setAttribute("id", `clap${post.id}`);
    clap.setAttribute("class", "fas fa-sign-language");
    reactionBar.append(clap);

    const clapCount = document.createElement("h5");
    clapCount.setAttribute("id", `clapCount${post.id}`);
    clap.textContent = ` ${post.reaction.clap}`;
    reactionBar.append(clapCount);
    reactionCount(clap, post.reaction.clap, post.id, "clap");

    //love//
    const love = document.createElement("button");
    love.setAttribute("id", `love${post.id}`);
    love.textContent = ` ${post.reaction.love}`;
    love.setAttribute("class", "fas fa-heart");
    reactionBar.append(love);
    reactionCount(love, post.reaction.love, post.id, "love");

    const loveCount = document.createElement("h5");
    loveCount.setAttribute("id", `loveCount${post.id}`);
    reactionBar.append(loveCount);

    //comments Area//
    const commentsArea = document.createElement("div");
    commentsArea.setAttribute("id", `commentsArea${post.id}`);
    article.append(commentsArea);

    //published comments
    const publishedComments = document.createElement("div");
    publishedComments.setAttribute("id", `publishedComments${post.id}`);
    commentsArea.append(publishedComments);

    for (const comment of post.comments) {
      const commentP = document.createElement("p");
      commentP.textContent = comment;
      publishedComments.append(commentP);
    }
  }
}

function reactionCount(button, count, id, type) {
  button.addEventListener("click", () => {
    count += 1;
    fetch(`http://localhost:3000/posts/findpost?id=${id}&type=${type}`);
    button.innerHTML = ` ${count}`;
    button.disabled = true;
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
