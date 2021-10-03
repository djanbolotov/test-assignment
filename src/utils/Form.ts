import styled from "styled-components";

export const Input = styled.input.attrs(props => ({
    type: "text",
      size: props.size || "1em",
  }))`
    font-size: 1em;
    border: 2px solid blue;
    border-radius: 3px;
    margin: 10px;
    padding: ${props => props.size};
  `;