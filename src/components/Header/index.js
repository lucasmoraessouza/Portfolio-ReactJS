import { Container, Icon, Content, TextHeader, Infos } from "./style";
import { ButtonYellow } from "../ButtonYellow";

export function Header() {
  return (
    <Container>
      <Content>
        <Icon />
        <TextHeader>
          <Infos id="home">Home</Infos>
          <Infos>About</Infos>
          <Infos>Skills</Infos>
          <Infos>Portfolio</Infos>
          <Infos>Contact</Infos>
        </TextHeader>
        <ButtonYellow text="Hire Me" />
      </Content>
    </Container>
  );
}
