import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import * as gtag from '../../utils/gtag'

import styles from './styles.module.scss';

const generateLeadEvent = {
    action: 'generate_lead_promenade',
    category: 'engagement',
    label: 'Submissão de dados pessoais no formulário',
    value: 1
}

interface FormDataProps {
    name: string;
    email: string;
    phone: string;
}

const schema = yup.object().shape({
    name: yup.string().required('*Informe seu nome para poder continuar'),
    phone: yup.string().required('*Informe seu número de telefone para poder conitnuar'),
    email: yup.string().required('*Informe seu E-mail para poder continuar').email('O E-mail informado é inválido')
})

export function MainForm(){
    const {register, handleSubmit, formState: {errors}, reset} = useForm({
        resolver: yupResolver(schema)
    })

    const APIKEY = process.env.NEXT_PUBLIC_SENDGRID_API_KEY

    async function onSubmit(data: FormDataProps) {
        console.log(APIKEY)
        
        const response = await fetch('/api/mail', {
            method: 'POST',
            body: JSON.stringify(data)
        });

        if(response.status == 200) {
            if (process.env.NODE_ENV === 'production') {
                gtag.event(generateLeadEvent)
            }

            reset()
            alert('Sua solicitação foi enviada! Nossa equipe entrará em contato com você!')
        }
        else{
            reset()
            alert('Falha na solicitação!')
        }
    }

    return (
       <div className={styles.container}>
            <h1>Deseja saber mais sobre os apartamentos disponíveis?  Preencha com seus dados abaixo e entraremos em contato.</h1>
       
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Nome</label>
                <input
                  type="text"
                  id="name" 
                  { ...register('name') }/>
                <p>{errors.name?.message}</p>

                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email" 
                  { ...register('email') }/>
                <p>{errors.email?.message}</p>

                <label htmlFor="phone">Telefone</label>
                <input
                  type="text"
                  id="phone" 
                  { ...register('phone') }/>
                <p>{errors.phone?.message}</p>

                <button type="submit">
                    AGENDE SUA VISITA
                </button>
            </form>
       </div>
    )
}