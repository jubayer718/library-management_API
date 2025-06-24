import { z } from "zod";

export const validatedBooks = z.object({
  title: z
    .string({
      required_error: "Title is required",
      invalid_type_error: "Title must be a string",
    })
    .min(1, "Title cannot be empty"),

  author: z
    .string({
      required_error: "Author is required",
      invalid_type_error: "Author must be a string",
    })
    .min(1, "Author cannot be empty"),

  genre: z
    .string({
      required_error: "Genre is required",
      invalid_type_error: "Genre must be a string",
    })
    .min(1, "Genre cannot be empty"),

  isbn: z
    .string({
      required_error: "ISBN is required",
      invalid_type_error: "ISBN must be a string",
    })
    .min(1, "ISBN cannot be empty"),

  description: z
    .string({
      required_error: "Description is required",
      invalid_type_error: "Description must be a string",
    })
    .min(1, "Description cannot be empty"),

  copies: z
    .number({
      required_error: "Copies is required",
      invalid_type_error: "Copies must be a number",
    }),

  available: z.boolean({
    required_error: "Availability status is required",
    invalid_type_error: "Available must be true or false",
  }),
});

export const validatedPartialBooks = validatedBooks.partial();