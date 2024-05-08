const multer = require('multer');
const upload = multer({
  dest: 'uploads/',
  limits: { fileSize: 250000000 },
}).single('file');

exports.upload = (req, res, next) => {
  upload(req, res, (err) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    if (!req.file) {
      return res.status(400).json({ error: 'Please send file' });
    }

    next();
  });
};
