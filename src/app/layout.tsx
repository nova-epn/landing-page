import "./globals.css";

import type { Metadata } from "next";

import UIProvider from "@/providers/next-ui.provider";

import { Navbar, Footer } from "@/components/layout";

export const metadata: Metadata = {
  title: "Nova Club",
  description:
    "El Club de Innovación NOVA EPN es una comunidad de estudiantes apasionados por la innovación y la tecnología. Creemos que la innovación es la clave para resolver los problemas más urgentes del mundo, y estamos comprometidos a desarrollar la próxima generación de innovadores.",
  icons: {
    icon: {
      url: "/icon.svg",
      type: "image/svg",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="dark">
        <UIProvider>
          <Navbar />
          {children}
          <Footer />
        </UIProvider>
      </body>
    </html>
  );
}
