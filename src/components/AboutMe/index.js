import { Card } from "../Card";
import IconExperience from "../../assets/icons/icon-experience.png";
import IconCompleted from "../../assets/icons/icon-completed.png";
import IconClients from "../../assets/icons/icon-clients.png";
import { ButtonYellow } from "../ButtonYellow";
import { Rectangular } from "../Rectangular";
import {
  Container,
  Content,
  StyledH2,
  StyledH3,
  StyledH4,
  StyledAvatar,
  DivCard,
  MyImage,
  DivAboutMe,
  ContentAboutMe,
  TitleAboutMe,
  TextAboutMe,
} from "./style";
export function AboutMe() {
  return (
    <Container>
      <Content>
        <StyledH3>
          Hi, I am <b>Lucas de Moraes</b> 👋
        </StyledH3>
        <StyledH2>Creative designer and front-end developer</StyledH2>
        <StyledH4>
          I design and code beautifully simple things, and I love what I do.
        </StyledH4>
        <StyledAvatar />
        <DivCard>
          <Card
            source={IconExperience}
            number="5+"
            text="Years of Experience"
          />
          <Card
            source={IconCompleted}
            number="100+"
            text="Completed Projects"
          />
          <Card source={IconClients} number="50+" text="Happy Clients" />
        </DivCard>
        <DivAboutMe>
          <MyImage />
          <ContentAboutMe>
            <Rectangular text="Who I Am" />
            <TitleAboutMe>About Me</TitleAboutMe>
            <TextAboutMe>
              Hi! I’m Kartik Bansal, and I’m a designer & developer who has
              passion for building clean web applications with intuitive
              functionality. I enjoy the process of turning ideas into reality
              using creative solutions. I’m always curious about learning new
              skills, tools, and concepts. In addition to working on various
              solo full stack projects, I have worked with creative teams, which
              involves daily stand-ups and communications, source control, and
              project management.
            </TextAboutMe>
            <ButtonYellow text="Hire Me" />
          </ContentAboutMe>
        </DivAboutMe>
      </Content>
    </Container>
  );
}
