import { Link } from 'react-scroll'
import styles from './styles.module.scss'

export function AbsoluteHeader() {
    return (
        <header className={styles.container}>
            <div className={styles.content}>
                <img src="/images/emi-logo-gray.webp" alt="EMI" />

                <div className={styles.navbar}>
                    <button><Link to="home" smooth={ true }>HOME</Link></button>
                    <button><Link to="about" smooth={ true }>SOBRE</Link></button>
                    <button><Link to="blueprints" smooth={ true }>PLANTA BAIXA</Link></button>
                    <button><Link to="location" smooth={ true }>LOCALIZAÇÃO</Link></button>
                    <button><Link to="contact-info" smooth={ true }>CONTATO</Link></button>
                </div>

                <button className={styles.headerButton}>
                    <Link to="home" smooth={ true }>SAIBA MAIS</Link>
                </button>
            </div>
        </header>
    )
}