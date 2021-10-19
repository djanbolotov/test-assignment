import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  overflow: hidden;
`
export const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: bold;
  margin: 0;
  max-height: 300px;
  overflow: hidden;

`;

export const Text = styled.p`
  line-height: 25px;
  color: #6c757d;
  max-height: 900px;
  overflow: hidden;
  margin:0;
`;