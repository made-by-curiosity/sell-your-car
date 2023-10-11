import { Background } from './PhotoBg.styled';

import { generateRandomNumber } from 'utils/generateRandomNumber';

import bg_car_1 from 'assets/img/bg_img/bg_car_1.jpg';
import bg_car_4 from 'assets/img/bg_img/bg_car_4.jpg';
import bg_car_6 from 'assets/img/bg_img/bg_car_6.jpg';

import bg_car_2 from 'assets/img/bg_img/bg_car_2.jpg';
import bg_car_7 from 'assets/img/bg_img/bg_car_7.jpg';
import bg_car_8 from 'assets/img/bg_img/bg_car_8.jpg';

const bg_hero_photos = [bg_car_1, bg_car_4, bg_car_6];
const bg_section_photos = [bg_car_2, bg_car_7, bg_car_8];

export const PhotoBg = ({ children, type }) => {
  const photoIdx = generateRandomNumber(0, 2);

  const photosToSet = type === 'hero' ? bg_hero_photos : bg_section_photos;

  return <Background photo={photosToSet[photoIdx]}>{children}</Background>;
};
