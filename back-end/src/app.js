import express from "express";
import connectionDatabase from "./config/dbConnect.js";
import book from "./models/Book.js";

const conection = await connectionDatabase();

conection.on("error", (erro) => {
    console.error("Connection error", erro);
  });
  
  conection.once("open", () => {
    console.log("Connection database sucefull");
  });

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send("Route acess now!")
});

app.get('/books', async (req, res) => {
    const bookList = await book.find({});
    res.status(200).json(bookList);
});

app.get('/books/:id', async (req, res) => {
    const newBook = await book.findById(req.params.id);
    res.status(200).send(book);
});

app.post('/books', (req, res) => {
    books.push(req.body);
    res.status(201).send('Books add sucefull')
});

app.put('/books/:id', (req, res) => {
    const modifyBook = getAny(req.params.id);
    modifyBook.title = req.body.title;
    
    res.status(200).send(books);

});

app.delete('/books/:id', (req, res) => {
    books = books.filter(book => book.id != Number(req.params.id));
    res.status(200).send('Delete item sucefull!!');
});


export default app;

