import multer from 'multer';
import path from 'path';

// Configuração de armazenamento para multer
const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, '../images');
    },
    filename: (req, file, cb) => {
      const plantName = req.body.name || 'default-name'; // Garante que o nome esteja disponível
      const ext = path.extname(file.originalname);
      const tempFilename = `${plantName}${ext}`;
      cb(null, tempFilename);
    },
  }),
});

export default upload;
