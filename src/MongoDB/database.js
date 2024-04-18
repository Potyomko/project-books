const express = require('express');
const mongoose = require('mongoose');
const Book = require('./book');
const app = express();
const { config } = require("dotenv");
const UserData = require('./userData');

// Завантаження конфігурації з файлу .env
config();

// Підключення до MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB', err));

// Дозволяє express розуміти тіло запиту у форматі JSON
app.use(express.json());

// Маршрут для отримання всіх книг
app.get('/api/books/books', async(req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

// Маршрут для створення нової книги
app.post('/api/books/userData', async(req, res) => {
    try {
        const { userName, userEmail, userPassword, } = req.body;
        const userData = new UserData({ userName, userEmail, userPassword, });
        await userData.save(); // Викликаємо метод save() на об'єкті userData, а не на класі Book
        res.status(201).json(userData);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});
// Додайте інші маршрути для оновлення, видалення тощо

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));