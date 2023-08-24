import bodyParser from 'body-parser';
import express from 'express';

import eventRoutes from './routes/events.js';

const app = express();

app.use(bodyParser.json());
//new comment 
app.use(eventRoutes);

app.listen(process.env.PORT);
