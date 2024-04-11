 const express = require('express');
 const mongoose = require('mongoose');
 const Book = require('./book');
 const app = express();

 // Підключення до MongoDB
 mongoose.connect('mongodb+srv://casteOfBooks:rmshygxV$NmH6Tp@cluster0.mwrjlox.mongodb.net/books?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
     .then(() => console.log('Connected to MongoDB'))
     .catch(err => console.error('Error connecting to MongoDB', err));

 // Маршрути для отримання даних з бази даних
 app.get('/api/books/books', async(req, res) => {
     try {
         const books = await Book.find(); // Припустимо, що у вас є модель Book
         res.json(books);
     } catch (err) {
         console.error(err);
         res.status(500).json({ message: 'Server error' });
     }
 });

 // Додаткові маршрути для створення, оновлення, видалення книг і т.д.

 const PORT = process.env.PORT || 3000;
 app.listen(PORT, () => console.log(`Server started on port ${PORT}`));