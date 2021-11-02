const express = require("express");
const router = express.Router();

const favoritesController = require("../controllers/favoritesController");

// User routes setup goes underneath here...
router.post("/addtofavorite", favoritesController.addToFavorite);
router.get("/getfavcoin", favoritesController.getFavCoin);

router.delete(
  "/deletefavprogram/:coinId/:userId",
  favoritesController.deleteFavCoin
);

module.exports = router;
