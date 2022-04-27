import { Header } from "../../components/Header";
import { AboutMe } from "../../components/AboutMe";
import { Container } from "./style";
export function Home() {
  return (
    <Container>
      <Header />
      <AboutMe />
    </Container>
  );
}
