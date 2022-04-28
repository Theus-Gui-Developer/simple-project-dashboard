import styled from "styled-components";

const Container = styled.div`
  /* margin: 0 5%;
  height: 100vh; */
  display: flex;
  justify-content: center;
  //reponsive
  @media (max-width: 1124px) {
    display: block;
    margin: 0 5%;
  }
  @media (max-width: 1124px) {
    display: flex;
  }

  @media (max-width: 375px) {
    display: block;
    margin: 0 10%;
  }
  @media (max-width: 320px) {
    display: block;
    margin: 0 2%;
  }
`;

const Header = styled.nav`
  display: flex;
  align-items: center;
  height: 5rem;
  //responsive
  @media (max-width: 425px) {
    height: 3rem;
  }
`;

const Title = styled.span`
  font-size: 2rem;
  //responsive
  @media (max-width: 425px) {
    font-size: 1.3rem;
  }
  //responsive
  @media (max-width: 320px) {
    font-size: 1rem;
  }
`;

const Text = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
  //responsive
  @media (max-width: 320px) {
    font-size: 0.8rem;
  }
`;

const ContainerFlex = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  max-width: 70vw;
  //responsive
  @media (max-width: 1352px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
`;

const ContainerFlexItem = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  //responsive
  @media (max-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
  }
  //responsive
  @media (max-width: 1026px) {
    grid-template-columns: repeat(2, 1fr);
  }
  //responsive
  @media (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;

  width: 300px;
  height: 450px;

  border: 1px solid #e6e6e6;
  border-radius: 5px;

  margin: 0 0.8rem 0.8rem 0;
  transition: 0.3s;
  //hover effect
  &:hover {
    transform: scale(1.03);
  }
`;

const ImageCard = styled.img`
  width: 100%;
  height: 60%;
`;

const CardTextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 40%;
  padding: 0.5rem;
`;

const CardTitle = styled.span`
  font-size: 1.5rem;
`;

const SubTitleCard = styled.span`
  font-size: 16px;
  color: #828282;

  opacity: inherit;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin: 1.5rem 0;
`;

const PaginationText = styled.span`
  display: flex;
  align-items: center;
  img {
    width: 18px;
  }
  img {
    filter: invert(100%);
  }
`;

const PagitationButton = styled.button`
  background: #9b8bff;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  padding: 0.5rem;

  cursor: pointer;
  margin: 0 0.3rem;

  &:hover {
    background: #0f33c5;
  }
`;

const PaginationNumberButton = styled.button`
  display: flex;
  align-items: center;
  background: #9b8bff;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  padding: 0.49rem 0.79rem;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  margin: 0 0.3rem;
  transition: 0.3s ease-in-out;
  &:hover {
    background: #0f33c5;
    color: white;
  }
`;

export {
  Container,
  Header,
  Title,
  Text,
  ContainerFlex,
  Card,
  ImageCard,
  CardTextContent,
  SubTitleCard,
  CardTitle,
  ContainerFlexItem,
  Pagination,
  PaginationText,
  PagitationButton,
  PaginationNumberButton,
};
