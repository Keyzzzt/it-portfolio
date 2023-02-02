import {FC, useEffect, useRef, useState} from 'react'
import s from './about.module.scss'
import {AccordionData} from './About'
import {getRefValue} from '../../utils/getRefValue'

type AccordionItemProps = {
    data: AccordionData
    isOpen: boolean
    btnOnClick: () => void
}

export const AccordionItem: FC<AccordionItemProps> = ({data, isOpen, btnOnClick}) => {
    const contentRef = useRef<HTMLDivElement>(null)
    const [height, setHeight] = useState(0)

    useEffect(() => {
        if (isOpen) {
            const contentEl = getRefValue(contentRef)
            setHeight(contentEl.scrollHeight)
        } else {
            setHeight(0)
        }
    }, [isOpen])
    return (
        <li className={`${s.accordionItem} ${isOpen ? s.active : ''}`}>
            <h2 className={s.accordionItemTitle}>
                <button onClick={btnOnClick} className={s.accordionItemBtn}>
                    {data.title}
                </button>
            </h2>
            <div className={s.accordionItemContainer} style={{height}}>
                <div ref={contentRef} className={s.accordionItemContent}>
                    {data.value.map((el, i) => {
                            return el === '' ? null : (
                                <div key={i} className={s.singleLine}>{el}</div>
                            )
                        }
                    )}
                </div>
            </div>
        </li>
    )
}
