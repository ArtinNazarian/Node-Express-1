const express = require("express");
let axios = require("axios");
const app = express();

app.use(express.json());

app.post("/", async function (req, res, next) {
  try {
    let results = await Promise.all(
      req.body.developers.map((d) => {
        return axios.get(`https://api.githu.com/users/${d}`);
      })
    );
    let out = results.map((r) => ({ name: r.data.name, bio: r.data.bio }));
    return res.send(JSON.stringify(out));
  } catch (err) {
    next(err);
    console.log(err);
  }
});

app.use(function (err, req, res, next) {
  res.status(404).send(err.message);
});

app.listen(3000);
