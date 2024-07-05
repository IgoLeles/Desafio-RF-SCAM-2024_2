const db = require('../db');

const Empregado = {
    getAll: (callback) => {
        db.query('SELECT * FROM empregado', callback);
    },

    getById: (id, callback) => {
        db.query('SELECT * FROM empregado WHERE id = ?', [id], callback);
    },

    create: (data, callback) => {
        db.query('INSERT INTO empregado SET ?', data, callback);
    },

    update: (id, data, callback) => {
        db.query('UPDATE empregado SET ? WHERE id = ?', [data, id], callback);
    },

    delete: (id, callback) => {
        db.query('DELETE FROM empregado WHERE id = ?', [id], callback);
    }
};

module.exports = Empregado;
