module.exports = (req, res, next) => {
    const reqId = Number(req.params.id);

    if (!Number.isInteger(reqId) || reqId <= 0) {
        return res.status(400).json({ error: 'Invalid ID. ID must be a positive integer.' });
    }

    req.validatedId = reqId;
    next();
}