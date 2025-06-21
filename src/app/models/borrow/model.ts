import { model, Schema, Types } from "mongoose";

const borrowSchema = new Schema({
  book: { type: Types.ObjectId, ref: "Book", required: true },
  quantity: { type: Number, required: true, min: 1 },
  duDate:{type:Date,required:true}
}, {
  timestamps:true
})

export const Borrow = model("Borrow", borrowSchema);