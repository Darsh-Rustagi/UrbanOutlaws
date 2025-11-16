
import "./globals.css";
import Navbar from "./components/navbar";

import Footer from "@/app/components/footer";



export const metadata = {
  title: "Urban Outlaws",
  description: "The urban outlaws game",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
    />
    </head>
      <body

      >
        <Navbar></Navbar>
          
        {children}

        <Footer></Footer>
        
        
      </body>
    </html>
  );
}
