import styles from './responsiveArrows.module.scss'

import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'

interface ResponsiveArrowsProps {
    scrollPrev: () => void;
    scrollNext: () => void;
}

export function ResponsiveArrows({ scrollPrev, scrollNext }: ResponsiveArrowsProps){
    return (
        <div className={styles.container}>
            <AiOutlineLeft color="#2C2C2C" size={30} onClick={scrollPrev}/>
            <AiOutlineRight color="#2C2C2C" size={30} onClick={scrollNext}/>
        </div>
    )
}