const form = document.getElementById("form");
const title = document.getElementById("titleForm");
const description = document.getElementById("descriptionForm");
const content = document.getElementById("contentForm");
const gif = document.getElementById("gifForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = event.target.titleForm.value;
  const description = event.target.descriptionForm.value;
  const content = event.target.contentForm.value;
  const gif = event.target.gifForm.value;

  submitPost(title, description, content, gif);
  alert("Post created");
  form.reset();
  redirectHome();
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

    if (`${count}` === `${event.target.maxLength}`) {
      document.getElementById(postElementid).style.color = "red";
    } else {
      document.getElementById(postElementid).style.color = "black";
    }
  });
}

function submitPost(title, description, content, gif) {
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

  fetch("https://majc-blogs.herokuapp.com/posts/newpost", options);
}

function redirectHome() {
  window.location.href = "index.html";
}
