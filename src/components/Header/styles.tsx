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
    color: black;
    font-weight: bold;
    background: rgba(10, 10, 10, 0.2);
    padding: .3rem;
    border-radius: 2px;
    transition: .2s;
  }

  a:hover{
      background: rgba(10, 10, 10, 0.6);
      color: #ececec;
    }
`