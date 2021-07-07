import { InteriorCarousel } from '../Carousel/InteriorCarousel'
import { interiorImages } from '../Carousel/interiorimages'

import styles from './styles.module.scss'

export function InteriorShots() {
    return (
        <div className={styles.container}>
            <InteriorCarousel/>
        </div>
    )
}