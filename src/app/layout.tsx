import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`dark antialiased h-full`}
        style={{ fontFamily: "monospace" }}
      >
        {children}
      </body>
    </html>
  );
}
