export function TemplateClassic({ cv }: { cv: any }) {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 16 }}>
            <aside>
                <h2 style={{ margin: 0 }}>{cv?.personal?.fullName || 'Your Name'}</h2>
                <div>{cv?.personal?.email}</div>
                <div>{cv?.personal?.phone}</div>
                <p>{cv?.personal?.summary}</p>
                <h3>Skills</h3>
                <ul>
                    {(cv?.skills || []).map((s: any, i: number) => (
                        <li key={i}>{s.name} — {s.level}</li>
                    ))}
                </ul>
                <h3>Interests</h3>
                <ul>
                    {(cv?.interests || []).map((s: any, i: number) => (
                        <li key={i}>{s.name}</li>
                    ))}
                </ul>
            </aside>
            <section>
                <h3>Experience</h3>
                {(cv?.experiences || []).map((e: any, i: number) => (
                    <article key={i} style={{ marginBottom: 12 }}>
                        <b>{e.role}</b> — {e.company} ({e.start}–{e.end})
                        <div>{e.description}</div>
                    </article>
                ))}
                <h3>Education</h3>
                {(cv?.educations || []).map((e: any, i: number) => (
                    <article key={i} style={{ marginBottom: 8 }}>
                        <b>{e.degree}</b> — {e.school} ({e.start}–{e.end})
                    </article>
                ))}
            </section>
        </div>
    )
}
