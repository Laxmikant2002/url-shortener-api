const { nanoid } = require('nanoid');
const URL = require('../models/url');

async function handleGenerateShortURL(req, res) {
    const body = req.body;
    const shortId = nanoid(8);
    if (!body.url) {
        return res.status(400).json({ error: 'url is required' });
    }
    await URL.create({
        shortId: shortId,
        redirectURL: body.url,
        visitHistory: [],
    });
    return res.json({ id: shortId });
}

async function handleGetAnalytics(req, res) {
    const shortId = req.params.shortId;
    const result = await URL.findOne({ shortId });
    return res.json({
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory
    });
}

module.exports = {
    handleGenerateShortURL,
    handleGetAnalytics,
};