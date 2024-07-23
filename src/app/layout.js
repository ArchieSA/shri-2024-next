import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>RootLayout</div>
        <header>
          <Link href="/">Home</Link>
          <Link href="/headphones">Headphones</Link>
          <Link href="/about-us">AboutUs</Link>
          <Link href="/contacts">Contacts</Link>
          <Link href="/contacts/address">Address</Link>
        </header>
        {children}
      </body>
    </html>
  );
}
