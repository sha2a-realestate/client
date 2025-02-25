import { UserAuthCredentials } from '@/types';
import axios from 'axios';

export async function userLogin(body: UserAuthCredentials) {
  try {
    const result = await axios.post('/api/login', body);
    const { data } = result;
    return data;
  } catch (error: any) {
    return error.response.data;
  }
}
