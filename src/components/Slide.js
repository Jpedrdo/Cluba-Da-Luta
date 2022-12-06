import React from 'react';
import Carousel from 'react-material-ui-carousel';
import SlideItem from './SlideItem';
import { platform1, platform2, platform3 } from '../imgs';

const Slide = () => {
  const items = [
    {
      name: '#1',
      description: 'first',
      img: platform1
    },
    {
      name: '#2',
      description: 'second',
      img: platform2
    },
    {
      name: '#3',
      description: 'third',
      img: platform3
    }
  ];

  return (
    <Carousel
      activeIndicatorIconButtonProps={{
        style: {
          color: '#97d844'
        }
      }}
      indicatorIconButtonProps={{
        style: {
          marginRight: '20px'
        }
      }}
      animation="slide"
      duration={230}
    >
      {items.map(({ img }, i) => (
        <SlideItem key={i} img={img} />
      ))}
    </Carousel>
  );
};

export default Slide;
