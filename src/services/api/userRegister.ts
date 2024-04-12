import { UserAuthCredentials } from '@/types';
import axios from 'axios';

export async function userRegister(body: UserAuthCredentials) {
  try {
    const result = await axios.post('/api/register', body);
    const { data } = result;
    return data;
  } catch (error: any) {
    return error.response.data;
  }
}
