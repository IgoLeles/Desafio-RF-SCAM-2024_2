const Empregado = require('../models/Empregado');

exports.getAllEmpregados = (req, res) => {
    Empregado.getAll((err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(results);
        }
    });
};

exports.getEmpregadoById = (req, res) => {
    const id = req.params.id;
    Empregado.getById(id, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(results[0]);
        }
    });
};

exports.createEmpregado = (req, res) => {
    const newEmpregado = req.body;
    Empregado.create(newEmpregado, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).json({ id: results.insertId });
        }
    });
};

exports.updateEmpregado = (req, res) => {
    const id = req.params.id;
    const updateData = req.body;
    Empregado.update(id, updateData, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(results);
        }
    });
};

exports.deleteEmpregado = (req, res) => {
    const id = req.params.id;
    Empregado.delete(id, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(results);
        }
    });
};
