import { Link } from 'react-scroll'
import styles from './styles.module.scss'

export function AboutSection() {
    return (
        <>
            <div className={styles.aboutContainer} id="about">
                <div className={styles.content}>
                    <div className={styles.aboutText}>
                        <h1>PROMENADE</h1>
                        
                        <p>Morar no Promenade é estar mais perto. É poder chegar antes em casa, e sair mais tarde para o trabalho. É viver perto de tudo e ter mais tempo para si. Localizado na Monsenhor Veras 115, faz esquina com rua Gomes Jardim, no bairro Santana.</p>

                        <p>O prédio conta com salão de festas, espaço fitness e lavanderia condominial, todos equipados e decorados. Além disso, na parte de lazer, também há um espaço multiuso e um terraço panorâmico.
                        As medições de água e gás são individuais. Em questão de segurança, há portaria com circuito de câmeras, guarita de segurança com lavabo, e um apartamento de zelador.</p>

                        <p>Nosso compromisso é construir com foco na satisfação dos clientes, na sustentabilidade e na qualidade do produto, através da confiança em seus funcionários e parceiros, buscando melhorar continuamente seus processos. </p>

                        <h2>HÁ MAIS DE 40 ANOS VOCÊ PODE CONTAR COM A QUALIDADE DA EMI.</h2>
                    </div>
                </div>
            </div>

            <div className={styles.specsContainer}>
                <main>
                    <img src="/images/interior-img-1.png" id={styles.interior} alt="interior img" />

                    <div className={styles.list}>
                        <div className={styles.listTitle}>
                            <img src="/images/map-pointer.svg" alt="pointer" />

                            <h2>A 10 MINUTOS DA <br /> REDENÇÃO</h2>
                        </div>

                        <div className={styles.listItems}>
                            <ul>
                                <div className={styles.listSpan}>Apartamentos de 65 até 68m²</div>
                                <div className={styles.listSpan}>2 Dormitórios</div>
                                <div className={styles.listSpan}>Vagas de Garagem</div>
                                <li>Salão de Festas</li>
                                <li>Espaço Fitness</li>
                                <li>Lavanderia Condominial</li>
                                <li>Espaço Multiuso</li>
                                <li>Terraço Panorâmico</li>
                                <li>Portaria 24h</li>
                            </ul>
                        </div>
                    </div>
                </main>

                <footer>
                    <button>
                        <Link to="home" smooth={ true }>AGENDE SUA VISITA</Link>
                    </button>
                </footer>
            </div>
        </>
    )
}