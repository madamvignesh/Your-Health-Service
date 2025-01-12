import styled from "styled-components";

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #ffcccc;
`

export const Heading = styled.h1`
  font-size: 2rem;
  color: #333;
`

export const Message = styled.p`
  font-size: 1rem;
  color: #666;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #def1f1;
  border-radius: 12px;
  margin: 0px auto;
  margin-bottom: 20px;
  width: 90%;
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
`

export const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px){
    width: 80%;
  }
`

export const Image = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 15px;
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
`

export const SubTitle = styled.p`
  font-size: 14px;
  font-weight: normal;
  color: #555;
  margin-bottom: 5px;
`

export const SubText = styled.p`
  font-size: 12px;
  font-weight: normal;
  color: #777;
`