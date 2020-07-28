const test = document.getElementById('test')
const allPosts = document.getElementById('allPosts')


fetch('http://localhost:3000/posts')
    .then(r => r.json())
    .then(data => displayPosts(data));

    

function displayPosts(posts){
    //looping over individual posts
    for(post of posts){
    //creating article and appending to section
    const article = document.createElement('article');
    article.setAttribute("id", `${post.id}`)
    allPosts.append(article)

    //creating title and appending to article
    const title = document.createElement('h2');
    title.textContent = `Title of #${post.id} is: ${post.title} `
    title.setAttribute("id", "title")
    article.append(title)

    //creating main content and appending to article
    const main = document.createElement('p');
    main.textContent = `${post.content}`
    main.setAttribute("id", "main")
    article.append(main)

    //creating gif and appending to article
        //     //connecting to giphy API 
        const url = `http://api.giphy.com/v1/gifs/search?q=${post.gif}&api_key=JRAJgNDb1SCjVI5M9EcLC24CFEBZt6ys&limit=1`;
            fetch(url)
            .then(r => r.json())
            .then(data => {
        //Create div element for gif and append to article
            const gifDiv = document.createElement("div")
            gifDiv.setAttribute("id", "gifDiv")
            article.append(gifDiv)

            const giphy = document.createElement("img");
        //grabbing gif image
            giphy.src = data.data[0].images.original.url;
        //making gif image append to div
            gifDiv.append(giphy);
        })
            .catch(function() {
                console.log("No GIF entry")
            });

        //reaction bar inputs here:
        //
        //
        //
        //
        //
        //
        
        //creating div called commentArea and appending to article
        const commentArea = document.createElement('div');
        commentArea.setAttribute("id", "commentsArea")
        article.append(commentArea)

        //creating div called publishedComments and appending to commentArea
        const publishedComments = document.createElement('div');
        publishedComments.setAttribute("id", "publishedComments")
        commentArea.append(publishedComments)

        //creating p tag for comments and append to publishedComments

        for (let i = 0; i < post.comments.length; i++) {
            const newComment = document.createElement('p');
            newComment.textContent = `${post.comments[i]}`
            publishedComments.append(newComment)
            console.log(`${post.comments}`)
        }
        
        // creating form that appends to commentsArea
        const commentForm = document.createElement('form');
        commentForm.setAttribute("id", "commentForm")
        commentArea.append(commentForm)

        //creating label for new comments
        const commentLabel = document.createElement('label');
        commentLabel.setAttribute("id", "commentInput")
        commentLabel.setAttribute("for", "commentInput")

//     // messageLabel.innerHTML = "Add comment: ";
    // commentForm.appendChild(messageLabel);

    let textAreaElement = document.createElement('textarea');
    textAreaElement.setAttribute("name", "dmessage");
    commentForm.appendChild(textAreaElement);

    let messagebreak = document.createElement('br');
    commentForm.appendChild(messagebreak);

    let submitElement = document.createElement('input'); // Append Submit Button
    submitElement.setAttribute("type", "submit");
    submitElement.setAttribute("name", "dsubmit");
    submitElement.setAttribute("value", "Comment");
    commentForm.appendChild(submitElement);

}

document.getElementById(`commentForm${post.id}`).addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(`${post.id} ${event.target.value}`)
  });
} 
 
