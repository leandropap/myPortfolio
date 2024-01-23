import { Inter } from 'next/font/google'
import './globals.css'
import Header from './Header'
import Footer from './Footer'

export const metadata = {
  title: 'myPortfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center justify-between p-24">
        <Header />

        <main> {children} </main>

        <Footer />
      </body>
    </html>
  )
}
