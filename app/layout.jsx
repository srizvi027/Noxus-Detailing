import '@fontsource-variable/space-grotesk';
import '@fontsource-variable/manrope';
import './globals.css';

export const metadata = {
  title: 'Noxus Detailing — Detailing without compromise',
  description: 'Premium automotive detailing. Precision detailing, obsessive results.',
};
export const viewport = { themeColor: '#040B14' };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
