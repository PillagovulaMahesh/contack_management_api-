// src/pages/api/contacts/download.ts
import { getContacts } from '../../../models/contact';
import { generateCSV } from '../../../utils/file';

export default async function handler(req, res) {
  try {
    const contacts = await getContacts();
    const csv = generateCSV(contacts);

    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename=contacts.csv');
    res.status(200).send(csv);
  } catch (error) {
    res.status(500).json({ message: 'Failed to generate CSV' });
  }
}
