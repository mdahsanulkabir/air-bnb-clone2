import Modal from './components/modals/Modal'
import Navbar from './components/navbar/Navbar'
import './globals.css'
// import { Inter } from 'next/font/google'
import { Nunito } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })
const font = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Airbnb Clone',
  description: 'This is a clone project of Airbnb',
}

export default function RootLayout({children,}: { children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Modal actionLabel='Submit' isOpen title="Hello World"/>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
