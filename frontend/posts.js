const test = document.getElementById("test");
const allPosts = document.getElementById("allPosts");

fetch("http://localhost:3000/posts")
  .then((r) => r.json())
  .then((data) => displayPosts(data));

function displayPosts(posts) {
  for (post of posts) {
    //Title & id//
    const title = document.createElement("p");
    const id = document.createElement("p");
    title.textContent = `Title: ${post.title} `;
    id.textContent = `Id: #${post.id} `;
    allPosts.append(title);
    allPosts.append(id);
    //Content//
    const content = document.createElement("p");
    content.textContent = post.content;
    allPosts.append(content);
    //gif//
    const gif = document.createElement("img");
    gif.textContent = post;
    allPosts.append(gif);

    //reactions//
    //likes//
    let likes = post.reaction.like;
    let postID = post.id;
    const likeButton = document.createElement("button");
    likeButton.textContent = `Likes`;
    // likeButton.setAttribute("id", `thumbUp${post.id}`);
    allPosts.append(likeButton);

    const likeCounter = document.createElement("p");
    likeCounter.innerHTML = `${likes}`;
    allPosts.append(likeCounter);
    reactionCount(likeButton, likes, likeCounter, postID, "like");

    //love//
    let love = post.reaction.love;
    const loveButton = document.createElement("button");
    loveButton.textContent = `Love`;
    loveButton.setAttribute("id", `thumbUp${post.id}`);
    allPosts.append(loveButton);

    const loveCounter = document.createElement("p");
    loveCounter.innerHTML = `${love}`;
    allPosts.append(loveCounter);
    reactionCount(loveButton, love, loveCounter, postID, "love");

    //clap//
    let clap = post.reaction.clap;
    const clapButton = document.createElement("button");
    clapButton.textContent = `Clap`;
    clapButton.setAttribute("id", `thumbUp${post.id}`);
    allPosts.append(clapButton);

    const clapCounter = document.createElement("p");
    clapCounter.innerHTML = `${clap}`;
    allPosts.append(clapCounter);
    reactionCount(clapButton, clap, clapCounter, postID, "clap");
  }
}

function reactionCount(button, count, display, id, type) {
  button.addEventListener("click", () => {
    count += 1;
    fetch(`http://localhost:3000/posts/findpost?id=${id}&type=${type}`);
    display.innerHTML = `${count}`;
    button.disabled = true;
  });
}
