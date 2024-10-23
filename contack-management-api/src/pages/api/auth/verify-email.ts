// src/pages/api/auth/verify-email.ts
import { verifyUser } from '../../../models/user';

export default async function handler(req, res) {
  const { userId } = req.query;

  try {
    await verifyUser(Number(userId));
    res.status(200).json({ message: 'Email verified successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Verification failed' });
  }
}
