import { FC, useState } from "react"
import s from "./Accordion.module.scss"
import { AccordionItem } from "./AccordionItem"

export type AccordionData = {
  title: string
  value: string[]
}
export type Props = {
  accordionItems: AccordionData[]
}

export const Accordion: FC<Props> = ({ accordionItems }) => {
  const [currentIndex, setCurrentIndex] = useState(-1)
  const btnOnClick = (index: number) => {
    setCurrentIndex((prev) => (prev === index ? -1 : index))
  }
  return (
    <div id='about' className={s.container}>
      <h2 className={s.containerTitle}>About</h2>
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
  )
}
