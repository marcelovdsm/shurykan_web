import { HeaderDiv, HeaderNav } from "./styles"

export const Header = () => {
  return(
    <HeaderDiv>
      <img src="https://picsum.photos/75" alt="Logo Academia Shury-Kan" />
      <HeaderNav>
        <a href="/sobre">SOBRE</a>
        <a href="/galeria">GALERIA</a>
        <a href="/alunos">ALUNOS</a>
        <a href="/contato">CONTATO</a>
      </HeaderNav>
    </HeaderDiv>
  )
}