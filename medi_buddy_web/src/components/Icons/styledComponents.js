// StyledComponents.js
import styled from 'styled-components';

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
export const IconContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin: 20px;
`;

export const IconItem = styled.div`
  text-align: center;
  max-width: 120px;
`;

export const IconImage = styled.img`
  width: 60px;
  height: 60px;
  margin-bottom: 10px;
`;

export const IconTitle = styled.p`
  font-size: 1rem;
  color: #333;
  margin: 0;
`;