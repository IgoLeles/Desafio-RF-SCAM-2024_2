const request = require('supertest');
const app = require('../server'); 
const db = require('../db');

beforeAll((done) => {
    db.query('DELETE FROM empregado', done);
    db.query('DELETE FROM departamento', done);
});

describe('CRUD Empregado', () => {
    let departamentoId;
    
    beforeAll((done) => {
        db.query('INSERT INTO departamento (nome) VALUES (?)', ['TI'], (err, result) => {
            if (err) throw err;
            departamentoId = result.insertId;
            done();
        });
    });

    test('Deve criar um novo empregado', async () => {
        const response = await request(app)
            .post('/api/empregados')
            .send({
                nome: 'João Silva',
                email: 'joao.silva@example.com',
                cargo: 'Desenvolvedor',
                departamento_id: departamentoId
            });
        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty('id');
    });

    test('Deve obter uma lista de empregados', async () => {
        const response = await request(app).get('/api/empregados');
        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBeGreaterThan(0);
    });

    test('Deve obter um empregado pelo ID', async () => {
        const response = await request(app).get('/api/empregados/1');
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('nome');
    });

    test('Deve atualizar um empregado', async () => {
        const response = await request(app)
            .put('/api/empregados/1')
            .send({
                nome: 'João Atualizado',
                email: 'joao.atualizado@example.com',
                cargo: 'Desenvolvedor Senior'
            });
        expect(response.statusCode).toBe(200);
    });

    test('Deve deletar um empregado', async () => {
        const response = await request(app).delete('/api/empregados/1');
        expect(response.statusCode).toBe(200);
    });
});
