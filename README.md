# Online Journal

## Description

This website allows users to anoymously post blog entries with the option to append a gif.
On posting, other users can view posts, react to them with one of 3 pre-set emoji reactions and comment on posts.
Users can filter posts by title and description when on the Home page, and by title and content when on the All Posts page- this is done via search bar in the top navigation bar. Users can view posts indivdually or can scroll through all available posts.

## Instructions

### Run Deployed Version

Open [this link](https://majc-blogs.netlify.app/), if no content appears wait for 30 seconds and refresh the page

### Run Local Version

1. Pull code from Master Branch
2. run 'npm install'
3. run 'npm start'
4. Open ./frontend/index.html

- If any changes are made to app.js then to re-start server press CTRL+C twice and run steps 3 & 4 again.
- If any changes are made by adding reactions, comments or posts a refresh may be needed to view changes

## Known Bugs

### Deployed Version

- If multiple people view a single post, when refreshing the page a user may be redirected to the last post anyone currently viewing the website opened

## Contributors

Jamie Sear ([@JamieSear](https://github.com/JamieSear)), Cindy Feng ([@cindywfeng](https://github.com/cindywfeng)), Mugisha Uwiragiye ([@MugishaU](https://github.com/MugishaU)) & Alex Peirson ([@AKP-13](https://github.com/AKP-13))

## Daily Standup

### Day 1

- Mugisha made a great start over the weekend with working on a 'Create' page and got the new posts to be saved to a JSON file once submitted.
- We discussed who would do what from our Google Doc plan that was created on Friday.
- We decided to work on displaying the data from the JSON file on the 'Posts' page with Alex and Jamie focusing on communicating with the Giphy API and Mugisha and Cindy focusing on generating and storing the posts' reaction data.
- No blockers.

### Day 2

- Updated our Google Doc plan with what we had achieved yesterday and reflected upon the fact that we'd made a good start.
- Jamie and Cindy created HTML and Figma templates of what our remaining pages were to look like.
- Mugisha fixed a bug that stopped the page refreshing whenever we write to the JSON file.
- Alex and Jamie continued working on displaying the JSON data onto the 'Posts' page - ran into some trouble with appending the correct comment to the correct post's comment section which Mugisha managed to solve in the evening.
- Cindy made great progress on creating navbars and adding some styling to our pages as well as completing the reaction counters with Mugisha.
- No blockers.

### Day 3
