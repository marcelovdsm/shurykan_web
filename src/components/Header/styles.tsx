import styled from "styled-components";

export const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`

export const HeaderNav = styled.nav`
  display: flex;
  gap: 1rem;
  margin-right: 3rem;

  a {
    text-decoration: none;
    letter-spacing: 0.125rem;
    color: ${props => props.theme.white};
    font-weight: bold;
    padding: .3rem;
    border-radius: 7px;
    transition: .2s;
  }

  a:hover{
      background: ${props => props.theme.white};
      color: ${props => props.theme.black};
    }
`