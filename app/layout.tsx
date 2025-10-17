export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'system-ui, sans-serif' }}>
        <div style={{ maxWidth: 980, margin: '0 auto', padding: 16 }}>{children}
        </div>
      </body>
    </html>
  )
}