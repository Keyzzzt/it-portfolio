import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import {store} from "../store";
import {SliderItem, SliderItemProps} from "../01_Components/03_Slider/SliderItem";
import React from "react";

const images = store.getState().slider.images
describe('<SliderItem />', () => {
  const renderComponent = (props: SliderItemProps) => {
    return render(<SliderItem {...props} />)
  }
  it('should accept imageSrc & imageAlt props', () => {
    renderComponent(images[0])
    const imageEl = screen.queryByAltText(images[0].imageAlt)
    expect(imageEl).toHaveAttribute('src', images[0].imageSrc)
  })
  // it('should show badge with text "NEW"', () => {
  //   renderComponent(images[0])
  //
  // })
})
