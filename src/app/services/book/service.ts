import { Book } from "../../models/book/model";

interface QueryOptions {
  filter?: any;
  sortBy?: any;
  sort?: any;
  limit?: any;
}

export const createBook = async (payload: any) => {
  const book = new Book(payload);
  book.updateAvailability(); // call instance method
  return await book.save();
};

export const getAllBooks = async (options: QueryOptions) => {
  const { filter, sortBy = 'createdAt', sort = 'asc', limit = 10 } = options;

  const query: any = {};
  if (filter) query.genre = filter;

  return Book.find(query)
    .sort({ [sortBy]: sort === 'desc' ? -1 : 1 })
    .limit(Number(limit));
};

export const getBookById = async (id: string) => {
  return Book.findById(id);
};

export const updateBook = async (id: string, payload: any) => {
  const book = await Book.findByIdAndUpdate(id, payload, { new: true });
  if (!book) throw new Error('Book not found');
  book.updateAvailability();
  await book.save();
  return book;
};

export const deleteBook = async (id: string) => {
  await Book.findByIdAndDelete(id);
};
