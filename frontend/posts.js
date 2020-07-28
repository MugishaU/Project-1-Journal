const postSection = document.getElementById("postSection");

fetch("http://localhost:3000/posts")
  .then((r) => r.json())
  .then((data) => displayPosts(data));

function displayPosts(posts) {
  for (post of posts) {
    const article = document.createElement(`article`)
    article.setAttribute("id", `article${post.id}`)
    postSection.append(article)

    const title = document.createElement(`h1`)
    title.setAttribute("id", `title${post.id}`)
    title.textContent = post.title
    article.append(title)

    const main = document.createElement('p')
    main.setAttribute("id", `main${post.id}`)
    main.textContent = post.content
    article.append(main)

    //gif//
    //reaction bar//
    const reactionBar = document.createElement('div')
    reactionBar.setAttribute("id",`reactionBar${post.id}`)
    article.append(reactionBar)
    

    //like//
    const like = document.createElement('i')
    like.setAttribute("id", `like${post.id}`)
    like.setAttribute("class", 'fas fa-thumbs-up')
    reactionBar.append(like)
    
    const likeCount = document.createElement('h5')
    likeCount.setAttribute("id", `likeCount${post.id}`)
    reactionBar.append(likeCount)

    //clap//
    const clap = document.createElement('i')
    clap.setAttribute("id", `clap${post.id}`)
    clap.setAttribute("class","fas fa-sign-language")
    reactionBar.append(clap)
    
    const clapCount = document.createElement('h5')
    clapCount.setAttribute("id", `clapCount${post.id}`)
    reactionBar.append(clapCount)

    //love//
    const love = document.createElement('i')
    love.setAttribute("id", `love${post.id}`)
    love.setAttribute("class","fas fa-heart")
    reactionBar.append(love)
    
    const loveCount = document.createElement('h5')
    loveCount.setAttribute("id", `loveCount${post.id}`)
    reactionBar.append(loveCount)
    






  }
}


  












function displayPosts1 (posts) {
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
