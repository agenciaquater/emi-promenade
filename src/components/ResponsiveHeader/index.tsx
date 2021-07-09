import { useState } from 'react'
import { Link } from 'react-scroll'
import styles from './styles.module.scss'

import {AiOutlineMenu, AiOutlineWhatsApp} from 'react-icons/ai'

export function ResponsiveHeader() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className={styles.container}>
            <div className={styles.content}>
                <img src="/images/emi-logo-gray.webp" alt="EMI" />

                <a href="https://api.whatsapp.com/send?phone=5551999637844&text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20condom%C3%ADnio%20residencial%20Promenade!">
                    <div className={styles.contactUs}>
                            <p>Fale conosco</p>
                            <AiOutlineWhatsApp size={20}/>
                    </div>
                </a>

                <button 
                    className={styles.headerButton}
                    onClick={() => setIsOpen(isOpen => !isOpen)}>
                    <AiOutlineMenu size={30} color="#C4C4C4"/>
                </button>
            </div>

            <div className={ isOpen ? styles.active : styles.hidden }>
                <button><Link to="home" smooth={ true }>HOME</Link></button>
                <button><Link to="about" smooth={ true }>SOBRE</Link></button>
                <button><Link to="blueprints" smooth={ true }>PLANTA BAIXA</Link></button>
                <button><Link to="location" smooth={ true }>LOCALIZAÇÃO</Link></button>
                <button><Link to="contact-info" smooth={ true }>CONTATO</Link></button>
            </div>
        </header>
    )
}