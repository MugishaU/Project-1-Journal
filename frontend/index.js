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
    const title = document.createElement(`h2`);
    title.setAttribute("id", `title${post.id}`);
    title.textContent = post.title;
    article.append(title);
    //description//
    const description = document.createElement(`p`);
    description.setAttribute("id", `description${post.id}`);
    description.textContent = post.description;
    article.append(description);

<<<<<<< HEAD
function displayPosts(posts){
    for (post of posts){
        //article//
        const article = document.createElement(`article`)
        article.setAttribute("id", `post${post.id}`)
        postSection.append(article)

        //title div wrapper//
        const titleDiv = document.createElement('div')
        titleDiv.setAttribute("id", "titleDiv")
        article.append(titleDiv)
        //title Label//
        const titleLabel = document.createElement('h1')
        titleLabel.setAttribute("id", "titleLabel")
        titleLabel.textContent = "Title:"
        titleDiv.append(titleLabel)
        //title//
        const title = document.createElement(`h1`)
        title.setAttribute("id", `title${post.id}`)
        title.textContent = `${post.title}`
        titleDiv.append(title)
        

        //description div wrapper//
        const descriptionDiv = document.createElement('div')
        descriptionDiv.setAttribute("id", "descriptionDiv")
        article.append(descriptionDiv)        
        //description label//
        const descriptionLabel = document.createElement('h1')
        descriptionLabel.setAttribute("id", "descriptionLabel")
        descriptionLabel.textContent = "Description:"
        descriptionDiv.append(descriptionLabel)
        //description//
        const description = document.createElement(`p`)
        description.setAttribute("id", `description${post.id}`)
        description.textContent = `${post.description}`
        descriptionDiv.append(description)
=======
    //gif//
    //Create div element for gif and append to article
    const gifDiv = document.createElement("div");
    gifDiv.setAttribute("id", "gifDiv");
    article.append(gifDiv);
    const giphy = document.createElement("img");
>>>>>>> ce487c84878c0b2533a19be740cd1bedfd93045e

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

<<<<<<< HEAD
        //reaction bar//
        const reactionBar = document.createElement('div')
        reactionBar.setAttribute("id",`reactionBar${post.id}`)
        article.append(reactionBar)
        //like//
        const like = document.createElement('i')
        like.setAttribute("id", `like${post.id}`)
        like.setAttribute("class", 'fas fa-thumbs-up') 
        reactionBar.append(like)
        //like count//
        const likeCount = document.createElement('h5')
        likeCount.setAttribute("id", `likeCount${post.id}`)
        like.textContent = ` ${post.reaction.like}`
        reactionBar.append(likeCount)
        reactionCount(like, post.reaction.like, post.id, 'like')
        //clap//
        const clap = document.createElement('i')
        clap.setAttribute("id", `clap${post.id}`)
        clap.setAttribute("class","fas fa-sign-language")
        reactionBar.append(clap)
        //clap count//
        const clapCount = document.createElement('h5')
        clapCount.setAttribute("id", `clapCount${post.id}`)
        clap.textContent = ` ${post.reaction.clap}`
        reactionBar.append(clapCount)
        reactionCount(clap, post.reaction.clap, post.id, 'clap')
        //love//
        const love = document.createElement('i')
        love.setAttribute("id", `love${post.id}`)
        love.textContent = ` ${post.reaction.love}`
        love.setAttribute("class","fas fa-heart")
        reactionBar.append(love)
        reactionCount(love, post.reaction.love, post.id, 'love')
        //love count//
        const loveCount = document.createElement('h5')
        loveCount.setAttribute("id", `loveCount${post.id}`)
        reactionBar.append(loveCount)
        //post Link//
        const postLink = document.createElement('a')
        postLink.setAttribute("id", `postLink${post.id}`)
        postLink.setAttribute("href", "#")
        reactionBar.append(postLink)
        //button in "post Link" to Go to Post//
        const buttonPostLink = document.createElement('button')
        buttonPostLink.setAttribute("id", "buttonPostLink")
        buttonPostLink.textContent ="Go to Post"
        postLink.append(buttonPostLink)
    }
=======
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
>>>>>>> ce487c84878c0b2533a19be740cd1bedfd93045e
}

function postId(button, id) {
  button.addEventListener("click", () => {
    fetch(`http://localhost:3000/posts/postid?id=${id}`);
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
<<<<<<< HEAD
// End of stop button//
=======
// End of "scroll to the top" button//
>>>>>>> ce487c84878c0b2533a19be740cd1bedfd93045e
