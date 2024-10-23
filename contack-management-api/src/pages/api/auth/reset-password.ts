// src/pages/api/auth/reset-password.ts
import { resetPassword } from '../../../models/user';
import { sendPasswordResetEmail } from '../../../utils/email'; // Email utility

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    try {
      const resetToken = await sendPasswordResetEmail(email); // Send reset email with token
      res.status(200).json({ message: 'Password reset email sent' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to send reset email' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
