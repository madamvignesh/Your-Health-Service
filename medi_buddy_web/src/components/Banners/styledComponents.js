import styled from "styled-components";

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #ffcccc;
`;

export const Heading = styled.h1`
  font-size: 2rem;
  color: #333;
`;

export const Message = styled.p`
  font-size: 1rem;
  color: #666;
`;

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;
  width: 90%;
  height: 450px;
  margin: 0px auto;
  margin-bottom: 15px;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;

  @media (max-width: 768px){
    height: 300px;
  }
`;

export const BannerImage = styled.img`
  width:85%;
  height: 380px;

  @media(max-width: 768px){
    height: 250px;
  }
`;

export const BannerButton = styled.a`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
`;