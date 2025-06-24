import { model, Schema } from "mongoose";
import { TBook } from "../../modules/books/services/books.service";


const bookSchema = new Schema<TBook>(
  {
    title: { type: String, required: [true, "title is required"] },
    author: { type: String, required: [true, "author is required"] },
    genre: { type: String, required: [true, "genre is required"] },
    isbn: { type: String, required: [true, "isbn is required"] },
    description: { type: String, required: [true, "description is required"] },
    copies: { type: Number, required: [true, "copies is required"] },
    available: {
      type: Boolean,
      required: [true, "available value is required"],
    },
  },
  { timestamps: true },
);

// ! pre hook middleware
bookSchema.pre("save", function (next) {
  console.log(`Saving book: ${this.title}, Copies: ${this.copies}`);
  next();
});

// ! post hook middleware
bookSchema.post("save", function (doc, next) {
  console.log(`The title of book is "${doc.title}" is saved.`);
  next();
});

export const Books = model<TBook>("Book", bookSchema);