const form = document.getElementById("form");
const title = document.getElementById("title");
const description = document.getElementById("description");
const content = document.getElementById("content");
const gif = document.getElementById("gif");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = event.target.title.value;
  const description = event.target.description.value;
  const content = event.target.content.value;
  const gif = event.target.gif.value;

  submitPost(title, description, content, gif);
});

charCount(title, "titleCount");
charCount(description, "descriptionCount");
charCount(content, "contentCount");

function charCount(trackElement, postElementid) {
  trackElement.addEventListener("keyup", () => {
    const count = event.target.value.length;
    document.getElementById(
      postElementid
    ).textContent = `${count}/${event.target.maxLength}`;
  });
}

function submitPost(title, description, content, gif) {
  console.log(`Title: ${title}`);
  console.log(`Description: ${description}`);
  console.log(`Content: ${content}`);
  console.log(`GIF: ${gif}`);
  const newPostElements = {
    title: title,
    description: description,
    content: content,
    gif: gif,
  };

  const options = {
    method: "POST",
    body: JSON.stringify(newPostElements),
  };

  fetch("http://localhost:3000/posts/newpost", options);
}
