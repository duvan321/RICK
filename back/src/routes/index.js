const { login } = require("../controllers/login");
const { deleteFav } = require("../controllers/deleteFav");
const { postFav } = require("../controllers/postFav");
const { postUser } = require("../controllers/postUser");
const { getCharById } = require("../controllers/getCharById");
const { getAllRicki } = require("../controllers/getAllRicki");
const router = require("express").Router();
router.get("/character/:id", getCharById);
router.get("/characters", getAllRicki);

// router.get("/character/:id", (req, res) => {
//   getCharById(req, res);
// });

router.get("/login", login);

// router.get("/login", (req, res) => {
//   login(req, res);
// });

router.post("/login", postUser);
// router.post("/login", (req, res) => {
//   postUser(req, res);
// });
router.post("/fav", postFav);
// router.post("/fav", (req, res) => {
//   postFav(req, res);
// });

router.delete("/fav/:id", deleteFav);
// router.delete("/fav/:id", (req, res) => {
//   deleteFav(req, res);
// });

module.exports = { router };
