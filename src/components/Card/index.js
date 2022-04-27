import {
  Container,
  Image,
  ContentText,
  StyledNumber,
  Description,
} from "./style";
import { ChevronRight } from "react-feather";
export function Card({ source, number, text }) {
  return (
    <Container>
      <Image>
        <img src={source} alt="icon" />
      </Image>
      <ContentText>
        <StyledNumber>{number}</StyledNumber>
        <Description>{text}</Description>
      </ContentText>
      <ChevronRight color="#FFF" width={15} />
    </Container>
  );
}
