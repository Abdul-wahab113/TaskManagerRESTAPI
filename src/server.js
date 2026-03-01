require('dotenv').config();
const app = require('./app');
const pool = require('./config/db');



const port = process.env.PORT || 3000;

pool.connect()
    .then(() => {
        console.log('Connected to the database');
        app.listen(port,()=>{
            console.log(`Server is running on port ${port}`);
        });
    }
    ).catch((err) => {
        console.error('Error connecting to the database', err);
    }
    );