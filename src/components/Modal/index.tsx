import React from "react";
import {
  Container,
  ModalContent,
  ButtonModal,
  Table,
  TextDecoreation,
  ArrowRight,
} from "./styles";

type IProps = {
  isOpen: boolean;
  setOpen: Function;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ isOpen, setOpen }: IProps): JSX.Element => {
  // useRef modal
  const modalRef = React.useRef<HTMLDivElement>(null);
  // click fora do modal
  const handleClickOutside = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    if (modalRef.current === e.target) {
      setOpen(false);
    }
  };

  return (
    <>
      <Container
        isOpen={isOpen}
        ref={modalRef}
        onClick={(e) => {
          handleClickOutside(e);
        }}
      >
        <ModalContent>
          <h1>Detalhes do Pedido</h1>
          <Table>
            <thead>
              <tr>
                <th>
                  {/* color e passada como props */}
                  <TextDecoreation>Dados da Compra</TextDecoreation>
                </th>
                <th>
                  {/* color e passada como props */}
                  <TextDecoreation color={"#828890"}>
                    Dados do Cliente
                  </TextDecoreation>
                </th>
                <th>
                  {/* color e passada como props */}
                  <TextDecoreation color={"#828890"}>
                    Tarifas e comissões
                  </TextDecoreation>
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                {/* alinhamento do icóne */}
                <td style={{ display: "flex", alignItems: "center" }}>
                  <ArrowRight />
                  ID
                </td>
                <td>12345</td>
                <td>21312</td>
              </tr>
            </tbody>
          </Table>
          <ButtonModal
            onClick={() => {
              setOpen(false);
            }}
          >
            Fechar
          </ButtonModal>
        </ModalContent>
      </Container>
    </>
  );
};
