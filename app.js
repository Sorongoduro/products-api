var express = require('express');
const app = express();
const routerProducts = require('./routes/productos')

require('./db/mongoose')
let cors = require('cors')
const router = express.Router()

const port = process.env.PORT || 3001



app.use(cors())
app.use(express.json());


app.use(router)
app.use(routerProducts)
app.use(express.urlencoded({ extended: false }));


app.listen(port, () => {
    console.log('Corriendo en puerto ' + port)
})
