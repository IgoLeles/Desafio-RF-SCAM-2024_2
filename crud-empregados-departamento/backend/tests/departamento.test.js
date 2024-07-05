const request = require('supertest');
const app = require('../server'); 
const db = require('../db');

beforeAll((done) => {
    db.query('DELETE FROM departamento', done);
});

describe('CRUD Departamento', () => {
    test('Deve criar um novo departamento', async () => {
        const response = await request(app)
            .post('/api/departamentos')
            .send({
                nome: 'Recursos Humanos'
            });
        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty('id');
    });

    test('Deve obter uma lista de departamentos', async () => {
        const response = await request(app).get('/api/departamentos');
        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBeGreaterThan(0);
    });

    test('Deve obter um departamento pelo ID', async () => {
        const response = await request(app).get('/api/departamentos/1');
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('nome');
    });

    test('Deve atualizar um departamento', async () => {
        const response = await request(app)
            .put('/api/departamentos/1')
            .send({
                nome: 'RH Atualizado'
            });
        expect(response.statusCode).toBe(200);
    });

    test('Deve deletar um departamento', async () => {
        const response = await request(app).delete('/api/departamentos/1');
        expect(response.statusCode).toBe(200);
    });
});
