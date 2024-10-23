// src/pages/api/contacts/upload.ts
import multer from 'multer';
import { parseCSV } from '../../../utils/file';
import { batchUpsertContacts } from '../../../models/contact';
import { uploadDirectory } from '../../../config';

const upload = multer({ dest: uploadDirectory });

export const config = {
  api: {
    bodyParser: false, // Disable default body parser to handle file uploads
  },
};

export default async function handler(req, res) {
  upload.single('file')(req, res, async (err) => {
    if (err) return res.status(500).json({ message: 'File upload failed' });

    try {
      const contacts = await parseCSV(req.file.path);
      const result = await batchUpsertContacts(contacts);

      res.status(201).json({ message: 'Contacts uploaded successfully', result });
    } catch (error) {
      res.status(500).json({ message: 'Failed to process uploaded file' });
    }
  });
}
