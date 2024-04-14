import axios from 'axios';

export async function updateUserData(body: any) {
  try {
    const result = await axios.post('/api/update-user', body);
    const { data } = result;
    return data;
  } catch (error: any) {
    return error.response.data;
  }
}
