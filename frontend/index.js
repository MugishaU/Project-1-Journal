const postSection = document.getElementById("postSection");

fetch("http://localhost:3000/posts")
  .then((r) => r.json())
  .then((data) => displayPosts(data));


function displayPosts(posts){
    for (post of posts){
        //article//
        const article = document.createElement(`article`)
        article.setAttribute("id", `post${post.id}`)
        postSection.append(article)
        //title//
        const title = document.createElement(`h1`)
        title.setAttribute("id", `title${post.id}`)
        title.textContent = post.title
         article.append(title)
        //description//
        const description = document.createElement(`p`)
        description.setAttribute("id", `description${post.id}`)
        description.textContent = post.description
        article.append(description)

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
const buttonToTop = document.getElementById('buttonToTop');
buttonToTop.addEventListener("click", () => {
    // window.scrollTo(0, 0);
    window.scrollTo({
        top: 0,
        left: 0,
        behaviour: "smooth"
    });
});
// End of "scroll to the top" button//