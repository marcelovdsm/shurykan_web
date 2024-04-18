import { Carousel } from "@mantine/carousel";
import { AboutDiv } from "./styles"
import '@mantine/carousel/styles.css';

export const About = () => {
  return(
    <AboutDiv>
      <Carousel withIndicators height="15rem">
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
    </Carousel>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis cum in sequi! Iusto nihil, quae ipsa, ex nam assumenda blanditiis quod adipisci, iure quibusdam sit similique error facilis possimus nemo?</p>
    </AboutDiv>
  )
}