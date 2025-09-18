import { Geist, Geist_Mono } from "next/font/google"
import { Metadata } from "next"
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { TRPCReactProvider } from "@/trpc/client"

import { Toaster } from "@workspace/ui/components/sonner"

import { Providers } from "@/components/providers"
import { ModalProvider } from "@/components/modal-provider";
import { DashboardLayout } from "@/modules/ui/layout"

import "@workspace/ui/globals.css"

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: {
    template: "%s | BEC",
    default: "Basic Education Care | BEC"
  },
  description: "Basic education care is a top rated coaching center in Puran Dhaka",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <TRPCReactProvider>
      <NuqsAdapter>
        <html lang="en" suppressHydrationWarning>
          <body
            className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased `}
          >
            <Providers>
              <DashboardLayout>
                {children}
                <ModalProvider />
                <Toaster />
              </DashboardLayout>
            </Providers>
          </body>
        </html>
      </NuqsAdapter>
    </TRPCReactProvider>
  )
}
