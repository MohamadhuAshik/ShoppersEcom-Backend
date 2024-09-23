const imageUploader = (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${PORT}/images/${req.file.filename}`,
    });
};

module.exports = imageUploader