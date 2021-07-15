import {AiOutlineRight, AiOutlineLeft} from 'react-icons/ai'
import {BsDot} from 'react-icons/bs'

import styles from './styles.module.scss'

interface ActiveSlideDotsProps {
    onClick: () => void;
    isActive: boolean;
}

export function ActiveSlideDots({onClick, isActive}: ActiveSlideDotsProps) {
    return (
        <button onClick={onClick} className={styles.btn}>
            <BsDot size={35} color={isActive ? "#626262" : "#E5E5E5"} />
        </button>
    )
}