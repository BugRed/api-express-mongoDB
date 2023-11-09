import { author } from "../models/Author.js";
import book from "../models/Book.js";

class BookController {

    static async listBooks(req, res) {
        try {
            const bookList = await book.find({});
            res.status(200).json(bookList);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Request failed` })
        }

    };

    static async getBookById(req, res) {
        try {
            const id = req.params.id;
            const findBook = await book.findById(id);
            res.status(200).json(findBook);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Request failed` })
        }

    };

    static async insertBook(req, res) {
        const newBook = req.body;
        try {
            const findAuthor = await author.findById(newBook.author);
            const completeBook = {... newBook, author: {... findAuthor._doc}};
            const createBook = await book.create(completeBook);
            res.status(201).json({ message: 'Book registered successfully!', book: createBook });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Failed to register book` })
        }
    };

    static async updateBook(req, res) {
        try {
            const id = req.params.id;
            await book.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: 'Updated book' });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Update failed` })
        }

    };

    static async deleteBook(req, res) {
        try {
            const id = req.params.id;
            await book.findByIdAndDelete(id);
            res.status(200).json({ message: 'Delete book' });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Deletion failed` })
        }

    };

    static async getBookByEditor(req, res){
        const publisher  = req.query.publisher;
        try{
            const booksPerPublisher = await book.find({publisher});
            res.status(200).json(booksPerPublisher);
        }catch(error){
            res.status(500).json({ message: `${erro.message} - Request failed` });        }
    };

};



export default BookController;