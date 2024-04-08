import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Academia Shury Kan",
  description: "Criada por Marcelo Victor | https://github.com/marcelovdsm | https://www.linkedin.com/in/marcelovdsm/",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
