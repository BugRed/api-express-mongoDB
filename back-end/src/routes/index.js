import express from 'express';
import books from './booksRoutes.js'
import author from './authorsRoutes.js'

const routes = (app) =>{
    app.route('/').get((req, res) => res.status(200).send('Route conect successefully!'));
    app.use(express.json(), books, author);
    
};

export default routes;