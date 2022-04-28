import React from "react";

import Modal from "../Modal";
import { api, user } from "../../services/api";

//componets styles
import {
  Header,
  Title,
  Text,
  Container,
  ContainerFlex,
  ContainerFlexItem,
  Card,
  ImageCard,
  CardTextContent,
  SubTitleCard,
  CardTitle,
  Pagination,
  PaginationText,
  PagitationButton,
  PaginationNumberButton,
} from "./styles";

//icones
import AngleLeft from "../../assets/Angle-left.svg";
import AngleRight from "../../assets/Angle-right.svg";

// eslint-disable-next-line import/no-anonymous-default-export
export default (): JSX.Element => {
  const dadosApi = api;

  //Hooks de paginação
  const [itemsPerPage] = React.useState<number>(4); //quandidade de itens por página
  const [currentPage, setCurrentPage] = React.useState<number>(0); //página atual
  const pages: number = Math.ceil(dadosApi.length / itemsPerPage); //quantidade de páginas
  const startIndex: number = currentPage * itemsPerPage; //inicio da paginação
  const endIndex: number = startIndex + itemsPerPage; //fim da paginação

  const currentItens = dadosApi.slice(startIndex, endIndex); //pega os itens da paginação
  //Função de paginação
  const nextPage = (): void => {
    currentPage < pages - 1 && setCurrentPage(currentPage + 1);
  };

  const prevPage = (): void => {
    currentPage > 0 && setCurrentPage(currentPage - 1);
  };

  const [isOpen, setOpen] = React.useState<boolean>(false);

  const handleOpenModal = (): void => {
    setOpen(true);
  };

  const NumberButtons = (e: React.MouseEvent<HTMLButtonElement>): void => {
    setCurrentPage(Number(e.currentTarget.value));
  };

  return (
    <>
      <Container>
        <ContainerFlex>
          <Header>
            <Title>Olá, {user.name}</Title>
          </Header>
          <Text>Minhas compras</Text>
          <ContainerFlexItem>
            {currentItens.map((item: any, index: any) => (
              <Card key={index} onClick={handleOpenModal}>
                <ImageCard src={item.image} />
                <CardTextContent>
                  <CardTitle>{item.title}</CardTitle>
                  <SubTitleCard>Subtitulo</SubTitleCard>
                </CardTextContent>
              </Card>
            ))}
          </ContainerFlexItem>

          {pages > 1 && (
            <Pagination>
              <PagitationButton onClick={prevPage}>
                <PaginationText>
                  <img src={AngleLeft} alt="AngleLeft" />
                </PaginationText>
              </PagitationButton>

              {Array.from(Array(pages), (item, index) => {
                return (
                  <PaginationNumberButton value={index} onClick={NumberButtons}>
                    {index + 1}
                  </PaginationNumberButton>
                );
              })}

              <PagitationButton onClick={nextPage}>
                <PaginationText>
                  <img src={AngleRight} alt="AngleRight" />
                </PaginationText>
              </PagitationButton>
            </Pagination>
          )}
        </ContainerFlex>

        <Modal isOpen={isOpen} setOpen={setOpen} />
      </Container>
    </>
  );
};
