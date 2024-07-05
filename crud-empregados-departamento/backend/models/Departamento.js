const db = require('../db');

const Departamento = {
    getAll: (callback) => {
        db.query('SELECT * FROM departamentos', callback);
    },

    getById: (id, callback) => {
        db.query('SELECT * FROM departamentos WHERE id = ?', [id], callback);
    },

    create: (data, callback) => {
        db.query('INSERT INTO departamentos SET ?', data, callback);
    },

    update: (id, data, callback) => {
        db.query('UPDATE departamentos SET ? WHERE id = ?', [data, id], callback);
    },

    delete: (id, callback) => {
        db.query('DELETE FROM departamentos WHERE id = ?', [id], callback);
    }
};

module.exports = Departamento;
