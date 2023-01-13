import { FC, useEffect, useRef, useState } from 'react'
import s from './Accordion.module.scss'
import { AccordionData } from './Accordion'
import { getRefValue } from '../../utils/getRefValue'

type Props = {
  data: AccordionData
  isOpen: boolean
  btnOnClick: () => void
}

export const AccordionItem: FC<Props> = ({ data, isOpen, btnOnClick }) => {
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
      <div className={s.accordionItemContainer} style={{ height }}>
        <div ref={contentRef} className={s.accordionItemContent}>
          {data.value.map((el: any) => {
            return el.value === '' ? null : (
              <div>
                <div>{el}</div>
              </div>
            )
          }

          )}
        </div>
      </div>
    </li>
  )
}
