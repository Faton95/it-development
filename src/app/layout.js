import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import "../assets/__colors.scss";
import "../assets/__typography.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IT Development",
  description: "Generated by IT-park",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
