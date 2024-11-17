const mongoose = require("mongoose");
const { Schema } = mongoose;

const submissionSchema = new Schema({
  who: {
    type: Schema.Types.ObjectId,
    ref: "Student",
    require: true,
  },
  when: {
    type: Date,
    require: true,
  },
  verdict: {
    type: String,
    require: true,
  },
  language: {
    type: String,
    require,
  },
});
module.exports = mongoose.model("Submissions", submissionSchema);
