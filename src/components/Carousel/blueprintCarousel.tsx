import { useState, useCallback, useEffect } from 'react'
import { useEmblaCarousel } from 'embla-carousel/react'

import {AiOutlineRight, AiOutlineLeft} from 'react-icons/ai'
import {BsDash} from 'react-icons/bs'

import styles from './blueprint.module.scss'

import { blueprintImages } from './blueprintImages'

import { ActiveSlideButton } from '../ActiveSlideButton'

export function BlueprintCarousel() {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])
    
    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    const scrollTo = useCallback((i) => {
        if (emblaApi) emblaApi.scrollTo(i)
    }, [emblaApi])

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        setScrollSnaps(emblaApi.scrollSnapList());
        emblaApi.on("select", onSelect);
      }, [emblaApi, setScrollSnaps, onSelect]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <AiOutlineLeft color="#2C2C2C" size={50} onClick={scrollPrev} className={styles.arrow}/>
                    <div className={styles.content}>
                        <div className={styles.embla} ref={emblaRef}>
                            <div className={styles.embla__container}>
                                { blueprintImages.map(img => (
                                    <div key={img.image} className={styles.embla__slide}>
                                        <img src={img.image} alt="image" />
                                    </div>
                                )) }
                            </div>
                        </div>
                    </div>
                <AiOutlineRight color="#2C2C2C" size={50} onClick={scrollNext} className={styles.arrow}/>
            </div>

            <div className={styles.dashGroup}>
                <AiOutlineLeft color="#2C2C2C" size={30} onClick={scrollPrev} className={styles.responsiveArrow}/>

                { blueprintImages.map((img, i) => (
                    <ActiveSlideButton 
                        key={img.image}
                        isActive={i === selectedIndex} 
                        onClick={() => scrollTo(i)}/>
                )) }

                <AiOutlineRight color="#2C2C2C" size={30} onClick={scrollNext}  className={styles.responsiveArrow}/>
            </div>
        </div>
    )    
}