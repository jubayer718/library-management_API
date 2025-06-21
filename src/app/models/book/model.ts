import { model, Schema } from "mongoose";


const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: {
    type: String,
    required: true,
    enum:['FICTION','NOT_FICTION','SCIENCE','HISTORY','BIOGRAPHY','FANTASY']
  },
  isbn:{type:String, required:true,unique:true
  },
  description: { type: Boolean, default: true },
  copies: { type: Number, require: true, min: 0 },
  available:{type:Boolean, default:true}
}, {
  timestamps:true
})

export const Book = model(`Book`, bookSchema);

