import './globals.css'
import { Nunito } from 'next/font/google'

import Navbar from './components/navbar/Navbar'

import ClientOnly from './components/ClientOnly'

import LoginModal from './components/modals/LoginModal'
import RegisterModal from './components/modals/RegisterModal'
import RentModal from './components/modals/RentModal'
import SearchModal from './components/modals/SearchModal'

import ToasterProvider from './providers/ToasterProvider'
import getCurrentUser from './actions/getCurrentUser'


const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'StayFinder - Vacation Homes Rental',
  description: 'A place to find your vacation home',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={nunito.className}>
        <ClientOnly>
          <ToasterProvider/>
          <SearchModal/>
          <RentModal/>
          <LoginModal/>
          <RegisterModal />
          <Navbar currentUser={currentUser}/>
        </ClientOnly>
        <div className="pb-20 pt-28">
          {children}
        </div>        
      </body>
    </html>
  )
}
