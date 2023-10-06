import { filterFeatures } from 'utils/carFeaturesSorting';
import {
  AdditionalInfoContainer,
  AdditionalInfoWrapper,
  CarModel,
  CardContainer,
  MainInfoContainer,
  Photo,
  PhotoWrapper,
  RentalPrice,
} from './CarCard.styled';
import { MainButton } from 'components/MainButton/MainButton';
import { IconBtn } from 'components/IconBtn/IconBtn';

import icon from 'assets/icons/normal.svg';
import car from 'assets/img/car_image.jpg';

export const CarCard = ({ carInfo }) => {
  const {
    id = 9582,
    year = 2008,
    img = car,
    make = 'Buick',
    model = 'Enclave',
    rentalPrice = '$40',
    rentalCompany = 'Luxury Car Rentals',
    address = '123 Example Street, Kiev, Ukraine',
    type = 'SUV',
    accessories = [
      'Leather seats',
      'Panoramic sunroof',
      'Premium audio system',
    ],
    functionalities = [
      'Power liftgate',
      'Remote start',
      'Blind-spot monitoring',
    ],
    description = 'The Buick Enclave is a stylish and spacious SUV known for its comfortable ride and luxurious features.',
  } = carInfo;

  // eslint-disable-next-line no-unused-vars
  const [street, city, country] = address.split(', ');

  const carFeature = filterFeatures(...accessories, ...functionalities);

  const handleClick = e => {
    console.log('added to favorite');
  };

  return (
    <CardContainer>
      <PhotoWrapper>
        <Photo src={img} alt={description} />
      </PhotoWrapper>

      <IconBtn icon={`${icon}#heart`} onClick={handleClick} />

      <MainInfoContainer>
        <span>
          {make + ' '}
          <CarModel>{model + ', '}</CarModel>
          {year}
        </span>
        <RentalPrice>{rentalPrice}</RentalPrice>
      </MainInfoContainer>
      <AdditionalInfoContainer>
        <AdditionalInfoWrapper>
          <span>{city}</span>
          <span>{country}</span>
          <span>{rentalCompany}</span>
        </AdditionalInfoWrapper>
        <AdditionalInfoWrapper>
          <span>{type}</span>
          <span>{model}</span>
          <span>{id}</span>
          <span>{carFeature}</span>
        </AdditionalInfoWrapper>
      </AdditionalInfoContainer>
      <MainButton text="Learn more" fullWidth />
    </CardContainer>
  );
};
