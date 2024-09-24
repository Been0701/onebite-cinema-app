import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Onebite-cinema',
  description: '한입 씨네마',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-900 flex flex-col justify-center items-center">
        <div className="w-1/2">
          <header className="text-red-700 font-bold text-2xl my-4">
            <Link href={'/'}>ONEBITE CINEMA</Link>
          </header>
          <main>{children}</main>
          <footer className="text-white text-sm mt-8">제작 @been0701</footer>
        </div>
      </body>
    </html>
  );
}
