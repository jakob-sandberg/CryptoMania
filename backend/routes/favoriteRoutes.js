const express = require("express");
const router = express.Router();

const favoritesController = require("../controllers/favoritesController");

// User routes setup goes underneath here...
router.post("/savefavcoin", favoritesController.storeFavCoin);
//router.get("/getfavcoins", favoritesController.getFavCoins);
router.get("/userfavcoins/", favoritesController.getFavCoinsByUserId);

router.delete("/:userId/:coinId", favoritesController.deleteFavCoinFromUser);

module.exports = router;
