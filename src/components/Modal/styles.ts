import styled from "styled-components";

const Container = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(202 202 202 / 50%);
  z-index: ${({ isOpen }) => (isOpen ? "10" : "1")};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out;
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
`;

const ModalContent = styled.div`
  width: 600px;
  /* height: 650px; */
  max-height: 90%;
  max-width: 90%;
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  border-radius: 5px;

  background-color: white;
  box-shadow: rgba(207, 192, 192, 0.17) 5px 5px 10px 10px;

  overflow: auto;

  @media (max-width: 625px) {
    margin: 0 5%;
    height: 500px;

    h1 {
      font-size: 1.3rem;
    }
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  border: none;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 20px;

  tr {
    border: none;
    padding-bottom: 3rem;
  }
  thead {
    th {
      padding: 10px;
      text-align: start;
      color: #4a4a4a;
    }
  }

  tbody {
    tr {
      td {
        padding: 10px;
        text-align: start;
        color: #4a4a4a;
      }
    }
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    tr {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
    }
  }
`;

const TextDecoreation = styled.span`
  color: ${(props) => props.color || "#615df9"};
  font-size: 1rem;
`;

const ButtonModal = styled.button`
  color: white;
  background-color: #615df9;
  border: none;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  box-shadow: 2px 2px 5px 2px #615df9;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #0f33c5;
  }
`;

const ArrowRight = styled.span`
  height: 17px;
  width: 40px;
  margin-right: 10px;
  display: block;
  position: relative;
  overflow: hidden;
  width: 25px;

  &:before {
    content: "";
    height: 7px;
    width: 7px;
    display: block;
    border: 5px solid #615df9;
    border-radius: 2px 2px 0 2px;
    border-left-width: 0;
    border-top-width: 0;
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    position: absolute;
    top: 3px;
    right: 7px;
  }
`;

export {
  Container,
  ModalContent,
  ButtonModal,
  Table,
  TextDecoreation,
  ArrowRight,
};
