import { HeaderDiv } from "./styles"

export const Header = () => {
  return(
    <HeaderDiv>
      <img src="https://picsum.photos/75" alt="Logo Academia Shury-Kan" />
      <nav>
        <a href="/sobre">Sobre</a>
        <a href="/galeria">Galeria</a>
        <a href="/alunos">Alunos</a>
        <a href="/contato">Contato</a>
      </nav>
    </HeaderDiv>
  )
}