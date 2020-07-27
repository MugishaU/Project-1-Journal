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
    let num = post.reaction.thumbUp;
    const reactionButton = document.createElement("h3");
    reactionButton.textContent = "thumb-up";
    reactionButton.setAttribute("id", `thumbUp${post.id}`);
    allPosts.append(reactionButton);

    const reactionCounter = document.createElement("p");
    reactionCounter.innerHTML = `Thumbs-up count: ${post.reaction.thumbUp}`;
    allPosts.append(reactionCounter);
    add1(reactionButton, num, reactionCounter);
  }
}

function add1(button, count, display) {
  button.addEventListener("click", () => {
    count += 1;
    display.innerHTML = `Thumbs-up count: ${count}`;
    console.log(count);
  });
}
