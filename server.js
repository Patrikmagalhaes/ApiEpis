const express = require('express')
const bodyParser = require('body-parser')
const episRoutes = require('./routes/epis')
const colaboradoresRoutes = require('./routes/colaboradores')
const cors = require('cors');
const port = 3000
const app = express()



app.use(bodyParser.json())
app.use(cors());
app.use('/epis', episRoutes)
app.use('/colaboradores', colaboradoresRoutes)

app.listen(port, () => {
    console.log('Servidor rodando na porta ' + port)
})
