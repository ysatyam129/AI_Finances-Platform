import "./globals.css";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";


// Load the Inter font
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI Finance App",
  description: "One stop Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
  <body className={inter.className} suppressHydrationWarning>
        <ClerkProvider>
          <Header />
          <main className="min-h-screen bg-gray-100">
            <Toaster richColors />
            {children}
          </main>
          <footer className="bg-blue-50 py-12">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p>I am going to make my first Finance track platform real.</p>
            </div>
          </footer>
        </ClerkProvider>
      </body>
    </html>
  );
}
