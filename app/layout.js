import { Inter } from "next/font/google";
import { Dosis } from "next/font/google"; // Import Dosis
import "./globals.css";
import { ThemeProvider } from '@/contexts/ThemeContext';

const inter = Inter({ subsets: ["latin"] });
const dosis = Dosis({ subsets: ["latin"] }); // Initialize Dosis

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className="fira-code-font"> */}
      <body className={dosis.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
