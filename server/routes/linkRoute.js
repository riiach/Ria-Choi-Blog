import { getLinkPreview } from 'link-preview-js';
import express from 'express';

const router = express.Router();

router.get('/api/link-preview', async (req, res) => {
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

export default router;