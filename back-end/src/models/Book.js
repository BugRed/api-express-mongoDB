import mongoose from "mongoose";
import { authorSchema } from "./Author.js";

const bookSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    title: {type: String, require: true},
    publisher: {type: String, require: true},
    price: {type: Number},
    pages: {type: Number},
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'authors', required: true},
}, { versionKey: false });

const book = mongoose.model('books', bookSchema);

export default book;