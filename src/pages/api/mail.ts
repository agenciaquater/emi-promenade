import mail from '@sendgrid/mail'
import { NextApiRequest, NextApiResponse  } from 'next';

try{
  mail.setApiKey(`${process.env.NEXT_PUBLIC_SENDGRID_API_KEY}`);
} catch(err){
  console.log('pedrao')
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const body = JSON.parse(req.body)

  const msg = {
    to: 'pedro@quater.rs',
    from: 'comercial@emiempreendimentos.com.br',
    subject: `Nova solicitação de atendimento`,
    html: `<h1>${body.name} requisitou atendimento</h1>
            <srtong>${body.name} solicitou mais informações sobre o Condomínio Resedencial Promenade</srtong> <br /> 
            <p>E-mail: ${body.email}</p> <br />
            <p>Telefone: ${body.phone}</p> <br />`,
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