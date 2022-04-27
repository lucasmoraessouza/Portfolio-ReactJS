import styled from "styled-components";
import Avatar from "../../assets/images/avatar.png";
import MyPerson from "../../assets/images/about-me-image.png";

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  width: 100%;
  margin-top: 6.75rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledH2 = styled.h2`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 3.125rem;
  margin-bottom: 1.5625rem;
  text-align: center;
  padding: 0px 3.125rem;
  color: #fff;
`;

export const StyledH3 = styled.h3`
  font-family: Inter, sans-serif;
  font-weight: 700;
  font-size: 2rem;
  color: #fff;
  text-align: center;
  padding: 0px 3.125rem;
  b {
    font-family: "Poppins", sans-serif;
    text-decoration: underline;
    font-weight: 700;
    font-size: 2rem;
    color: #ffb742;
  }
`;

export const StyledH4 = styled.h4`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 1.5rem;
  color: #fff;
  text-align: center;
  padding: 0px 3.125rem;
`;

export const StyledAvatar = styled.div`
  margin-top: 1.375rem;
  width: 13.125rem;
  height: 13.875rem;
  background-image: url(${Avatar});
`;
export const DivCard = styled.div`
  width: 100%;
  padding: 0rem 4.5rem;
  margin-top: 8.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const MyImage = styled.div`
  width: 38.75rem;
  height: 37.5rem;
  margin-right: 2.5rem;
  background-image: url(${MyPerson});
`;

export const DivAboutMe = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 8.5rem;
  padding: 0rem 3.1875rem;
`;

export const ContentAboutMe = styled.div`
  display: flex;
  flex-direction: column;
  width: 685px;
  height: 25rem;
`;

export const TitleAboutMe = styled.p`
  font-family: Roboto, sans-serif;
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.875rem;
  color: #fff;
`;

export const TextAboutMe = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  color: #d4d4d4;
  font-weight: 400;
  line-height: 1.875rem;
  margin-bottom: 2.1rem;
  text-align: justify;
`;
