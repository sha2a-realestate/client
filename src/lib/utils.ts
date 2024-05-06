import bcrypt from 'bcryptjs';
import { clsx, type ClassValue } from 'clsx';
import jwt from 'jsonwebtoken';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const capitalizeFirstLetter = (string: string): string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const lowercaseFirstLetter = (string: string): string => {
  return string.charAt(0).toLowerCase() + string.slice(1);
};

export const sentenceCase = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const lowerCase = (str: string): string => {
  return str.charAt(0).toLowerCase() + str.slice(1).toLowerCase();
};

export const titleCase = (str: string): string => {
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export const generateToken = (payload: string | object | Buffer) => {
  return jwt.sign(payload, process.env.JWT_SECRET as jwt.Secret, { expiresIn: 10 });
};

export const decrypt = (token: string) => {
  return jwt.decode(token);
};

export const comparePasswords = async (password: string, hashedPassword: string) => {
  return await bcrypt.compare(password, hashedPassword);
};

export const validateToken = (token: string): Object => {
  const publicKey: any = process.env.JWT_SECRET;
  return jwt.verify(token, publicKey);
};
