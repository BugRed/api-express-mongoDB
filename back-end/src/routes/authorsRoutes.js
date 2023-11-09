import express  from "express";
import AuthorController from "../controllers/authorControllers.js";

const routes = express.Router();

routes.get('/authors', AuthorController.listAuthors);
routes.get('/authors/:id', AuthorController.getAuthorById);
routes.post('/authors', AuthorController.insertAuthor);
routes.put('/authors/:id', AuthorController.updateAuthor);
routes.delete('/authors/:id', AuthorController.deleteAuthor);

export default routes;