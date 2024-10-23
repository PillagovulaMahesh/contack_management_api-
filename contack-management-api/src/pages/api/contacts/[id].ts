// src/pages/api/contacts/[id].ts
import { getContactById, updateContact, deleteContact } from '../../../models/contact';

export default async function handler(req, res) {
  const { id } = req.query;

  try {
    switch (req.method) {
      case 'GET':
        const contact = await getContactById(Number(id));
        if (!contact) return res.status(404).json({ message: 'Contact not found' });
        res.status(200).json(contact);
        break;

      case 'PUT':
        const updatedContact = await updateContact(Number(id), req.body);
        res.status(200).json(updatedContact);
        break;

      case 'DELETE':
        await deleteContact(Number(id));
        res.status(200).json({ message: 'Contact deleted successfully' });
        break;

      default:
        res.status(405).json({ message: 'Method not allowed' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to handle request' });
  }
}
