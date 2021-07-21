import mail from '@sendgrid/mail'
import { NextApiRequest, NextApiResponse  } from 'next';

try{
  mail.setApiKey(`${process.env.NEXT_PUBLIC_SENDGRID_API_KEY}`);
} catch(err){
  console.log('pedrao')
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const msg = {
    to: 'pedro@quater.rs',
    from: 'noreply@emiempreendimentos.com.br', // Use the email address or domain you verified above
    subject: 'teste promenade',
    text: 'mensagem de teste',
    html: '<strong>pedraooooo</strong>',
  };
  try {
    await mail.send(msg);
    return res.status(200).json({"message": "ok"})
  } catch (error) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body)
      return res.status(400).json({ "message": error.response.body })
    }
  }
}