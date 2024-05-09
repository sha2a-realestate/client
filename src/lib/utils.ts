import { tokenExpiryDateInSeconds } from '@/constants/jwt';
import bcrypt from 'bcryptjs';
import { clsx, type ClassValue } from 'clsx';
import * as jose from 'jose';
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

export const comparePasswords = async (password: string, hashedPassword: string) => {
  return await bcrypt.compare(password, hashedPassword);
};

export async function generateToken(payload: Object): Promise<string> {
  const iat = Math.floor(Date.now() / 1000);
  const exp = iat + tokenExpiryDateInSeconds;

  return new jose.SignJWT({ ...payload })
    .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
    .setExpirationTime(exp)
    .setIssuedAt(iat)
    .setNotBefore(iat)
    .sign(new TextEncoder().encode(process.env.JWT_SECRET));
}

export async function verifyToken(token: string): Promise<any> {
  const { payload } = await jose.jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET));
  return payload;
}

export async function decryptToken(token: string): Promise<any> {
  try {
    const { payload } = await jose.jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET), {
      algorithms: ['HS256']
    });

    return payload;
  } catch (error) {
    console.error('Token verification failed:', error);
    throw new Error('Token verification failed');
  }
}

export const formatAmount = (amount: number, getLocale: string, getCurrency: string) => {
  const locale = getLocale;
  const currency = getCurrency;

  const formats = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    maximumFractionDigits: 2
  });

  return formats.format(amount);
};
