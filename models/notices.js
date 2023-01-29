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
  owner: {
    type: SchemaTypes.ObjectId,
    ref: "users",
  },
});

const Notic = model("notic", noticesSchema);

module.exports = Notic;
