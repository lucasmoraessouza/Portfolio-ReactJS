import styled from "styled-components";
import IconHeader from "../../assets/icons/icon-header.png";

export const Container = styled.div`
  width: 100%;
  height: 6.25rem;
`;

export const Content = styled.div`
  width: 100%;
  padding: 1.0625rem 3.125rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 6.25rem;
`;

export const Icon = styled.div`
  width: 5.625rem;
  height: 4.0625rem;
  background-image: url(${IconHeader});
`;

export const TextHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  #home {
    color: #ffb742;
  }
`;

export const Infos = styled.li`
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  color: #fff;
  font-size: 1.125rem;
  margin: 0rem 1.5625rem;
  line-height: 1.6875rem;
  list-style: none;
  cursor: pointer;
`;
