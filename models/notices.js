const { Schema, model, SchemaTypes } = require("mongoose");

const noticesSchema = new Schema({
  title: {
    type: String,
    required: [true, "Set title for notices"],
  },
  name: {
    type: String,
  },
  birthdate: {
    type: Date,
  },
  bread: {
    type: String,
  },
  location: {
    type: String,
  },
  comments: {
    type: String,
    required: [true, "Set comments for notices"],
  },
  price: {
    type: Number,
    required: [true, "Set price for notices"],
  },
  favorite: {
    type: Boolean,
    default: false,
  },
  category: {
    type: String,
    enum: ["sell", "lost-found", "for-free"],
    required: [true, "Set category for notices"],
  },
  owner: {
    type: SchemaTypes.ObjectId,
    ref: "users",
  },
});

const Notice = model("notice", noticesSchema);

module.exports = Notice;
