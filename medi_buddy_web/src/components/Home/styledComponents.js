import styled from 'styled-components';

export const BannerContainer = styled.div`
  position: relative; /* Allows positioning of child elements */
  width: 80%;
  min-height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly; /* Centers both title and image */
  background: #FDE9F7;
  text-align: left;
  box-shadow: 0px 0.97561px 3.90244px rgba(0, 0, 0, 0.04), 0px 3.90244px 9.7561px rgba(0, 0, 0, 0.05);
  border-radius: 15.6098px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`;

export const BannerTitle = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 12px;
  padding-left: 16px;
  
  h1 {
    color: #e62121;
    font-size: 32px;
    font-family: Roboto;s
    line-height: 1.2;
  }

  p {
    color: #6568ef;
    font-weight: bold;
    font-family: Roboto;
    font-size: 14px;
  }
  
  @media (max-width: 768px) {
    h1 {
      font-size: 14px;
    }
    p {
      font-size: 12px;
    }
  }
`;

export const BannerImageCard = styled.div`
  width: 40%;
  margin-top: 24px;
  height: 100%;
`;

export const BannerImage = styled.img`
  transform: scaleX(-1) scale(1.4) translate(+20%, +1%);
  width: 100%;
  height: 100%;
  opacity: 1;

  @media (max-width: 768px) {
    transform: scaleX(-1) scale(2.4) translate(10%, +1%);
  }
`;
