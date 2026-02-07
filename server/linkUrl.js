import express from 'express';
import { getLinkPreview } from 'link-preview-js';
import cors from 'cors';

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

app.get('/api/link-preview', async (req, res) => {
    const { url } = req.query;

    if (!url) return res.status(400).json({ error: 'URL required' });

    try {
        const preview = await getLinkPreview(url, {
            imagesPropertyType: 'og',
            timeout: 5000,
        });

        res.json(preview);
    } catch (err) {
        console.error('Link preview error:', err);
        res.status(500).json({
            error: 'Failed to fetch preview',
            message: err.message,
        });
    }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
