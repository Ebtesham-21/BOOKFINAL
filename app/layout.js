import Footer from '@/components/Footer'
import './globals.css'
import Header from '@/components/Header'

export const metaData = {
  title:'99Books',
  description:'99 child book site ',
}

export default function RootLayout({children}) {
  return (
    <html
    lang="en"
    
    >
      <body>
        <Header/>
        <div className='container mx-auto px-4 py-8'>
          {children}

        </div>
        <Footer/>
      </body>
    
    </html>
  )
}