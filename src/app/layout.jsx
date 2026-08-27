import './globals.css';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
  themeColor: '#ffffff',
};

export const metadata = {
  title: 'TecnoMart — Your Tech. Your Budget. Your Right Choice.',
  description: 'Mobiles, Laptops, Gaming PCs & Expert Repairs – All under one roof in Hyderabad. Genuine parts, certified warranty & best prices.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,700&family=Outfit:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased text-neutral-900 bg-white selection:bg-amber-500 selection:text-neutral-950">
        {children}
      </body>
    </html>
  );
}
