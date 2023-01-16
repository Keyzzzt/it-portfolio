import React, {FC} from 'react'
import s from './slider.module.scss'

export type SliderItemProps = {
    imageSrc: string
    imageAlt: string
    isNew?: boolean
}

export const SliderItem: FC<SliderItemProps> = ({imageSrc, imageAlt, isNew}) => {
    return (
        <li className={s.sliderItem}>
            {isNew && <div className={s.new}>new</div>}
            <img src={imageSrc} alt={imageAlt} className={s.sliderImage} draggable={false}/>

        </li>
    )
}
