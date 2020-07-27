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
    const reaction = document.createElement("button");
    reaction.textContent = "thumb-up";
    reaction.setAttribute("href", "#");
    reaction.setAttribute("id", `thumbUp${post.id}`);
    allPosts.append(reaction);

    const reactionCount = document.createElement("p");
    reactionCount.textContent = `Thumbs-up count: ${post.reaction.thumbUp}`;
    allPosts.append(reactionCount);
  }
}

function add1(button1, place) {
  document.getElementById(button1).addEventListener("click", () => {
    console.log("click");
  });
}

add1("thumbUp1");
