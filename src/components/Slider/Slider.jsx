import React from 'react'
import { Carousel, Container } from 'react-bootstrap'
import post1 from '../../assets/Post1.jpg'
import post2 from '../../assets/Post2.jpg'
import post3 from '../../assets/Post3.jpg'

const Slider = () => {
  return (
    <Container fluid='sm'>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className='d-block w-100 md-auto'
            src={post1}
            alt='First slide'
          />
        </Carousel.Item>

        <Carousel.Item interval={500}>
          <img className='d-block w-100' src={post2} alt='Third slide' />
        </Carousel.Item>

        <Carousel.Item>
          <img className='d-block w-100' src={post3} alt='Third slide' />
        </Carousel.Item>
      </Carousel>
    </Container>
  )
}

export default Slider
