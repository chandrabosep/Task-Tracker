"use client";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { Separator } from "@/components/ui/separator";
import NavBar from "@/components/NavBar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body>
          <ThemeProvider>
            <div className="dark:bg-black flex min-h-screen w-full flex-col items-center">
              <NavBar />
              <Separator />
              <main className="flex flex-grow w-full items-center justify-center">
                {children}
              </main>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
