import type { Metadata } from "next";
import "./globals.css";
import ClientShell from "@/components/ClientShell";
import { LanguageProvider } from "@/contexts/LanguageContext";

export const metadata: Metadata = {
  title: "Jimmy Cho",
  description: "Investor, Operator, Strategist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Flash-prevention: apply dark class before React hydrates */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme'),m=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(!t&&m))document.documentElement.classList.add('dark');})();`,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-bg text-ink font-sans antialiased">
        <LanguageProvider>
          <ClientShell>{children}</ClientShell>
        </LanguageProvider>
      </body>
    </html>
  );
}
