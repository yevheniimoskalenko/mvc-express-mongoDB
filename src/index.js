import express from 'express';
import dotenv from 'dotenv';

import reg from './routes/reg.routes.js';

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', reg);

app.listen(process.env.PORT, () => {
  console.log('server is run');
});
