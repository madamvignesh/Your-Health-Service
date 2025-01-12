// styledComponents.js
import styled from "styled-components";

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Heading = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const Message = styled.p`
  font-size: 16px;
`;

export const QuestionContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

export const QuestionTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  padding: 10px 15px;
  margin: 10px 0;
  background-color: #f1f1f1;
  border-radius: 5px;
  cursor: pointer;
`;

export const ToggleIcon = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #007bff;
  cursor: pointer;
`;

export const AnswerContainer = styled.div`
  padding: 15px;
  background-color: #ffffff;
  border-left: 3px solid #007bff;
  margin-left: 10px;
  margin-bottom: 10px;
  border-radius: 5px;

  div   {
    display: flex;
    flex-direction: column;
    align-items: center;
    ext-align: start;
  }
  img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }

  p {
    text-align: start;
    display: inline;
    font-size: 16px;
  }
`;
