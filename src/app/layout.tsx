import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased flex-col flex justify-center items-center h-full`}
        style={{ fontFamily: "monospace" }}
      >
        {children}
      </body>
    </html>
  );
}
