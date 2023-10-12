import {
  ContentWrapper,
  PostTitle,
  PreTitle,
  SectionTitle,
  TextHighlighter,
} from './DiscountContent.styled';
import { RentLinkBtn } from 'components/RentLinkBtn/RentLinkBtn';

export const DiscountContent = () => {
  return (
    <ContentWrapper>
      <TextHighlighter>
        <PreTitle>DRIVEN BY LUXURY</PreTitle>
      </TextHighlighter>

      <SectionTitle>GET 80% OFF ALL CARS</SectionTitle>
      <PostTitle>Enjoy seasonal discounts for a limited time only.</PostTitle>
      <RentLinkBtn />
    </ContentWrapper>
  );
};
