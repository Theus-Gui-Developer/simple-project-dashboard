import { user } from "../../services/api";
import {
  NavbarMenu,
  ProfileNavbarContent,
  TextProfile,
  ContentLogoutText,
  Logo,
} from "./styles";

// eslint-disable-next-line import/no-anonymous-default-export
export default (): JSX.Element => {
  const primeiraLetra = (text: string): string => {
    return text.slice(0, 1);
  };

  return (
    <>
      <NavbarMenu>
        <Logo>LOGO</Logo>
        <ProfileNavbarContent>
          <TextProfile>{user.name}</TextProfile>
          {user.avatar.length > 0 ? (
            <img src={user.avatar} alt="avatar" />
          ) : (
            <ContentLogoutText>{primeiraLetra(user.name)}</ContentLogoutText>
          )}
        </ProfileNavbarContent>
      </NavbarMenu>
    </>
  );
};
