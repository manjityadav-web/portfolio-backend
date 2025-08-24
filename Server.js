import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import adminRouter from './routes/adminRouter.js'
import {dbConnect} from './config/db.js';
import fileUpload from 'express-fileupload';

const app = express()

// middleWayer 

app.use(express.json());
app.use(fileUpload());
app.use(cors(
  {
    origin: 'https://portfolio-frontend-ljxy.vercel.app',

    credentials: true
  }
));

dbConnect();
app.use('/img',express.static('uploads'))
 app.use('/api',adminRouter)

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
});

