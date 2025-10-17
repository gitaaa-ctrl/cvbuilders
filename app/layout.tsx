import "./globals.css";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <div><span className="badge">CV</span> <strong>Builder</strong></div>
          <nav className="row">
            <a className="btn ghost" href="/builder">Builder</a>
            <a className="btn ghost" href="/preview">Preview</a>
          </nav>
        </header>
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
