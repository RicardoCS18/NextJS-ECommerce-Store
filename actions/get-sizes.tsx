import axios from 'axios';
import { Size } from '@/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getSizes = async (): Promise<Size[]> => {
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching sizes:', error);
    throw new Error('Failed to fetch sizes');
  }
};

export default getSizes;