import styled from "styled-components";

export const MenuLink = styled.span`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  color: white;
  transition: all 0.3s ease-in;
  font-size: 1.1rem;
  &:hover {
    color: #67bc98;
  }
`;

export const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: #7b7fda;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

export const Logo = styled.span`
  padding: 1rem 0;
  color:  #67bc98;
  font-weight: 800;
  font-size: 1.7rem;
  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;