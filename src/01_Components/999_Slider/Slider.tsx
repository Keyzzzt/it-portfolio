import React, {FC, useRef, useState} from 'react'
import s from './slider.module.scss'
import {SliderItem, SliderItemProps} from './SliderItem'
import {getRefValue} from "../../utils/getRefValue";
import {useStateRef} from "../../utils/useStateRef";

export type SliderProps = {
    images: SliderItemProps[]
}

function getTouchEventData(
    e: TouchEvent | MouseEvent | React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>
) {
    return 'changedTouches' in e ? e.changedTouches[0] : e
}

// Sensitivity value. Greater value = less sensitivity
const MIN_SWIPE_REQUIRE = 35

export const Slider: FC<SliderProps> = ({images}) => {
    const containerRef = useRef<HTMLUListElement>(null)
    const containerWidthRef = useRef(0)
    const minOffsetXRef = useRef(0)
    const currentOffsetXRef = useRef(0)
    const startXRef = useRef(0)
    const [offsetX, setOffsetX, offsetXRef] = useStateRef(0)
    const [isSwiping, setIsSwiping] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)

    const indicatorOnClick = (index: number) => {
        const containerEl = getRefValue(containerRef)
        const containerWidth = containerEl.offsetWidth

        setCurrentIndex(index)
        setOffsetX(-(containerWidth * index))
    }

    // MouseEvent доступен по дефолту, поскольку это событие отдаем объекту window.
    const onTouchMove = (e: TouchEvent | MouseEvent) => {
        const currentX = getTouchEventData(e).clientX
        const diff = getRefValue(startXRef) - currentX
        let newOffsetX = getRefValue(currentOffsetXRef) - diff

        const maxOffsetX = 0
        const minOffsetX = getRefValue(minOffsetXRef)
        if (newOffsetX > maxOffsetX) {
            newOffsetX = 0
        }
        if (newOffsetX < minOffsetX) {
            newOffsetX = minOffsetX
        }
        setIsSwiping(true)
        setOffsetX(newOffsetX)
    }
    const onTouchEnd = () => {
        const currentOffsetX = getRefValue(currentOffsetXRef)
        const containerWidth = getRefValue(containerWidthRef)

        let newOffsetX = getRefValue(offsetXRef)
        const diff = currentOffsetX - newOffsetX
        if (Math.abs(diff) > MIN_SWIPE_REQUIRE) {
            // swipe right if positive
            if (diff > 0) {
                newOffsetX = Math.floor(newOffsetX / containerWidth) * containerWidth
            } else {
                // swipe left if negative
                newOffsetX = Math.ceil(newOffsetX / containerWidth) * containerWidth
            }
        } else {
            newOffsetX = Math.round(newOffsetX / containerWidth) * containerWidth
        }

        setIsSwiping(false)
        setOffsetX(newOffsetX)
        setCurrentIndex(Math.abs(newOffsetX / containerWidth))

        window.removeEventListener('touchmove', onTouchMove)
        window.removeEventListener('touchend', onTouchEnd)
        window.removeEventListener('mousemove', onTouchMove)
        window.removeEventListener('mouseup', onTouchEnd)
    }
    const onTouchStart = (e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>) => {
        currentOffsetXRef.current = getRefValue(offsetXRef)
        startXRef.current = getTouchEventData(e).clientX
        const containerEl = getRefValue(containerRef)
        const containerWidth = containerEl.offsetWidth

        containerWidthRef.current = containerWidth
        minOffsetXRef.current = containerWidth - containerEl.scrollWidth

        // Передаем событие объекту window, чтобы событие работало и за пределами слайдера
        window.addEventListener('touchmove', onTouchMove)
        window.addEventListener('touchend', onTouchEnd)
        window.addEventListener('mousemove', onTouchMove)
        window.addEventListener('mouseup', onTouchEnd)
    }

    return (
        <section className={s.sliderSection} id='slider'>
            <h2 className='sectionTitle'>Portfolio</h2>
            <div className={`container ${s.localContainer}`}>
                <div className={s.sliderContainer} onTouchStart={onTouchStart} onMouseDown={onTouchStart}>
                    <div className={s.slider}>
                        <ul
                            ref={containerRef}
                            className={`${s.sliderList} ${isSwiping ? s.swiping : ''}`}
                            style={{transform: `translate3d(${offsetX}px, 0, 0)`}}
                        >
                            {images.map((image, index) => (
                                <SliderItem key={index} {...image} />
                            ))}
                        </ul>
                        <ul className={s.sliderIndicator}>
                            {images.map((image, i) => (
                                <li
                                    onClick={() => indicatorOnClick(i)}
                                    className={`${s.sliderIndicatorItem} ${i === currentIndex ? s.active : ''}`}
                                    key={i}
                                    data-testid="indicator"
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
