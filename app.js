const express = require('express');
const data = require('./data.json')
const app = express();
const path = require('path');
const projects = data.projects;

//setting the express view engine to pug files
app.set('view engine', 'pug');

//joining the views folder to the project
app.set('views', path.join(__dirname, "views")); 

// serving the static files to the public folder that uses express
app.use('/static', express.static('public'));

/**
 * setting up routes
*/

//rendering the root route
app.get('/', (req, res) => {
    res.render('index', { projects });
});

//rendering the about route
app.get('/about', (req, res) => {
    res.render('about');
});

//dynamically rendering the projects routes
app.get('/projects/:id', (req, res) => {
    res.locals.project = projects[parseInt(req.params.id)];
    res.render('project');
});

//creating the 404 status error
app.use((req, res, next) => {
    const err = new Error('Oops!');
    err.status = 404;
    next(err);
});

/*
 * handling errors 
*/
app.use('/error', (err,req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error');
});

//starting the server
app.listen('3000', () => {
   console.log('The application is running on localhost:3000.') 
});