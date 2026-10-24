import type { Metadata } from "next";
import "../styles.css";

const OG = "https://framerusercontent.com/images/8jkfueKXIFT9daAnH9YTyNySoBE.webp?scale-down-to=1024";

export const metadata: Metadata = {
  title: "Engr. Umair Iftikhar — CTO & Co-Founder | Technology Leader",
  description: "Building Technology. Empowering People. Creating Digital Impact. CTO & Co-Founder of i3 Group of Companies and COO at Youth Empowerment Training Program (YETP).",
  openGraph: {
    title: "Engr. Umair Iftikhar — Technology Leader & Entrepreneur",
    description: "Building scalable digital solutions, leading technology teams, and driving digital transformation.",
    type: "website",
    images: [{ url: OG }],
  },
  twitter: {
    card: "summary_large_image",
    images: [OG],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Geist:wght@300..700&family=Geist+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
