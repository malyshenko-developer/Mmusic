import { Metadata } from "next";
import Head from "next/head";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { Box } from "@mui/material";
import Header from "@/components/layouts/Header";
import StoreProvider from "@/components/providers/StoreProvider";
import ThemeProviderWrapper from "@/components/providers/ThemeProviderWrapper";

export const metadata: Metadata = {
  title: 'Mmusic'
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ru">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <StoreProvider>
          <AppRouterCacheProvider>
            <ThemeProviderWrapper>
              <Box>
                <Header />
                {children}
              </Box>
            </ThemeProviderWrapper>
          </AppRouterCacheProvider>
        </StoreProvider>
      </body>
    </html>
  );
}

export default RootLayout;