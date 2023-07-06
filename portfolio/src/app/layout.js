import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import './globals.css'
export const metadata = {
  title: 'Fernando Fantini',
  description: 'Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: '#070927', color:'white'}} className={inter.className}>{children}</body>
    </html>
  )
}
