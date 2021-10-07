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
                    <img src="/images/emi-logo-white.webp" alt="emi" />
                    
                    <div className={styles.contacts}>
                        <p>Rua Vieira de Castro, 179 Sala 205 <br />
                        Porto Alegre, RS Cep 90040-320</p>

                        <p>Tel: (51) 3332 3466</p>

                        <p>Whatsapp: (51) 99963-7844 <br />
                        Email: comercial@emiempreendimentos.com.br</p>
                    </div>

                    <div className={styles.links}>
                        <a 
                            href="https://www.instagram.com/emiempreendimentos/" 
                            target="_blank">
                            <img src="/images/instagram-icon.webp" alt="instagram" />
                        </a>

                        <a
                          href="https://www.facebook.com/Emiempreendimentos/"
                          target="_blank">
                            <img src="/images/facebook-icon.webp" alt="facebook" />
                        </a>

                        <a
                          href="https://api.whatsapp.com/send?phone=5551999637844&text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20condom%C3%ADnio%20residencial%20Promenade!"
                          target="_blank">
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