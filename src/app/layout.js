import Navbar from '@/components/Navbar'
import './globals.css'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Image Gallery',
  metadataBase: new URL('https://acme.com'),
  description: 'Learn NextJS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav><Navbar/></nav>
        <main>{children}</main>
        <footer>
          <Footer/>
        </footer>
      </body>
    </html>
  )
}
