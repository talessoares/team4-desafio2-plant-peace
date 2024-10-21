import multer from 'multer';
import path from 'path';

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, '../images');
    },
    filename: (req, file, cb) => {
      const plantName = req.body.name || 'default-name';
      const ext = path.extname(file.originalname);
      const tempFilename = `${plantName}${ext}`;
      cb(null, tempFilename);
    },
  }),
});

export default upload;