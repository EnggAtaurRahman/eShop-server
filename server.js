const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
require('dotenv').config();
var cors = require('cors');

app.use(cors());
//database
require('./config/db');
//router    
const productRouter = require('./routes/productRouter');


app.use('/api/products', productRouter);




//basic for run server
app.get('/', (req, res) => {
    res.send('eShop API Server Running ');
});
app.listen(port, () => {
    console.log('Listening to port', port);
});
