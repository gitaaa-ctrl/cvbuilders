export function TemplateClassic({ cv }: { cv: any }) {
  return (
    <div className="card">
      <div className="preview-grid">
        <aside>
          <h2 style={{margin:0}}>{cv?.personal?.fullName || 'Your Name'}</h2>
          <div className="subtle">{cv?.personal?.email}</div>
          <div className="subtle">{cv?.personal?.phone}</div>
          <p>{cv?.personal?.summary}</p>

          <h3>Skills</h3>
          <ul>{(cv?.skills || []).map((s:any,i:number)=><li key={i}>{s.name} — {s.level}</li>)}</ul>

          <h3>Interests</h3>
          <ul>{(cv?.interests || []).map((s:any,i:number)=><li key={i}>{s.name}</li>)}</ul>
        </aside>

        <section>
          <h3>Experience</h3>
          {(cv?.experiences || []).map((e:any,i:number)=>(
            <article key={i} className="card" style={{padding:'12px'}}>
              <b>{e.role}</b> — {e.company} ({e.start}–{e.end})
              <div className="subtle">{e.description}</div>
            </article>
          ))}

          <h3>Education</h3>
          {(cv?.educations || []).map((e:any,i:number)=>(
            <article key={i} className="card" style={{padding:'12px'}}>
              <b>{e.degree}</b> — {e.school} ({e.start}–{e.end})
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}
