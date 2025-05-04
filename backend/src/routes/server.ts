import express from 'express';

const serverRouter = express.Router();

serverRouter.get('/', (req, res) => {
    res.send('Server is running');
});

export default serverRouter;