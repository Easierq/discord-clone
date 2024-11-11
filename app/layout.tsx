import { ThemeProvider } from "@/components/providers/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
const inter = Open_Sans({ subsets: ["latin"] });

import { ToastProvider } from "@/components/providers/toaster-provider";
import { SocketProvider } from "@/components/providers/socket-provider";
import { ModalProvider } from "@/components/providers/modal-providers";

import { cn } from "@/lib/utils";
import { QueryProvider } from "@/components/providers/query-provider";

export const metadata: Metadata = {
  title: "Ds-team.",
  description: "Ds team social platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "#5A63F7",
        },
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            inter.className,
            "bg-white dark:bg-[#313338] hidden-scrollbar"
          )}
        >
          <ToastProvider />
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem={false}
            storageKey="discord-theme"
          >
            <SocketProvider>
              <ModalProvider />
              <QueryProvider>{children}</QueryProvider>
            </SocketProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
