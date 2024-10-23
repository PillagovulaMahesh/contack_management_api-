// src/pages/api/contacts/index.ts
import { createContact, getContacts, batchUpsertContacts } from '../../../models/contact';

export default async function handler(req, res) {
  try {
    switch (req.method) {
      case 'POST':
        if (Array.isArray(req.body)) {
          const result = await batchUpsertContacts(req.body);
          res.status(201).json({ message: 'Contacts processed', result });
        } else {
          const newContact = await createContact(req.body);
          res.status(201).json(newContact);
        }
        break;

      case 'GET':
        const contacts = await getContacts(req.query);
        res.status(200).json(contacts);
        break;

      default:
        res.status(405).json({ message: 'Method not allowed' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to process request' });
  }
}
