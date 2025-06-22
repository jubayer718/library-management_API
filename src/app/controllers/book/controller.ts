import { Request, Response } from 'express';
import * as bookService from '../../services/book/service'

export const createBook = async (req: Request, res: Response) => {
  try {
    const result = await bookService.createBook(req.body);
    res.status(201).json({
      success: true,
      message: 'Book created successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: 'Failed to create book',
      error: error.message || error,
    });
  }
};

export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const { filter, sortBy, sort = 'asc', limit = 10 } = req.query;
    const result = await bookService.getAllBooks({ filter, sortBy, sort, limit });
    res.status(200).json({
      success: true,
      message: 'Books retrieved successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({ success: false, message: 'Error', error: error.message });
  }
};

export const getBookById = async (req: Request, res: Response) => {
  try {
    const result = await bookService.getBookById(req.params.id);
    res.status(200).json({
      success: true,
      message: 'Book retrieved successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(404).json({ success: false, message: 'Book not found', error: error.message });
  }
};

export const updateBook = async (req: Request, res: Response) => {
  try {
    const result = await bookService.updateBook(req.params.id, req.body);
    res.status(200).json({
      success: true,
      message: 'Book updated successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({ success: false, message: 'Failed to update', error: error.message });
  }
};

export const deleteBook = async (req: Request, res: Response) => {
  try {
    await bookService.deleteBook(req.params.id);
    res.status(200).json({
      success: true,
      message: 'Book deleted successfully',
      data: null,
    });
  } catch (error: any) {
    res.status(400).json({ success: false, message: 'Failed to delete', error: error.message });
  }
};
