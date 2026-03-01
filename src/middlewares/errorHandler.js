const errorHandler = (err, req, res, next) => {
    res.status(500).json({
        success: false,
        message: "Internal Server Error. Please try again later."
    });
}

module.exports = {
    errorHandler
}