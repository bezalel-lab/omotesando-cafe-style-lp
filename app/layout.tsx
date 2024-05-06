import './globals.css';

export const metadata = {
  title: 'LP',
  description: 'Portfolio LP',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>

      <script src="https://kit.fontawesome.com/fd76f22e79.js" crossOrigin="anonymous"></script>
        
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Satisfy&display=swap"
          rel="stylesheet"
        />

        {/* Adobe Fonts */}
        <link rel="stylesheet" href="https://use.typekit.net/clc7gje.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
