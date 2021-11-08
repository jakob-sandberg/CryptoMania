const Favorite = require("../models/Favorites");

const storeFavCoin = async (req, res) => {
  let favorite = await Favorite.findOne({ userId: req.body.userId });
  if (favorite) {
    if (!favorite.coins.includes(req.body.coinId)) {
      favorite.coins.push(req.body.coinId);
      favorite.save();
    }
  }
  let favExists = await Favorite.exists({ coins: req.body.coinId });
  if (favExists) {
    return res.status(400).json({ error: "U've already liked this coin" });
  } else {
    if (!favorite) {
      const fav = await Favorite.create({
        userId: req.body.userId,
        coins: req.body.coinId,
      });

      res.send(fav);
    }
  }
};

const deleteFavCoin = async (req, res) => {
  try {
    let exists = await Favorite.exists({
      userId: req.params.userId,
      coins: req.params.coinId,
    });
    if (exists) {
      await Favorite.deleteOne({
        userId: req.params.userId,
        coins: req.params.coinId,
      }).exec();
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

/* const getFavCoin = async (req, res) => {
  Favorite.find({ userId: req.body.userId, CoinId: req.body.coinId }).exec(
    (err, fav) => {
      if (err) return res.status(400).send(err);
      return res.status(200).json({ success: true, fav });
    }
  );
}; */

const getFavCoins = async (req, res) => {
  Favorite.findById({ userId: req.body.userId, coinId: req.body.coinId }).exec(
    (err, fav) => {
      // Checks for thrown errors from the method itself.
      if (err) {
        res.status(400).json({ error: "Something went wrong" });
        return;
      }

      // If no match is found in the DB.
      if (!fav) {
        res.status(404).json({
          error: `Coin with id ${req.body.coinId} does not exist`,
        });
        return;
      }
      res.json(fav);
    }
  );
};
/* 


   */

const getFavCoinsByUserId = async (req, res) => {
  Favorite.find({ userId: req.body.userId }).exec((err, fav) => {
    // Checks for thrown errors from the method itself.
    if (err) {
      res.status(400).json({ error: "Something went wrong" });
      return;
    }

    // If no match is found in the DB.
    if (!fav) {
      res
        .status(404)
        .json({ error: `The user with id ${userId} dosen't have bookigs` });
      return;
    }
    res.json(fav);
  });
};

/* 




*/

module.exports = {
  storeFavCoin,
  getFavCoins,
  deleteFavCoin,
  getFavCoinsByUserId,
};
