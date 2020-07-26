const express = require("express");
const cors = require("cors");
const port = 3000;
const app = express();

app.use(cors());
app.listen(port, () =>
  console.log(`Express server running at http://localhost:${port}`)
);

app.get("/", (req, res) => res.send("app.js server running from the alexTestBranch"));
