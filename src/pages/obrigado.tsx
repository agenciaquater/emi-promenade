import styles from '../styles/obrigado.module.scss';

export default function Obrigado() {
    return (
        <div className={styles.container}>
            <img src="/images/emi-logo-gray.webp" alt="emiempreendimentos" />
            <h1>Obrigado!</h1>
            <h2>Seus dados foram enviados com sucesso!</h2>
            <h4>Nossa equipe entrará em contato com você para trazer mais informaçoes!</h4>
            <a href="/">Clique aqui para retornar à página anterior.</a>
        </div>        
    )
}