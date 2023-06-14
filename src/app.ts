import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandlers';
import ApiError from './app/errors/ApiError';

import router from './app/routes';

const app: Application = express();
// const port = 3000;

app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//-------------- Application routes--------------------------!>
// app.use('/api/v1/users/', UserRoutes.router);
// app.use('/api/v1/academic-semester', SemesterRoutes);
app.use('/api/v1/', router);

//Testing
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
  throw new ApiError(400, 'ORe baba');
  // throw new Error('Testing Error logger')
  // next("ORe Baba Error")//error
});

//Global Error Handler
app.use(globalErrorHandler);

export default app;
