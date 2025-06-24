import { Books } from "../../../model/booksModel/books.model";



export type TBook = {
  title: string;
  author: string;
  genre: string;
  isbn: string;
  description: string;
  copies: number;
  available: boolean;
};


type QueryOptions = {
  filter?: string;
  sortBy?: string;
  sort?: string;
  limit?: number;
};

// ! post request
const createBookIntoDB = async (book: TBook) => {
  const result = await Books.create(book);
  return result;
};

// !get request, retrieve all books
const getAllBooksFromDB = async (queryParams: QueryOptions) => {
  const { filter, sortBy, sort, limit } = queryParams;
  const queryObject:{genre?: object} = {};
  if (filter) {
    queryObject.genre = { $regex: filter, $options: "i" };
  }
  const baseQuery = Books.find(queryObject);
  if (sortBy) {
    const sortOrder = sort === "desc" ? -1 : 1;
    baseQuery.sort({ [sortBy as string]: sortOrder });
  }
  
  baseQuery.limit(limit ?? 10);
  const result = await baseQuery;
  return result;
};

// ! single book retrieve from db
const getSingleBookFromDB = async (id: string) => {
  const result = await Books.findById(id);
  return result;
};

// ! delete book from db
const deleteBookFromDB = async (id: string) => {
  const result = await Books.findByIdAndDelete(id);
  return result;
};

// ! update book from db
const updateBookIntoDB = async (id: string, payload: Partial<TBook>) => {
  const result = await Books.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

export const BookServices = {
  createBookIntoDB,
  getAllBooksFromDB,
  getSingleBookFromDB,
  deleteBookFromDB,
  updateBookIntoDB,
};