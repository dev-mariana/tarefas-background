// import 'dotenv/config';
require('dotenv').config();

const express = require('express');
const app = express();
import UserController from './app/controllers/UserController';
import BullBoard from 'bull-board';
import Queue from './app/lib/Queue';

BullBoard.setQueues(Queue.queues.map(queue => queue.bull));

app.use(express.json());

app.post('/users', UserController.store);

app.use('/admin/queues', BullBoard.UI);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on the localhost:${process.env.PORT}...`);
});