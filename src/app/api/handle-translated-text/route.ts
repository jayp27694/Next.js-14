import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const data = await new Response(req.body).json()
      console.log('Received data:', data);
      return NextResponse.json(data, { status: 200 });
     ;
    } catch (error) {
      console.error('Error processing data:', error);
      return NextResponse.json({ error: 'Internal Server Error' }, { status: 200 });      
    }
  } else {    
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
