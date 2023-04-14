import './globals.css'

export const metadata = {
  title: 'Portfolio | Aún en construcción',
  description: 'Chere3',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
