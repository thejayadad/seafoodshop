import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
        enum: [
            'Football',
            'Soccer',
            'Basketball',
            'Baseball',
            'Hockey',
        ]
    },
    username: {
        type: String,
        required: true,
      },
}, {timestamps: true})

export default mongoose?.models?.Post || mongoose.model("Post", PostSchema)