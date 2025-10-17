import { EditorCard } from '@/components/EditorCard'
import { savePersonal, addExp, addEdu, addSkill, addInterest, readCv } from './actions'

export default async function Builder() {
  const cv = await readCv()
  return (
    <main>
      <h1 className="page-title">Builder</h1>

      <EditorCard title="Personal">
        <form action={savePersonal} className="grid">
          <input name="fullName" placeholder="Full name" defaultValue={cv?.personal?.fullName || ''} />
          <div className="row">
            <input name="email" placeholder="Email" defaultValue={cv?.personal?.email || ''} />
            <input name="phone" placeholder="Phone" defaultValue={cv?.personal?.phone || ''} />
          </div>
          <textarea name="summary" placeholder="Summary" defaultValue={cv?.personal?.summary || ''} />
          <button className="btn" type="submit">Save</button>
        </form>
      </EditorCard>

      <EditorCard title="Experience">
        <form action={addExp} className="grid">
          <div className="row">
            <input name="role" placeholder="Role" />
            <input name="company" placeholder="Company" />
          </div>
          <div className="row">
            <input name="start" placeholder="Start" />
            <input name="end" placeholder="End" />
          </div>
          <textarea name="description" placeholder="Description" />
          <button className="btn" type="submit">Add</button>
        </form>
        <ul>
          {(cv?.experiences || []).map((e: any, i: number) => (
            <li key={i}><b>{e.role}</b> — {e.company} ({e.start}–{e.end})</li>
          ))}
        </ul>
      </EditorCard>

      <EditorCard title="Education">
        <form action={addEdu} className="grid">
          <div className="row">
            <input name="school" placeholder="School" />
            <input name="degree" placeholder="Degree" />
          </div>
          <div className="row">
            <input name="start" placeholder="Start" />
            <input name="end" placeholder="End" />
          </div>
          <button className="btn" type="submit">Add</button>
        </form>
        <ul>
          {(cv?.educations || []).map((e: any, i: number) => (
            <li key={i}><b>{e.degree}</b> — {e.school} ({e.start}–{e.end})</li>
          ))}
        </ul>
      </EditorCard>

      <EditorCard title="Skills">
        <form action={addSkill} className="row">
          <input name="name" placeholder="Skill" />
          <input name="level" placeholder="Level" />
          <button className="btn" type="submit">Add</button>
        </form>
        <ul>{(cv?.skills || []).map((s: any, i: number) => <li key={i}>{s.name} — {s.level}</li>)}</ul>
      </EditorCard>

      <EditorCard title="Interests">
        <form action={addInterest} className="row">
          <input name="name" placeholder="Interest" />
          <button className="btn" type="submit">Add</button>
        </form>
        <ul>{(cv?.interests || []).map((it: any, i: number) => <li key={i}>{it.name}</li>)}</ul>
      </EditorCard>
    </main>
  )
}
