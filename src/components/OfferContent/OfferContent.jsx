import {
  ContentWrapper,
  OfferItem,
  OfferText,
  OfferTitle,
  OffersList,
  SectionText,
  SectionTitle,
} from './OfferContent.styled';

export const OfferContent = () => {
  return (
    <ContentWrapper>
      <SectionTitle>Drive Superior</SectionTitle>
      <SectionText>
        We offer a hassle free car rental service. Book your car online and we
        deliver it to your doorstep.
      </SectionText>
      <OffersList>
        <OfferItem>
          <OfferTitle>FREE DELIVERY</OfferTitle>
          <OfferText>
            We deliver the car to any city in Ukraine, free of charge.
          </OfferText>
        </OfferItem>
        <OfferItem>
          <OfferTitle>ONLINE BOOKING</OfferTitle>
          <OfferText>You can book directly online or via whatsapp</OfferText>
        </OfferItem>
        <OfferItem>
          <OfferTitle>HUGE FLEET</OfferTitle>
          <OfferText>We have more than 100+ cars to choose from</OfferText>
        </OfferItem>
      </OffersList>
    </ContentWrapper>
  );
};
