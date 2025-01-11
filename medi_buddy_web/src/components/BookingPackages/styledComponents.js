import styled from 'styled-components';

export const CategoriesContainer = styled.div`
  width: 90%;
  margin: 20px auto;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  color: #333;s
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(200px, 1fr));
  gap: 20px;

  @media (max-width: 768px){
    grid-template-columns: repeat(1, minmax(200px, 1fr));
  }
`;

export const CategoryCard = styled.div`
  background-color: #fff;
  border: 3px solid transparent;
  border-radius: 12px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const CategoryImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-bottom: 10px;
  border-radius: 50%;
  border: 2px solid #ccc;
`;

export const CategoryLabel = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: #555;
  text-align: center;
  margin-top: 10px;
  word-wrap: break-word;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
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