import { author } from "../models/Author.js";

class AuthorController {

    static async listAuthors(req, res) {
        try {
            const authorList = await author.find({});
            res.status(200).json(authorList);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Request failed` })
        }

    };

    static async getAuthorById(req, res) {
        try {
            const id = req.params.id;
            const findAuthor = await author.findById(id);
            res.status(200).json(findAuthor);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Request failed` })
        }

    };

    static async insertAuthor(req, res) {
        try {
            const newAuthor = await author.create(req.body);
            res.status(201).json({ message: 'Author registered successfully!', author: newAuthor });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Failed to register author` })
        }
    };

    static async updateAuthor(req, res) {
        try {
            const id = req.params.id;
            await author.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: 'Updated author' });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Update failed` })
        }

    };

    static async deleteAuthor(req, res) {
        try {
            const id = req.params.id;
            await author.findByIdAndDelete(id);
            res.status(200).json({ message: 'Delete author' });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Deletion failed` })
        }

    };

};



export default AuthorController;