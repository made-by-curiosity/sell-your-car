import styled from '@emotion/styled';

export const Background = styled.div`
  height: 100vh;

  background: linear-gradient(170deg, #040404 3.66%, rgba(4, 4, 4, 0) 19.15%),
    linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
    url(${props => props.photo});

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
