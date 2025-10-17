import { EditorCard } from '@/components/EditorCard'
import { savePersonal, addExp, addEdu, addSkill, addInterest, readCv } from './actions'
export default async function Builder() {
    const cv = await readCv()
    return (<main>
        <h1>Builder</h1>
        <EditorCard title="Personal">
            <form action={savePersonal} style={{ display: 'grid', gap: 8 }}>
                <input name="fullName" placeholder="Full name"
                    defaultValue={cv?.personal?.fullName || ''} />
                <input name="email" placeholder="Email"
                    defaultValue={cv?.personal?.email || ''} />
                <input name="phone" placeholder="Phone"
                    defaultValue={cv?.personal?.phone || ''} />
                <textarea name="summary" placeholder="Summary"
                    defaultValue={cv?.personal?.summary || ''} />
                <button type="submit">Save</button>
            </form>
        </EditorCard>
        <EditorCard title="Experience">
            <form action={addExp} style={{ display: 'grid', gap: 8 }}>
                <input name="role" placeholder="Role" />
                <input name="company" placeholder="Company" />
                <input name="start" placeholder="Start" />
                <input name="end" placeholder="End" />
                <textarea name="description" placeholder="Description" />
                <button type="submit">Add</button>
            </form>
            <ul>
                {(cv?.experiences || []).map((e: any, i: number) => (
                    <li key={i}>{e.role} — {e.company} ({e.start}–{e.end})</li>
                ))}
            </ul>
        </EditorCard>
        <EditorCard title="Education">
            <form action={addEdu} style={{ display: 'grid', gap: 8 }}>
                <input name="school" placeholder="School" />
                <input name="degree" placeholder="Degree" />
                <input name="start" placeholder="Start" />
                <input name="end" placeholder="End" />
                <button type="submit">Add</button>
            </form>
            <ul>
                {(cv?.educations || []).map((e: any, i: number) => (
                    <li key={i}>{e.degree} — {e.school} ({e.start}–{e.end})</li>
                ))}
            </ul>
        </EditorCard>
        <EditorCard title="Skills">
            <form action={addSkill} style={{ display: 'grid', gap: 8 }}>
                <input name="name" placeholder="Skill" />
                <input name="level" placeholder="Level" />
                <button type="submit">Add</button>
            </form>
            <ul>
                {(cv?.skills || []).map((s: any, i: number) => (
                    <li key={i}>{s.name} — {s.level}</li>
                ))}
            </ul>
        </EditorCard>
        <EditorCard title="Interests">
            <form action={addInterest} style={{ display: 'grid', gap: 8 }}>
                <input name="name" placeholder="Interest" />
                <button type="submit">Add</button>
            </form>
            <ul>
                {(cv?.interests || []).map((it: any, i: number) => (
                    <li key={i}>{it.name}</li>
                ))}
            </ul>
        </EditorCard>
    </main>
    )
}