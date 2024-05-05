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

type Locale = 'en' | 'ar'; // Define the supported locales

interface LocalesMap {
  [key: string]: string[];
}

const localesMap: LocalesMap = {
  en: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  ar: ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩']
  // Add more locales as needed
};

export function localizeNumber(number: number, locale: Locale): string {
  const digits = localesMap[locale] || localesMap['en']; // Default to English if locale not found
  const numString = String(number);

  let localizedString = '';
  for (let char of numString) {
    const charCode = char.charCodeAt(0);
    const digit = charCode >= 48 && charCode <= 57 ? digits[charCode - 48] : char;
    localizedString += digit;
  }

  return localizedString;
}

// authUtils.js

const generateToken = (payload: string | object | Buffer) => {
  return jwt.sign(payload, process.env.JWT_SECRET as jwt.Secret, { expiresIn: '1h' });
};

const comparePasswords = async (password: string, hashedPassword: string) => {
  return await bcrypt.compare(password, hashedPassword);
};

export { comparePasswords, generateToken };
