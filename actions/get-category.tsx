import axios from 'axios';
import { Category } from '@/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async (id: string): Promise<Category> => {
  try {
    const response = await axios.get(`${URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching the category:', error);
    throw new Error('Failed to fetch the category');
  }
};

export default getCategory;