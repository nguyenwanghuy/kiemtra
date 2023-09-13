import express from 'express';
import "dotenv/config";
import { connectToDatabase } from './configs/db.js';
import router from './routes/index.js';

const app = express();
const PORT = 8000;

// connect to database
connectToDatabase()
//middleware
app.use(express.json());
//routing
app.use('/api', router)

app.listen(PORT, ()=> {
    console.log(`listening on port ${PORT}`);
})
