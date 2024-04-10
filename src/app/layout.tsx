import { Background } from "../components/layout/background"
import { Header } from "../components/layout/header"
import { MobileContainer } from "../components/layout/mobileContainer"
import { Providers } from './global'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        <Providers>
          <MobileContainer>
            <Background />
            <Header />
            {children}
          </MobileContainer>
        </Providers>
      </body>
    </html>
  )
}