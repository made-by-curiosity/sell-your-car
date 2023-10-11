import styled from '@emotion/styled';

export const Background = styled.div`
  height: 100vh;

  background: linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${props => props.photo});

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
