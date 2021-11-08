const express = require("express");
const router = express.Router();

const favoritesController = require("../controllers/favoritesController");

// User routes setup goes underneath here...
router.post("/savefavcoin", favoritesController.storeFavCoin);
router.get("/getfavcoins", favoritesController.getFavCoins);
router.get("/user-favcoins", favoritesController.getFavCoinsByUserId);

router.delete("/deletefavprogram/:coinId", favoritesController.deleteFavCoin);

module.exports = router;
