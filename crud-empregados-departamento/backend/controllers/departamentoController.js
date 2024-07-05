const Departamento = require('../models/Departamento');

exports.getAllDepartamentos = (req, res) => {
    Departamento.getAll((err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(results);
        }
    });
};

exports.getDepartamentoById = (req, res) => {
    const id = req.params.id;
    Departamento.getById(id, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(results[0]);
        }
    });
};

exports.createDepartamento = (req, res) => {
    const newDepartamento = req.body;
    Departamento.create(newDepartamento, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).json({ id: results.insertId });
        }
    });
};

exports.updateDepartamento = (req, res) => {
    const id = req.params.id;
    const updateData = req.body;
    Departamento.update(id, updateData, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(results);
        }
    });
};

exports.deleteDepartamento = (req, res) => {
    const id = req.params.id;
    Departamento.delete(id, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(results);
        }
    });
};
