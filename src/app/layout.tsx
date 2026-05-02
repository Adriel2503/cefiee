import type { Metadata } from "next";
import { DM_Serif_Display, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cefiee.uni.edu.pe"),
  title: {
    template: "%s | CEFIEE — FIEE UNI",
    default: "CEFIEE — Centro de Estudiantes FIEE · UNI",
  },
  description:
    "Portal oficial del Centro de Estudiantes de la Facultad de Ingeniería Eléctrica y Electrónica de la Universidad Nacional de Ingeniería. Trámites, oportunidades y vida estudiantil.",
  keywords: [
    "CEFIEE", "UNI", "FIEE", "centro de estudiantes",
    "ingeniería eléctrica", "ingeniería electrónica",
    "telecomunicaciones", "ciberseguridad", "Lima", "Perú",
  ],
  openGraph: {
    title: "CEFIEE — Centro de Estudiantes FIEE · UNI",
    description: "Portal oficial del Centro de Estudiantes FIEE — Universidad Nacional de Ingeniería, Lima Perú.",
    locale: "es_PE",
    type: "website",
    siteName: "CEFIEE",
    url: "https://cefiee.uni.edu.pe",
  },
  twitter: {
    card: "summary_large_image",
    title: "CEFIEE — Centro de Estudiantes FIEE · UNI",
    description: "Portal oficial del Centro de Estudiantes FIEE — Universidad Nacional de Ingeniería, Lima Perú.",
    site: "@cefiee_uni",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`${dmSerif.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#F9FAFB] text-[#0C0E14] font-sans">
        {children}
      </body>
    </html>
  );
}
