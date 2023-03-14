import './globals.css'
import Header from '@/components/header'



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* Add header */}
        <Header />
        {children}

      </body>
    </html>
  )
}