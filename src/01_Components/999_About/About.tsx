import {FC, useState} from "react"
import s from "./about.module.scss"
import {AccordionItem} from "./AccordionItem"


export type AccordionData = {
    title: string
    value: string[]
}
export type AboutProps = {
    accordionItems: AccordionData[]
}

export const About: FC<AboutProps> = ({accordionItems}) => {
    const [currentIndex, setCurrentIndex] = useState(-1)
    const btnOnClick = (index: number) => {
        setCurrentIndex((prev) => (prev === index ? -1 : index))
    }
    return (
        <section id='about' className='section'>
            <h2 className='sectionTitle'>About</h2>
            <div className={`container ${s.localContainer}`}>
                <ul className={s.accordion}>
                    {accordionItems.map((item, i) => (
                        <AccordionItem
                            data={item}
                            key={i}
                            isOpen={currentIndex === i}
                            btnOnClick={() => btnOnClick(i)}
                        />
                    ))}
                </ul>
            </div>
        </section>
    )
}
