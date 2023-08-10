const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const post = new Schema({
  title: {
    type: String,
    required: [true, "Please add a Title"],
    maxlength: [10, "Title can not be more than 25 characters"],
    minlength: [3, "Title must have atleast three character"],
  },
  description: {
    type: String,
    required: [true, "Place your description here."]
  },
  content: { 
    type: String,
    require: [true, "Post content here."]
 },
  authorId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    autopopulate: true,
    //required:false
  },
  comments: [
    {
      body: {
        type: String,
        trim: true,
        required: [true],
        maxlength: 64,
        minlength: 8,
      },
      commenterName: {
        type: String,
        default: "Anonymous",
        maxlength: 79,
      },
      datePosted: {
        type: Date,
        default: Date.now(),
      },
    },
  ],
  likesCount: {
    type: Number,
    default: 0,
  },
  isLikedbyuser: {
    type: Boolean,
    default: false,
  },
});
// DiscussionPostSchema;
module.exports = mongoose.model("Post", post);
