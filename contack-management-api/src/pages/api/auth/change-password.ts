// src/pages/api/auth/change-password.ts
import { resetPassword } from '../../../models/user';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { userId, newPassword } = req.body;

    try {
      await resetPassword(Number(userId), newPassword);
      res.status(200).json({ message: 'Password changed successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to change password' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
