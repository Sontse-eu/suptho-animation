import React, {useState} from 'react';
import {AnimatedCircles} from '../../subComponents/AnimatedCircles/AnimatedCircles.component';

const BubblesWithImage = () => {
  const [circles, setCircles] = useState([
    {
      id: 'n45rg45',
      text: 'this',
      img: require('../../assets/imgs/tImg3.jpg'),
      selected: false,
    },
    {
      id: 'erknj34',
      text: 'that',
      img: require('../../assets/imgs/tImg1.jpg'),
      selected: true,
    },
    {
      id: '45jh54j',
      text: 'that',
      img: require('../../assets/imgs/tImg2.jpg'),
      selected: true,
    },
    {
      id: 'n65n6',
      text: 'that',
      img: require('../../assets/imgs/tImg3.jpg'),
      selected: false,
    },
    {
      id: 'ferwc',
      text: 'that',
      img: require('../../assets/imgs/tImg1.jpg'),
      selected: false,
    },
    {
      id: 'eef445',
      text: 'that',
      img: require('../../assets/imgs/tImg2.jpg'),
      selected: true,
    },

    {
      id: 'rffer4',
      text: 'that',
      img: require('../../assets/imgs/tImg1.jpg'),
      selected: true,
    },
  ]);

  function onSelect(cl, selected) {
    let cles = [...circles];
    let idx = cles.findIndex(i => i.id === cl.id);
    if (idx > -1) {
      cles[idx].selected = !selected;
    }
    setCircles(cles);
  }
  return <AnimatedCircles vals={circles} onSelect={onSelect} />;
};

export default BubblesWithImage;
