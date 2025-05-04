import express from 'express';

const orderRouter = express.Router();

// Define your routes here
orderRouter.get('/', (req, res) => {
    res.send('Get all orders');
});

orderRouter.post('/', (req, res) => {
    res.send('Create a new order');
});

orderRouter.get('/:id', (req, res) => {
    res.send(`Get order with ID: ${req.params.id}`);
});

orderRouter.put('/:id', (req, res) => {
    res.send(`Update order with ID: ${req.params.id}`);
});

orderRouter.delete('/:id', (req, res) => {
    res.send(`Delete order with ID: ${req.params.id}`);
});

export default orderRouter;