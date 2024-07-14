// pages/api/products.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { page } = req.query;

  try {
    const response = await axios.get('https://api.timbu.cloud/products', {
      params: {
        organization_id: '1a62fa9710c64be48fb3cf5ef1bc13a2',
        reverse_sort: false,
        page: page,
        size: 5,
        Appid: 'F1O68P9PQESTOTU',
        Apikey: '46200433c0514fe6aafb41a24eaec2cd20240713202144420438',
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching products:', error);
    if (axios.isAxiosError(error)) {
      console.error('Axios error message:', error.message);
      console.error('Axios error code:', error.code);
      console.error('Axios error response:', error.response?.data);
    }
    res.status(500).json({ error: 'Failed to fetch products' });
  }
}
