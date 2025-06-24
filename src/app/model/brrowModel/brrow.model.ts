import { model, Schema } from "mongoose";
import { Types } from "mongoose";

export type TBorrow = {
  book: Types.ObjectId;
  quantity: number;
  dueDate: Date;
};

const borrowSchema = new Schema<TBorrow>(
  {
    book: { type: Schema.Types.ObjectId, required: true },
    quantity: { type: Number, required: true },
    dueDate: { type: Date, required: true },
  },
  { timestamps: true },
);

export const Borrow = model<TBorrow>("Borrow", borrowSchema); 