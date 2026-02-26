import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Apefiy - Android App Development",
  description:
    "Professional Android app development, UI design and Play Store publishing services.",

  // ✅ Google Search Console Verification
  verification: {
    google: "P7lXw9dFfCNiTK_cD4FBQoqckTXypedlp678W3-lkaw",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}