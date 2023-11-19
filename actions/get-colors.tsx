import axios from 'axios';
import { Color } from '@/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getColors = async (): Promise<Color[]> => {
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching colors:', error);
    throw new Error('Failed to fetch colors');
  }
};

export default getColors;