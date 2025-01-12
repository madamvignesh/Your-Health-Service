import styled from "styled-components";

export const CheckupContainer = styled.div`
  background-color: #f0f8ff;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  padding: 20px;
  width: 90%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  h1 {
    font-size: 26px;
    font-weight: bold;
    color: #007bff;
  }

  a {
    font-size: 16px;
    color: #007bff;
    font-weight: bold;
    text-decoration: none;

    &:hover {
      color: #0056b3;
    }
  }
`;

export const CategoryHolder = styled.ul`
  display: flex;
  overflow-x: auto;
  padding: 10px 0;
  list-style: none;
  gap: 10px;
  margin-bottom: 20px;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #007bff;
    border-radius: 4px;
  }
`;

export const Category = styled.li`
  background-color: ${(props) => (props.highlight ? "#007bff" : "#ffffff")};
  color: ${(props) => (props.highlight ? "#ffffff" : "#000000")};
  font-weight: ${(props) => (props.highlight ? "bold" : "normal")};
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 120px;
  max-width: 150px;
  height: 40px;
  border: 1px solid #007bff;
  border-radius: 8px;
  transition: background-color 0.3s ease, color 0.3s ease;

  button {
    background-color: transparent;
    border: none;
    color: inherit;
    cursor: pointer;
  }
`;

export const PackagesSlider = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  margin-top: 10px;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #007bff;
    border-radius: 4px;
  }
`;

export const Package = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  min-width: 280px;
  max-width: 400px;
  flex-shrink: 0;
  text-align: start;

    @media(max-width: 768px){
      width: 500px;
    }
`;

export const SponsoredContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
`;

export const Sponsored = styled.div`
  background-color: #f44336;
  color: #ffffff;
  padding: 5px 10px;
  border-top-right-radius: 12px;
  border-bottom-left-radius: 12px;
  font-size: 12px;
  font-weight: bold;
`;

export const PackageDetails = styled.div`
  font-family: "Segoe UI", sans-serif;
  padding: 12px;

  h2 {
    color: #3611d7;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .packageDesci {
    font-size: 14px;
    color: #9644e3;
    margin-bottom: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }
`;

export const PackageData = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  grid-template-columns: repeat(2, minmax(200px, 1fr));
  margin-bottom: 15px;
`;

export const Card = styled.div`
  background-color: #f9f9f9;
  padding: 10px;
  padding-top: 0px;
  border-radius: 8px;
  width: calc(45% - 10px);

  h3 {
    color: #3611d7;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  ul {
    list-style-type: none;
    font-size: 12px;
    color: #555;
  }
  .cardDesci{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }

  @media (max-width: 768px){
    width: calc(95% - 10px);
  }
`;

export const PackageRate = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  h2 {
    color: #f44336;
    font-size: 24px;
    font-weight: bold;
  }
`;

export const RateContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  justify-content: flex-start;
  gap: 10px;
`

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  button {
    background-color: #007bff;
    color: #ffffff;
    font-size: 18px;
    font-weight: bold;
    border: none;
    padding: 5px 10px;
    border-radius: 6px;
    transition: background-color 0.3s ease;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }

  p {
    font-size: 16px;
    font-weight: bold;
    color: #333;
  }
`
export const MainPrice = styled.h2`
  color: #19e7d1 !important;
  text-decoration: line-through;
`
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
