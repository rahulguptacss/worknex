import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Worknex | Premier HR Consulting, Staffing & Talent Acquisition",
  description: "Connecting exceptional talent with visionary enterprises through strategic recruitment, executive search, workforce planning, and corporate HR advisory.",
  icons: {
    icon: "/logo/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white font-sans antialiased text-[#0F1E25] selection:bg-[#0C4E55] selection:text-white">
        {children}
      </body>
    </html>
  );
}
