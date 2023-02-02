import React from "react";
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { faker } from '@faker-js/faker'
import {AccordionItem} from "../01_Components/999_About/AccordionItem";
import {store} from "../store";
import * as hooks from "../utils/getRefValue"

const accordionItems = store.getState().accordion.accordionItems

describe('<AccordionItem>', () => {
  beforeEach(() => {
    jest.restoreAllMocks()
  })
  it('should render content', () => {
    render(<AccordionItem data={accordionItems[0]} isOpen={faker.datatype.boolean()} btnOnClick={jest.fn()} />)
    const titleEl = screen.queryByText(accordionItems[0].title)
    const contentEl = screen.queryByText(accordionItems[0].value[0])
    expect(titleEl).toBeInTheDocument()
    expect(contentEl).toBeInTheDocument()
  })
  it('should not display content if isOpen is false', () => {
    const contentScrollHeight = faker.datatype.number({ min: 1 })
    jest.spyOn(hooks, 'getRefValue').mockReturnValue({ scrollHeight: contentScrollHeight })
    render(<AccordionItem data={accordionItems[0]} isOpen={false} btnOnClick={jest.fn()} />)
    const titleEl = screen.queryByText(accordionItems[0].title)
    const listEt = titleEl?.closest('li')
    const contentEl = screen.queryByText(accordionItems[0].value[0])
    const contentContainerEl = contentEl?.parentElement?.parentElement
    expect(listEt).not.toHaveClass('active')
    expect(contentContainerEl).toHaveStyle({ height: `0px` })
  })
  it('should display content if isOpen is true', () => {
    const contentScrollHeight = faker.datatype.number({ min: 1 })
    jest.spyOn(hooks, 'getRefValue').mockReturnValue({ scrollHeight: contentScrollHeight })
    render(<AccordionItem data={accordionItems[0]} isOpen={true} btnOnClick={jest.fn()} />)
    const contentEl = screen.queryByText(accordionItems[0].value[0])
    const contentContainerEl = contentEl?.parentElement?.parentElement
    expect(contentContainerEl).toHaveStyle({ height: `${contentScrollHeight}px` })
  })

  it('should call btnOnClick on title click', () => {
    const btnOnClickMock = jest.fn()
    render(<AccordionItem data={accordionItems[0]} isOpen={faker.datatype.boolean()} btnOnClick={btnOnClickMock} />)
    const titleEl = screen.queryByText(accordionItems[0].title) as HTMLButtonElement
    fireEvent.click(titleEl)
    expect(btnOnClickMock).toBeCalledTimes(1)
  })
})
