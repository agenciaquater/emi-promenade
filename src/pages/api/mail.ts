import mail from '@sendgrid/mail'
import { NextApiRequest, NextApiResponse  } from 'next';

try{
  mail.setApiKey(`${process.env.NEXT_PUBLIC_SENDGRID_API_KEY}`);
} catch(err){
  console.log('pedrao')
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try{
      const body = JSON.parse(req.body)

      const msg = {
          to: 'pedro@quater.rs',
          from: 'noreply@emiempreendimentos.com.br',
          subject: `teste promenade`,
          html: `<h1>pedaroo</h1>`,
        };
      
      await mail.send(msg)
        .then(() => {
          return res.status(200).json({ status: 'Ok' })
        })
        .catch(err => {
          console.log(err.message)
          return res.status(400).json({ status: 'Bad request' })
        })
    }
    catch(err){
      console.log(err.message)
      return res.status(500).json({ status: 'Internal server error' })
    }
}