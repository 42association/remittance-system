import { Background } from "../components/layout/background"
import { Header } from "../components/layout/header"
import { MobileContainer } from "../components/layout/mobileContainer"
import { LogoImage } from "../components/layout/transparentImage"
import { Providers } from './global'
import "./globals.css"

export const metadata = {
  title: 'ポイント',
  description: 'ポイントの送金や履歴が確認できるアプリ',
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
            <Background>
              <LogoImage />
              {children}
              <Header />
            </Background>
          </MobileContainer>
        </Providers>
      </body>
    </html>
  )
}