//import './globals.css'
// import { Inter } from 'next/font/google'
// const inter = Poppins({ subsets: ['latin'] })

import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*Header*/}
      <body className={poppins.className}>
        {/*Navbar*/}
        {children}
      </body>
      {/*Footer*/}
    </html>
  );
}
