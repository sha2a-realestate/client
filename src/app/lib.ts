import { decrypt } from '@/lib/utils';
import { cookies } from 'next/headers';

export const getSession = () => {
  const session = cookies().get('session')?.value;
  if (!session) return null;
  return decrypt(session);
};

export const setSession = (token: string) => {
  cookies().set('session', token, { maxAge: 60 * 60 * 24, httpOnly: true });
};
