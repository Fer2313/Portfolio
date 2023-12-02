import { Poppins } from 'next/font/google'
const inter = Poppins({ subsets: ['latin'], weight: ["300"] })
import './globals.css'
export const metadata = {
  title: 'Fernando Fantini',
  description: 'Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: '#242A42', color:'white'}} className={inter.className}>{children}</body>
    </html>
  )
}
