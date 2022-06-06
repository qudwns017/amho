const mongoose = require("mongoose");

const spotSchema = mongoose.Schema({
  // 주차장 이름
  placename: {
    type: String,
    // required: true,
  },
  // 주차장 주소
  spotadd: {
    type: String,
    // required: true,
  },
  // 주차장 자리
  seat: {
    type: Array,
    // required: true,
  },
});

const Spot = mongoose.model("Spot", spotSchema);

module.exports = { Spot };
