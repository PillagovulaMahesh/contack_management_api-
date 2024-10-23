// src/utils/email.ts
import nodemailer from 'nodemailer';
import { EMAIL_USER, EMAIL_PASS } from '../config';

const transporter = nodemailer.createTransport({
  service: 'Gmail', // Use your preferred service
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

export const sendVerificationEmail = async (user) => {
  const mailOptions = {
    from: EMAIL_USER,
    to: user.email,
    subject: 'Verify Your Email',
    text: `Click the link to verify your email: https://your-app.com/verify-email?userId=${user.id}`,
  };

  await transporter.sendMail(mailOptions);
};

export const sendPasswordResetEmail = async (email, resetToken) => {
  const mailOptions = {
    from: EMAIL_USER,
    to: email,
    subject: 'Password Reset',
    text: `Use this token to reset your password: ${resetToken}`,
  };

  await transporter.sendMail(mailOptions);
};
