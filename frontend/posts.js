const test = document.getElementById('test')
const allPosts =document.getElementById('allPosts')


fetch('http://localhost:3000/posts')
    .then(r => r.json())
    .then(data => displayPosts(data));

    

function displayPosts(posts){
    
    for(post of posts){
        const url = `http://api.giphy.com/v1/gifs/search?q=${post.gif}&api_key=JRAJgNDb1SCjVI5M9EcLC24CFEBZt6ys&limit=1`;
        fetch(url)
        // .then(r => r.json())
        .then(data => {
            // console.log(data.url);
            // console.log(data.embed_url);
            console.log(data);

            const giphy = document.createElement("img");
            giphy.src = data.data.url;
            allPosts.append(giphy);
        });

        console.log(`Title of #${post.id} is: ${post.title} `)
        const title = document.createElement('p');
        title.textContent = `Title of #${post.id} is: ${post.title} `
        allPosts.append(title)
    }
}
