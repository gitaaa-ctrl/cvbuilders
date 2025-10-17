import { readCv } from '@/app/builder/actions'
import { TemplateClassic } from '@/components/TemplateClassic'

export default async function Preview() {
    const cv = await readCv()
    return (
        <main>
            <h1>Preview</h1>
            <TemplateClassic cv={cv} />
        </main>)
}
