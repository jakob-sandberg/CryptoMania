const Favorite = require("../models/Favorites");

const storeFavCoin = async (req, res) => {
  const fav = await Favorite.create({
    userId: req.body.userId,
    coinId: req.body.coinId,
  });

  res.send(fav);
};
/* 
const deleteFavCoin = async (req, res) => {
  Favorite.findOneAndDelete({
    coinId: req.body.coinId,
    userId: req.body.userId,
  }).exec((err, doc) => {
    if (err) return res.status(400).json({ success: false, err });
    res.status(200).json({ success: true, doc });
  });
};

const getFavCoin = async (req, res) => {
  Favorite.find({ userId: req.body.userId }).exec((err, favorites) => {
    if (err) return res.status(400).send(err);
    return res.status(200).json({ success: true, favorites });
  });
}; */

module.exports = {
  storeFavCoin /* 
  getFavCoin,
  deleteFavCoin, */,
};
