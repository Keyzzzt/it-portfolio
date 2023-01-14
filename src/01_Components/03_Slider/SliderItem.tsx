import React from 'react'
import s from './slider.module.scss'

export type SliderItemProps = {
    imageSrc: string
    imageAlt: string
    isNew?: boolean
}

export const SliderItem = ({imageSrc, imageAlt, isNew}: SliderItemProps) => {
    return (
        <li className={s.sliderItem}>
            {isNew && <div className={s.new}>new</div>}
            <img src={imageSrc} alt={imageAlt} className={s.sliderImage} draggable={false}/>

        </li>
    )
}
