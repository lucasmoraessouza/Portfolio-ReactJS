import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1.5625rem 1.875rem;
  width: 26rem;
  height: 7.5rem;
  border-radius: 0.625rem;
  background-color: #292b2e;
`;

export const Image = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
`;

export const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledNumber = styled.div`
  color: #ffb742;
  font-weight: 700;

  font-size: 2rem;
`;

export const Description = styled.div`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 1rem;
  color: #fff;
`;
