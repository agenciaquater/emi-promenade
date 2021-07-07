import { BlueprintCarousel } from '../Carousel/blueprintCarousel'
import { blueprintImages } from '../Carousel/blueprintImages'

import styles from './styles.module.scss'

export function PlantaBaixa() {
    return (
        <div className={styles.container} id="blueprints">
            <h1>PLANTA BAIXA</h1>
            <BlueprintCarousel/>
            <p>Planta baixo dos apartamentos com final 02 (70m²) privativos</p>
        </div>
    )
}