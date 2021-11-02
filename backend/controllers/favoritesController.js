const Favorite = require("../models/Favorites");

const addToFavorite = async (req, res) => {
  console.log(req.body);

  const favorite = await new Favorite(req.body);

  favorite.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({ success: true });
  });
};

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
};

module.exports = {
  addToFavorite,
  getFavCoin,
  deleteFavCoin,
};
