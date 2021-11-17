const Favorite = require("../models/Favorites");

const storeFavCoin = async (req, res) => {
  let favorite = await Favorite.findOne({ userId: req.body.userId });
  if (favorite) {
    if (!favorite.coins.some((coin) => coin.coinId === req.body.coinId)) {
      favorite.coins.push({
        coinId: req.body.coinId,
        coinName: req.body.coinName,
        coinUrl: req.body.coinUrl,
      });
      favorite.save();
    }
  } else {
    if (!favorite) {
      const fav = await Favorite.create({
        userId: req.body.userId,
        coins: {
          coinId: req.body.coinId,
          coinName: req.body.coinName,
          coinUrl: req.body.coinUrl,
        },
      });

      res.send(fav);
    }
  }
};

//coins: { coinId: req.body.coinId, coinUrl: req.body.coinUrl },

const deleteFavCoinFromUser = async (req, res) => {
  try {
    let exists = await Favorite.findOne({
      userId: req.params.userId,
    });
    if (exists) {
      exists.coins = exists.coins.filter(
        (coin) => coin.coinId != req.params.coinId
      );
      exists.save();

      res.json({
        message: `Coin with id ${req.params.coinId} has been deleted.`,
      });
      return;
    }
  } catch (error) {
    res
      .status(404)
      .json({ error: `Coin with id ${req.query.coinId} does not exist.` });
    return;
  }
};

const getFavCoinsByUserId = async (req, res) => {
  Favorite.find({ userId: req.query.userId }).exec((err, coins) => {
    if (err) {
      res.status(400).json({ error: `Something went wrong ` });
      return;
    }
    if (!coins) {
      res.status(404).json({
        error: `The user with id ${userId} dosen't have any fav coins`,
      });
      return;
    }

    let userCoins = [];

    coins.map((oneCoin) => {
      if (req.query.userId) {
        userCoins.push(oneCoin);
      } else {
        return;
      }
    });
    res.json({ userCoins });
  });
};

/* 




*/

module.exports = {
  storeFavCoin,
  deleteFavCoinFromUser,
  getFavCoinsByUserId,
};
