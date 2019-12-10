const express = require("express");
const app = express();

const PORT = parseInt(process.env.PORT) || 5000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/assets", express.static("static"));

app.use("/api/games", require("./routes/games.route"));

app.listen(PORT, () => {
  console.log(`Listening on port : ${PORT}`);
});
