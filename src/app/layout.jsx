import './globals.css';

export const metadata = {
  title: 'TecnoMart — Hyderabad\'s Premier Tech Store',
  description: 'Premium smartphones, laptops, accessories & repairs. Trusted by thousands in Towlichowki, Hyderabad.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
