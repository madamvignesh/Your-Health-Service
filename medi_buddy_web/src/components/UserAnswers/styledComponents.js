import styled from 'styled-components';

export const QuestionContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const QuestionTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`;

export const ReviewContainer =styled.div`
  text-align: start;
  width: 90%;
  background: #fff;
  padding: 15px 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.05);
`
export const ReviewHeading = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const UserDetails = styled.div``
export const RatingDetails = styled.div``

export const Rating = styled.p`
  font-size: 16px;
  font-weight: bold;
  color:rgb(39, 123, 193);
`;

export const Feedback = styled.p`
  font-size: 14px;
  color: #1996e7;
  line-height: 1.5;
  margin: 10px 0;
`;

export const UserName = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #1935e7;
`;

export const UserDate = styled.p`
  font-size: 12px;
  color: #888;
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