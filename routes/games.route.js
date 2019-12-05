const router = require("express").Router();
const { getGames, updateGames } = require("../data/data");

router.get("/", (req, res) => {
  res.send(getGames());
});

router.get("/:id", (req, res) => {
  const id = +req.params.id;
  const game = getGames().filter(game => game.id === id)[0];
  res.send(game);
});

router.post("/new", async (req, res) => {
  const games = getGames();
  const newGame = req.body;
  await updateGames([...games, newGame]);
  res.statusCode = 200;
  res.send({ success: true });
});

router.post("/ignore", async (req, res) => {
  let games = getGames();
  let ignored = false;
  games = games.map(game => {
    if (game.id === +req.body.id) {
      game.ignored = !game.ignored;
      ignored = game.ignored;
    }
    return game;
  });
  await updateGames(games);

  res.statusCode = 200;
  res.send({ ignored });
});

router.post("/whitelist", async (req, res) => {
  let games = getGames();
  let whitelisted = false;
  games = games.map(game => {
    if (game.id === +req.body.id) {
      game.whitelisted = !game.whitelisted;
      whitelisted = game.whitelisted;
    }
    return game;
  });
  await updateGames(games);

  res.statusCode = 200;

  res.send({ whitelisted });
});

module.exports = router;
