
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "../lib/registry";
import TanstackProvider from "@/providers/TanstackProvider";
import ApolloCustomProvider from "@/providers/ApolloCustomProvider";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Github Issue Tracker",
  description: "Track issues on Github repo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TanstackProvider>
          <ApolloCustomProvider>
            <StyledComponentsRegistry>
              {children}
            </StyledComponentsRegistry>
          </ApolloCustomProvider>
        </TanstackProvider>
      </body>
    </html>
  );
}
