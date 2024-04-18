const mongoose = require('mongoose');

// Визначення схеми для книги
const UserSchema = new mongoose.Schema({

    userName: {
        type: String,
        required: true,
    },
    userEmail: {
        type: String,
        required: true,
    },
    userPassword: {
        type: String,
        required: true,
    },

    // Додаткові поля, які ви хочете включити
});

// Створення моделі Book з використанням визначеної схеми
const UserData = mongoose.model('userData', UserSchema);

module.exports = UserData; // Експортуємо модель для використання у вашому API