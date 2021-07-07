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

                <Link to="/">
                    <div className={styles.contactUs}>
                            <p>Fale conosco</p>
                            <AiOutlineWhatsApp size={20}/>
                    </div>
                </Link>

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