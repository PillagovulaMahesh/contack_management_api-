
// src/models/user.ts
import prisma from '../utils/db';
import { Prisma } from '@prisma/client';
import bcrypt from 'bcrypt';

// Create a new user with hashed password
export const createUser = async (data: Prisma.UserCreateInput) => {
  const hashedPassword = await bcrypt.hash(data.password, 10);
  return await prisma.user.create({
    data: { ...data, password: hashedPassword },
  });
};

// Find a user by email
export const findUserByEmail = async (email: string) => {
  return await prisma.user.findUnique({ where: { email } });
};

// Verify user's password
export const verifyPassword = async (inputPassword: string, storedHash: string) => {
  return await bcrypt.compare(inputPassword, storedHash);
};

// Update user verification status
export const verifyUser = async (userId: number) => {
  return await prisma.user.update({
    where: { id: userId },
    data: { isVerified: true },
  });
};

// Reset user password
export const resetPassword = async (userId: number, newPassword: string) => {
  const hashedPassword = await bcrypt.hash(newPassword, 10);
  return await prisma.user.update({
    where: { id: userId },
    data: { password: hashedPassword },
  });
};
