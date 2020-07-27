const test = document.getElementById('test')
const allPosts = document.getElementById('allPosts')


fetch('http://localhost:3000/posts')
    .then(r => r.json())
    .then(data => displayPosts(data));

    

function displayPosts(posts){
    
    for(post of posts){
    //     //connecting to giphy API 
        const url = `http://api.giphy.com/v1/gifs/search?q=${post.gif}&api_key=JRAJgNDb1SCjVI5M9EcLC24CFEBZt6ys&limit=1`;
            fetch(url)
            .then(r => r.json())
            .then(data => {
            const giphy = document.createElement("img");
            //grabbing gif image from prommise
            giphy.src = data.data[0].images.original.url;
            allPosts.append(giphy);
        })
        
            .catch(function() {
                console.log("No GIF entry")
            });

        // console.log(`Title of #${post.id} is: ${post.title} `)
        const title = document.createElement('p');
        title.textContent = `Title of #${post.id} is: ${post.title} `
        allPosts.append(title)
        const comments = document.createElement('p');
        comments.textContent = `${post.comments}`;


                // Fetching HTML Elements in Variables by ID.
        let commentForm = document.createElement('form'); // Create New Element Form
        commentForm.setAttribute("id", `commentForm${post.id}`);
        // commentForm.setAttribute("action", ""); // Setting Action Attribute on Form
        // commentForm.setAttribute("method", "post"); // Setting Method Attribute on Form
        allPosts.appendChild(commentForm); 

        let messageLabel = document.createElement('label'); // Append Textarea
        messageLabel.innerHTML = "Add comment: ";
        commentForm.appendChild(messageLabel);

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
