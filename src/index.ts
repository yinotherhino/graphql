import express from 'express'
import logger from 'morgan'
import mongoose from 'mongoose'
import {config} from 'dotenv'

const app = express();
const port = 5010;
config();

mongoose.set('strictQuery', false);
mongoose.connect(process.env.URI!);

app.use(logger("dev"));

app.listen(port, ()=> {
    console.log(`Server started on port ${port}`);
})