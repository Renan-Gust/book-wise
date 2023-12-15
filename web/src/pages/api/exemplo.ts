// import NextCors from 'nextjs-cors';
import { api } from '@/lib/axios';
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const response = await api.get('/user/auth/google', {
            cache: false, // Desativa o cache
        });
    
        // Agora a resposta não será 304, e os dados devem ser retornados no corpo da resposta
        console.log(response.data);
    
        // Restante da lógica da rota
        res.json({ message: response.data });
    } catch (error) {
        console.error('Erro na requisição:', error);
        res.status(500).json({ error: 'Erro na requisição' });
    }
}