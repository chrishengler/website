import theme from '../theme';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';

import type { Metadata } from "next";
import { Didact_Gothic, Urbanist } from "next/font/google";
import "./globals.css";
import CssBaseline from '@mui/material/CssBaseline';
import { Box, ThemeProvider } from '@mui/material';
import Header from '@/components/header';

const urbanist = Urbanist({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-urbanist',
});

const didactGothic = Didact_Gothic({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-didact-gothic',
});

export const metadata: Metadata = {
  title: "Chris Hengler",
  description: "Chris Hengler's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable} ${didactGothic.variable}`}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
              <Header />
              <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center", mt: 3 }}>
                <Box sx={{ p: 3, width: { xs: "90%", sm: "60%" }, maxWidth: "1000px" }}>
                  {children}
                </Box>
              </Box>
            </Box>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
