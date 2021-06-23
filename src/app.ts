import express from 'express';
import morgan from 'morgan';
import path from 'path';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from './swagger.json';

import indexRoutes from './routes/index';
import accessLogStream from './middlewares/logger/index';

import { json } from 'body-parser';

const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(cors({ credentials: true, origin: true }));
app.use(morgan('combined', { stream: accessLogStream }));
app.use(json());

// Routes
app.use('/api', indexRoutes);

// This folder will be used to store public files
app.use('/uploads', express.static(path.resolve('uploads')));
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default app;
