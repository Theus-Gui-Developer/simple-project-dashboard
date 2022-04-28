import styled from "styled-components";

const NavbarMenu = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  background: #615df9;

  @media (max-width: 320px) {
    padding: 0 1%;
  }
  @media (max-width: 375px) {
    padding: 0 5%;
  }
  @media (max-width: 768px) {
    padding: 0 5%;
  }
  @media (max-width: 1024px) {
    padding: 0 3%;
  }
`;
//Icone do menu
const IconMenu = styled.span`
  width: 40px;
  height: 40px;
  display: block;
  position: relative;
  &:before {
    content: "";
    height: 6px;
    width: 40px;
    border-radius: 8px;
    background: #fff;
    display: block;
    position: absolute;
    top: 4px;
    left: 0;
    box-shadow: 0 12px 0 #fff, 0 24px 0 #fff;
    -webkit-box-shadow: 0 12px 0 #fff, 0 24px 0 #fff;
    -moz-box-shadow: 0 12px 0 #fff, 0 24px 0 #fff;
  }
`;

const ProfileNavbarContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  position: relative;
  cursor: pointer;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;

const ContentLogout = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  position: absolute;
  border: none;
  width: 150px;
  height: 60px;
  background: #fff;

  bottom: -65px;
  right: 15px;
  border-radius: 5px;

  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  &:hover {
    background: #f5f5f5;
  }
`;

const ContentLogoutText = styled.span`
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-family: "Fredoka One", Poppins, sans-serif;
  font-size: 1.8rem;
  font-weight: bold;
  line-height: 10px;
  color: #615df9;
  font-weight: bold;
  background-color: #fff;
  padding: 0.5rem;
  border-radius: 50%;
`;

const TextProfile = styled.span`
  color: #fff;
  font-size: 1.2rem;
  margin-right: 1rem;
`;

const Logo = styled.h1`
  font-size: 1.9rem;
  font-family: "Signika Negative", sans-serif;
  color: #fff;

  @media (max-width: 320px) {
    font-size: 1.2rem;
  }
`;

export {
  NavbarMenu,
  IconMenu,
  ProfileNavbarContent,
  TextProfile,
  ContentLogout,
  ContentLogoutText,
  Logo,
};
