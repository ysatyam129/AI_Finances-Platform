import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { sub } from "date-fns";
import Header from "../components/Header";
import { ClerkProvider } from "@clerk/nextjs";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ai Finance App",
  description: "One stop  Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
        {/* header */}
        <Header/>
        <main className="min-h-screen bg-gray-100">
        {children}
        </main>
      
        {/* footer */}
        <footer className ="bg-blue-50 py-12">
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p> I am going to Make My first Finance track platform in real</p>
          </div>
          
        </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
