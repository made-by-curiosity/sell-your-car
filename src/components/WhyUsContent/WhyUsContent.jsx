import {
  ContentWrapper,
  Item,
  ItemContainer,
  ItemText,
  ItemTitle,
  List,
  SectionTitle,
} from './WhyUsContent.styled';

export const WhyUsContent = () => {
  return (
    <ContentWrapper>
      <SectionTitle>What Makes Us Different</SectionTitle>
      <List>
        <Item>
          <ItemContainer>
            <ItemTitle>FREE PICK UP AND DROP</ItemTitle>
            <ItemText>
              We offer free pick-up and drop-off for your luxury car rental
              anywhere across Ukraine.
            </ItemText>
          </ItemContainer>
        </Item>
        <Item>
          <ItemContainer>
            <ItemTitle>24/7 ROADSIDE ASSISTANCE</ItemTitle>
            <ItemText>
              Our highly experienced team is available around the clock to offer
              unparalleled assistance.
            </ItemText>
          </ItemContainer>
        </Item>
        <Item>
          <ItemContainer>
            <ItemTitle>EASY BOOKING PROCESS</ItemTitle>
            <ItemText>
              We offer hassle-free online booking with minimal documents. It is
              applicable to both UA residents and tourists.
            </ItemText>
          </ItemContainer>
        </Item>
        <Item>
          <ItemContainer>
            <ItemTitle>WELL MAINTAINED CARS</ItemTitle>
            <ItemText>
              Each car goes through a comprehensive check to ensure they are in
              mint condition.
            </ItemText>
          </ItemContainer>
        </Item>
        <Item>
          <ItemContainer>
            <ItemTitle>PROFESSIONAL STAFF</ItemTitle>
            <ItemText>
              At our Ukrainian car rental, we employ staff with extensive
              knowledge and hands-on expertise to provide you with the right
              car.
            </ItemText>
          </ItemContainer>
        </Item>
        <Item>
          <ItemContainer>
            <ItemTitle>EXCELLENT PRICES</ItemTitle>
            <ItemText>
              We guarantee competitive and affordable pricing.
            </ItemText>
          </ItemContainer>
        </Item>
      </List>
    </ContentWrapper>
  );
};
