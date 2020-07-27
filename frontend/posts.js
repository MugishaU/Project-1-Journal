const test = document.getElementById('test')
const allPosts =document.getElementById('allPosts')


fetch('http://localhost:3000/posts')
    .then(r => r.json())
    .then(data => displayPosts(data))


function displayPosts(posts){
    for(post of posts){
        console.log(`Title of #${post.id} is: ${post.title} `)
        const title = document.createElement('p');
        title.textContent = `Title of #${post.id} is: ${post.title} `
        allPosts.append(title)
    }
}
