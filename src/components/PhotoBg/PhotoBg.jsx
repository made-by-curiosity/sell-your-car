import { Background } from './PhotoBg.styled';
import bg_car_1 from 'assets/img/bg_img/bg_car_1.jpg';
import bg_car_2 from 'assets/img/bg_img/bg_car_2.jpg';
import bg_car_3 from 'assets/img/bg_img/bg_car_3.jpg';
import bg_car_4 from 'assets/img/bg_img/bg_car_4.jpg';
import bg_car_5 from 'assets/img/bg_img/bg_car_5.jpg';
import bg_car_6 from 'assets/img/bg_img/bg_car_6.jpg';
import bg_car_7 from 'assets/img/bg_img/bg_car_7.jpg';
import bg_car_8 from 'assets/img/bg_img/bg_car_8.jpg';

export const PhotoBg = ({ children, photos }) => {
  return <Background photo={bg_car_4}>{children}</Background>;
};
