// src/pages/api/auth/register.ts
import { createUser, findUserByEmail } from '../../../models/user';
import { sendVerificationEmail } from '../../../utils/email'; // Email utility function

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    try {
      const existingUser = await findUserByEmail(email);
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }

      const newUser = await createUser({ email, password });
      await sendVerificationEmail(newUser); // Send email verification link

      res.status(201).json({ message: 'User registered. Check your email to verify.' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to register user' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
