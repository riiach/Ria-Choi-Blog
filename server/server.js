import express from 'express';
import cors from 'cors';
import linkRoute from './routes/linkRoute.js';
import ogRoutes from './routes/ogRoutes.js';

const app = express();

app.use(
    cors({
        origin: [
            'http://localhost:5173', // local dev
            'https://riachoiblog.riachoi.com' // frontend url
        ],
        methods: ['GET'],
    })
);

app.use(linkRoute);

app.use(ogRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
