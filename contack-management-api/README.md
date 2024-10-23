#!/bin/bash

# Create README.md
cat << 'EOF' > README.md
# Contact Management System API

A RESTful API built with **Next.js** to manage user contacts. This project includes **authentication, contact management, CSV/Excel handling**, timezone conversion, and secure endpoints with JWT-based authentication.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Setup](#project-setup)
- [Environment Variables](#environment-variables)
- [Database Schema](#database-schema)
- [API Documentation](#api-documentation)
- [Deployment](#deployment)
- [License](#license)

---

## Features
- **User Authentication**: JWT-based login and registration with email verification.
- **Password Management**: Password reset with token-based authentication.
- **Contact Management**: Create, update, delete, and filter contacts.
- **Timezone Support**: UTC storage and timezone conversion on retrieval.
- **File Handling**: Upload and download CSV files for bulk contact management.
- **Security**: Password hashing with bcrypt, rate limiting, and JWT token validation.

---

## Tech Stack
- **Next.js** (API Routes)
- **PostgreSQL / MySQL** (SQL Database)
- **Prisma ORM** (Database Access)
- **JWT** (Authentication)
- **bcrypt** (Password Hashing)
- **Nodemailer** (Email Service)
- **Multer** (File Uploads)
- **Moment-Timezone** (Timezone Management)

---

## Project Setup

1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
   cd contact-management-system
