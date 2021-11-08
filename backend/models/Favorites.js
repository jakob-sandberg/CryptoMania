const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", default: null },
  coins: [
    {
      type: String,
    },
  ],
});

const Favorite = mongoose.model("Favorite", favoriteSchema);

module.exports = Favorite;
