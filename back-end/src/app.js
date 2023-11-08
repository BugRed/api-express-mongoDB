import express from "express";

const app = express();
app.use(express.json());

let books = [
    {
        id: 1,
        title: "Lord of Rings"
    },
    {
        id: 2,
        title: "The Hobbito"
    }
];

const getAny = (id) =>{
    return books.filter(book => book.id === Number(id))[0];
};

app.get('/', (req, res) => {
    res.status(200).send("Route acess now!")
});

app.get('/books', (req, res) => {
    res.status(200).json(books);
});

app.get('/books/:id', (req, res) => {
    const book = getAny(req.params.id);
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