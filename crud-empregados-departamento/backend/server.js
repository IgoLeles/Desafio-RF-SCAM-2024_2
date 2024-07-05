const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const empregadoRoutes = require('./routes/empregadoRoutes');
const departamentoRoutes = require('./routes/departamentoRoutes');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/api/empregados', empregadoRoutes);
app.use('/api/departamentos', departamentoRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
