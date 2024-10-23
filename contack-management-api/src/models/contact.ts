// src/models/contact.ts
import prisma from '../utils/db';
import { Prisma } from '@prisma/client';

// Create a new contact
export const createContact = async (data: Prisma.ContactCreateInput) => {
  return await prisma.contact.create({ data });
};

// Retrieve all contacts with optional filtering, sorting, and pagination
export const getContacts = async (filter: any = {}) => {
  const { name, email, timezone, sortBy = 'createdAt', order = 'asc' } = filter;

  return await prisma.contact.findMany({
    where: {
      ...(name && { name: { contains: name, mode: 'insensitive' } }),
      ...(email && { email: { contains: email, mode: 'insensitive' } }),
      ...(timezone && { timezone }),
    },
    orderBy: { [sortBy]: order },
  });
};

// Get a contact by ID
export const getContactById = async (id: number) => {
  return await prisma.contact.findUnique({ where: { id } });
};

// Update a contact by ID
export const updateContact = async (id: number, data: Prisma.ContactUpdateInput) => {
  return await prisma.contact.update({
    where: { id },
    data,
  });
};

// Soft delete a contact (mark deletedAt)
export const deleteContact = async (id: number) => {
  return await prisma.contact.update({
    where: { id },
    data: { deletedAt: new Date() },
  });
};

// Batch add or update multiple contacts
export const batchUpsertContacts = async (contacts: Prisma.ContactCreateInput[]) => {
  const operations = contacts.map(contact =>
    prisma.contact.upsert({
      where: { email: contact.email },
      update: contact,
      create: contact,
    })
  );

  return await prisma.$transaction(operations);
};
