// src/pages/api/auth/login.ts
import { findUserByEmail, verifyPassword } from '../../../models/user';
import { generateToken } from '../../../utils/jwt';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    try {
      const user = await findUserByEmail(email);
      if (!user || !(await verifyPassword(password, user.password))) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      if (!user.isVerified) {
        return res.status(403).json({ message: 'Email not verified' });
      }

      const token = generateToken({ id: user.id });
      res.status(200).json({ token });
    } catch (error) {
      res.status(500).json({ message: 'Login failed' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
