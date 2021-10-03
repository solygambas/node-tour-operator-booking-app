// for reference: https://blog.logrocket.com/building-a-restful-api-in-deno-with-oak-and-mongodb/
import { RouterContext } from "https://deno.land/x/oak/mod.ts";
import { v4 } from "https://deno.land/std@0.106.0/uuid/mod.ts";
import { Book } from "../models/bookModel.ts";

let books: Book[] = [
  {
    id: "1",
    title: "name of the wind",
    author: "patrick rothfuss",
    pages: 500,
  },
  {
    id: "2",
    title: "the way of kings",
    author: "brandon sanderson",
    pages: 400,
  },
  { id: "3", title: "good omens", author: "terry pratchett", pages: 300 },
];

export const getAllBooks = (context: RouterContext) => {
  context.response.status = 200;
  context.response.headers.set("Content-Type", "application/json");
  context.response.body = books;
  return context;
};

export const getBook = (context: RouterContext) => {
  const { id } = context.params;
  const book = books.find((book: Book) => book.id === id);
  if (book) {
    context.response.status = 200;
    context.response.headers.set("Content-Type", "application/json");
    context.response.body = book;
  } else {
    context.response.status = 404;
    context.response.body = "No book with that ID";
  }
  return context;
};

export const createBook = async (context: RouterContext) => {
  const { title, author, pages } = await context.request.body().value;
  const id = v4.generate();
  // validate data & types
  const book: Book = { id, title, author, pages };
  books.push(book);
  context.response.status = 201;
  context.response.headers.set("Content-Type", "application/json");
  context.response.body = book;
  return context;
};

export const deleteBook = (context: RouterContext) => {
  const { id } = context.params;
  const book = books.find((book: Book) => book.id === id);
  if (book) {
    books = books.filter((book: Book) => book.id !== id);
    context.response.status = 200;
    context.response.headers.set("Content-Type", "application/json");
    context.response.body = book;
  } else {
    context.response.status = 404;
    context.response.body = "No book with that ID";
  }
  return context;
};
