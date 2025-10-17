import Link from 'next/link'
export default function Home() {
  return (
    <main>
      <h1>CV Builder</h1>
      <p>Create your CV by filling a few sections, then preview.</p>
      <nav style={{ display: 'flex', gap: 12 }}>
        <Link href="/builder">Open Builder</Link><Link href="/preview">See Preview</Link>
      </nav>
    </main>
  )
}
