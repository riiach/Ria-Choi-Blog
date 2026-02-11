import express from 'express'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { postsMeta } from '../data/posts.meta.js'

const router = express.Router()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const ROOT_PATH = path.resolve(__dirname, '../../')
const DIST_PATH = path.join(ROOT_PATH, 'client', 'dist')

const INDEX_HTML = fs.readFileSync(
    path.join(DIST_PATH, 'index.html'),
    'utf-8'
)

const postMap = Object.fromEntries(
    postsMeta.map(post => [post.slug, post])
)

function injectOG(html, { title, description, thumbnail, slug }) {
    return html.replace(
        '<!-- OG_PLACEHOLDER -->',
        `
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:image" content="${thumbnail}" />
    <meta property="og:url" content="https://riachoiblog.riachoi.com/${slug}" />
    `
    )
}

// Serve Vite assets
router.use('/assets', express.static(path.join(DIST_PATH, 'assets')))

// OG-enabled blog post route
router.get('/:slug', (req, res) => {
    const post = postMap[req.params.slug]

    if (!post) {
        return res.send(INDEX_HTML)
    }

    res.send(injectOG(INDEX_HTML, post))
})

// SPA fallback (Express 5 safe)
router.use((req, res) => {
    res.send(INDEX_HTML)
})

export default router
