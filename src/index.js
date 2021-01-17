import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import reg from './routes/reg.routes.js';
import login from './routes/login.routes.js';
import verify from './routes/verify.routes.js';

dotenv.config();
const app = express();

mongoose
  .connect(process.env.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`connect has started...`));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', reg);
app.use('/api', login);
app.use('/api', verify);

app.listen(process.env.PORT, () => {
  console.log(`server is run port: ${process.env.PORT}`);
});
