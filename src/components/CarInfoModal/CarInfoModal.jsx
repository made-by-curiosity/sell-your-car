import { Modal } from 'components/Modal/Modal';
import { MainLinkButton } from 'components/MainLinkButton/MainLinkButton';
import {
  AdditionalInfoContainer,
  AdditionalInfoWrapper,
  CarContainer,
  CarDescription,
  CarMainInfo,
  CarModel,
  Condition,
  ConditionsContainer,
  FeaturesList,
  HighlightedValue,
  InfoSectionName,
  InfoWrapper,
  MainInfoContainer,
  Photo,
  PhotoWrapper,
} from './CarInfoModal.styled';

import { handlePhotoLoadError } from 'utils/handlePhotoLoadError';
import default_img from 'assets/img/no_image_available.jpeg';

export const CarInfoModal = ({ carInfo, toggleModal }) => {
  const {
    id,
    year,
    img = default_img,
    make,
    model,
    rentalPrice,
    address,
    type,
    accessories,
    functionalities,
    description,
    fuelConsumption,
    engineSize,
    mileage,
    rentalConditions,
  } = carInfo;

  const [, city, country] = address.split(', ');
  const [minimumAge, validLicense, additionalRequirement] =
    rentalConditions.split('\n');
  const [, age] = minimumAge.split(': ');
  const transformedMileage = mileage.toLocaleString('en-US');
  const transformedPrice = `${rentalPrice.slice(1)}$`;

  return (
    <Modal toggleModal={toggleModal}>
      <CarContainer>
        <PhotoWrapper>
          <Photo src={img} alt={description} onError={handlePhotoLoadError} />
        </PhotoWrapper>

        <InfoWrapper>
          <MainInfoContainer>
            <CarMainInfo>
              {make + ' '}
              <CarModel>{model + ', '}</CarModel>
              {year}
            </CarMainInfo>
          </MainInfoContainer>
          <AdditionalInfoContainer>
            <AdditionalInfoWrapper>
              <span>{city}</span>
              <span>{country}</span>
              <span>Id: {id}</span>
              <span>Year: {year}</span>
              <span>Type: {type}</span>
            </AdditionalInfoWrapper>
            <AdditionalInfoWrapper>
              <span>Fuel Consumption: {fuelConsumption}</span>
              <span>Engine Size: {engineSize}</span>
            </AdditionalInfoWrapper>
          </AdditionalInfoContainer>
          <CarDescription>{description}</CarDescription>
        </InfoWrapper>

        <InfoWrapper>
          <InfoSectionName>Accessories and functionalities:</InfoSectionName>
          <AdditionalInfoContainer>
            <FeaturesList>
              {accessories.map(accessory => (
                <li key={accessory}>{accessory}</li>
              ))}
            </FeaturesList>
            <FeaturesList>
              {functionalities.map(functionality => (
                <li key={functionality}>{functionality}</li>
              ))}
            </FeaturesList>
          </AdditionalInfoContainer>
        </InfoWrapper>

        <InfoWrapper>
          <InfoSectionName>Rental Conditions:</InfoSectionName>
          <ConditionsContainer>
            <Condition>
              Minimum age: <HighlightedValue>{'' + age}</HighlightedValue>
            </Condition>
            <Condition>{validLicense}</Condition>
            <Condition>{additionalRequirement}</Condition>
            <Condition>
              Mileage: <HighlightedValue>{transformedMileage}</HighlightedValue>
            </Condition>
            <Condition>
              Price: <HighlightedValue>{transformedPrice}</HighlightedValue>
            </Condition>
          </ConditionsContainer>
        </InfoWrapper>

        <MainLinkButton
          text="Rental car"
          href="tel:+380730000000"
          linkStyles={{ width: '168px' }}
        />
      </CarContainer>
    </Modal>
  );
};
