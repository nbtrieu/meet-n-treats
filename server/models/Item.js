const { Schema, model } = require("mongoose");

const itemSchema = new Schema({
  itemOwner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  itemPhoto: {
    type: String,
    required: false,
  },
  itemTitle: {
    type: String,
    required: true,
    trim: true,
  },
  itemDescription: {
    type: String,
    required: true,
    trim: true,
  },
  itemPrice: {
    type: String,
    required: true,
    trim: true,
  },
  itemStatus: {
    type: String,
    required: false,
  },
  itemSellBy: {
    type: String,
    required: false,
  },
});

const Item = model("Item", itemSchema);

module.exports = Item;
