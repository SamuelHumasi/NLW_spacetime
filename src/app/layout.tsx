import './globals.css'
import { ReactNode } from 'react'
import { 
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjuree
} from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baijamjuree = BaiJamjuree({
  subsets: ['latin'],
  weight:'700',
  variable: '--font-bai-janjuree'
})

export const metadata = {
  title: 'Create Next App',
  description: 'Capsula do tempo',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baijamjuree.variable} font-sans bg-gray-900 text-gray-100`}>
        {children}
      </body>
    </html>
  )
}
