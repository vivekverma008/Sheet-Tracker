import { Inter } from 'next/font/google'
import '@/app/globals.css'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  return (
    <>
    
    {children}
    </>
  )
}
