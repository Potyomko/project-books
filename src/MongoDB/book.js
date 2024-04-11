const mongoose = require('mongoose');

// Визначення схеми для книги
const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    pages: { type: Number, required: true },
    // Додаткові поля, які ви хочете включити
});

// Створення моделі Book з використанням визначеної схеми
const Book = mongoose.model('book', bookSchema);

module.exports = Book; // Експортуємо модель для використання у вашому API