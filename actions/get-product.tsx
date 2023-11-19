import axios from 'axios';
import { Product } from '@/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (id: string): Promise<Product> => {
  try {
    const response = await axios.get(`${URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching the products:', error);
    throw new Error('Failed to fetch the products');
  }
};

export default getProduct;