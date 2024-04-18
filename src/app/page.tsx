"use client"
import { Header } from "@/components/Header";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { About } from "@/components/About";

export default function Home() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <About />
      <GlobalStyle />
    </ThemeProvider>
  );
}
