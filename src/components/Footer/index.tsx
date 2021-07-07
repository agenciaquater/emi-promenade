import {Link} from 'react-scroll'

import styles from './styles.module.scss';

export function Footer() {
    return (
        <div className={styles.container} id="contact-info">
            <header>
                <h1>CONTATO</h1>
            </header>

            <main>
                <div className={styles.contactInfo}>
                    <img src="/images/eim-logo-white.webp" alt="emi" />
                    
                    <div className={styles.contacts}>
                        <p>Rua Vieira de Castro, 179 Sala 205 <br />
                        Porto Alegre, RS Cep 90040-320</p>

                        <p>Tel: (51) 3332 3466</p>

                        <p>Whatsapp: (51) 99963-7844 <br />
                        Email: comercial@emiempreendimentos.com.br</p>
                    </div>

                    <div className={styles.links}>
                        <a href="/">
                            <img src="/images/instagram-icon.webp" alt="instagram" />
                        </a>
                        <a href="/">
                            <img src="/images/facebook-icon.webp" alt="facebook" />
                        </a>
                        <a href="/">
                            <img src="/images/wpp-icon.webp" alt="whatsapp" />
                        </a>
                    </div>
                </div>
                
                <div className={styles.logo}>
                    <img src="/images/promende-logo-white.webp" alt="promenade" />

                    <button>
                        <Link to="home" smooth={ true }>AGENDE SUA VISITA</Link>
                    </button>
                </div>
            </main>
        </div>
    )
}