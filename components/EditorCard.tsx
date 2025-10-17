export function EditorCard({ title, children }: {
    title: string; children:
        React.ReactNode
}) {
    return (
        <section style={{
            border: '1px solid #ccc', borderRadius: 10, padding: 14,
            marginBottom: 12
        }}>
            <h2 style={{ margin: '0 0 8px' }}>{title}</h2>
            {children}
        </section>
    )
}