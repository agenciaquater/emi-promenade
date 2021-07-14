import { BlueprintCarousel } from '../Carousel/blueprintCarousel'
import { blueprintImages } from '../Carousel/blueprintImages'

import styles from './styles.module.scss'

export function PlantaBaixa() {
    return (
        <div className={styles.container} id="blueprints">
            <h1>PLANTA BAIXA</h1>
            <BlueprintCarousel/>
        </div>
    )
}