import express  from "express";
import BookController from "../controllers/bookControllers.js";

const routes = express.Router();

routes.get('/books', BookController.listBooks);
routes.get('/books/search', BookController.getBookByEditor);
routes.get('/books/:id', BookController.getBookById);
routes.post('/books', BookController.insertBook);
routes.put('/books/:id', BookController.updateBook);
routes.delete('/books/:id', BookController.deleteBook);

export default routes;