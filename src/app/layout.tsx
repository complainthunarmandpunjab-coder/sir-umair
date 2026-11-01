import type { Metadata } from "next";
import "../styles.css";

const OG = "https://framerusercontent.com/images/8jkfueKXIFT9daAnH9YTyNySoBE.webp?scale-down-to=1024";

export const metadata: Metadata = {
  title: "Engr. Umair Iftikhar — Technology Leader • Executive • Digital Solutions Strategist",
  description: "Personal Portfolio of Engr. Umair Iftikhar — Engineering Digital Solutions That Create Real-World Impact. CTO & Co-Founder, technology executive, and digital solutions strategist.",
  metadataBase: new URL("https://engrumairiftikhar.com"),
  openGraph: {
    title: "Engr. Umair Iftikhar — Engineering Digital Solutions",
    description: "A premium executive, technology leadership and digital solutions portfolio for engrumairiftikhar.com.",
    url: "https://engrumairiftikhar.com",
    siteName: "Engr. Umair Iftikhar Portfolio",
    type: "website",
    images: [{ url: OG }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Engr. Umair Iftikhar — Technology Leader & Digital Strategist",
    description: "Engineering digital solutions that create real-world impact.",
    images: [OG],
  },
  icons: {
    icon: [
      { url: "/WhatsApp_Image_2026-10-28_at_1.10.20_PM6-removebg-preview.png", type: "image/png" },
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/WhatsApp_Image_2026-10-28_at_1.10.20_PM6-removebg-preview.png",
    apple: "/WhatsApp_Image_2026-10-28_at_1.10.20_PM6-removebg-preview.png",
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
        <link rel="icon" type="image/png" href="/WhatsApp_Image_2026-10-28_at_1.10.20_PM6-removebg-preview.png" />
        <link rel="apple-touch-icon" href="/WhatsApp_Image_2026-10-28_at_1.10.20_PM6-removebg-preview.png" />
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
