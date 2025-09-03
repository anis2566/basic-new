import { Geist, Geist_Mono } from "next/font/google"
import { Metadata } from "next"
import { NuqsAdapter } from "nuqs/adapters/next/app";

import { Providers } from "@/components/providers"
import { DeleteResourceModal } from "@/components/delete-resource-modal";

import { Toaster } from "@workspace/ui/components/sonner"

import { TRPCReactProvider } from "@/trpc/client"
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
    template: "%s | Shikhonary",
    default: "Shikhonary | Empowering Learning in Bangladesh"
  },
  description: "Shikhonary is a modern online learning platform built for Bangladeshi students, offering interactive courses, live classes, and academic resources in Bangla and English."
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
                <DeleteResourceModal />
                <Toaster />
              </DashboardLayout>
            </Providers>
          </body>
        </html>
      </NuqsAdapter>
    </TRPCReactProvider>
  )
}
