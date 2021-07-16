import {AiOutlineRight, AiOutlineLeft} from 'react-icons/ai'
import {BsDash} from 'react-icons/bs'

import styles from './styles.module.scss'

interface ActiveSlideButtonProps {
    onClick: () => void;
    isActive: boolean;
}

export function ActiveSlideButton({onClick, isActive}: ActiveSlideButtonProps) {
    return (
        <button onClick={onClick} className={styles.btn}>
            <BsDash size={50} color={isActive ? "#626262" : "#3333"} />
        </button>
    )
}