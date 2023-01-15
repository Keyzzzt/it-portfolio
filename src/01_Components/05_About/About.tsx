import { FC, useState } from "react"
import s from "./about.module.scss"
import { AccordionItem } from "./AccordionItem"
import globalStyles from "../../02_Styles/global.module.scss";


export type AccordionData = {
  title: string
  value: string[]
}
export type Props = {
  accordionItems: AccordionData[]
}

export const About: FC<Props> = ({ accordionItems }) => {
  const [currentIndex, setCurrentIndex] = useState(-1)
  const btnOnClick = (index: number) => {
    setCurrentIndex((prev) => (prev === index ? -1 : index))
  }
  return (
    <section id='about' className={s.about}>
        <div className={globalStyles.container + ' ' + s.container}>
            <h2 className={s.sectionTitle}>About</h2>
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