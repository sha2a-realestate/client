import { tokenExpiryDateInSeconds } from '@/constants/jwt';
import { decryptToken } from '@/lib/utils';
import { cookies } from 'next/headers';

export const getSession = async () => {
  const session = cookies().get('session')?.value;
  if (!session) return null;
  return await decryptToken(session);
};

export const setSession = (token: string) => {
  cookies().set('session', token, { maxAge: tokenExpiryDateInSeconds, httpOnly: true });
};
