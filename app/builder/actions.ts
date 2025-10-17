'use server'
import { connectMongo } from '@/lib/mongo'
import Cv from '@/models/cv.model'
import { ZPersonal, ZExperience, ZEducation, ZSkill, ZInterest } from '@/schemas/cv.z'
async function getDoc() {
    await connectMongo()
    const found = await Cv.findOne()
    return found || (await Cv.create({
        personal: {}, experiences: [], educations:
            [], skills: [], interests: []
    }))
}
export async function savePersonal(fd: FormData) {
    const data = {
        fullName: String(fd.get('fullName') || ''),
        email: String(fd.get('email') || ''),
        phone: String(fd.get('phone') || ''),
        summary: String(fd.get('summary') || '')
    }
    const parsed = ZPersonal.parse(data)
    const doc = await getDoc()
    doc.personal = parsed
    await doc.save()
}
export async function addExp(fd: FormData) {
    const payload = {
        role: String(fd.get('role') || ''),
        company: String(fd.get('company') || ''),
        start: String(fd.get('start') || ''),
        end: String(fd.get('end') || ''),
        description: String(fd.get('description') || '')
    }
    const parsed = ZExperience.parse(payload)
    const doc = await getDoc()
    doc.experiences.push(parsed as any)
    await doc.save()
}
export async function addEdu(fd: FormData) {
    const payload = {
        school: String(fd.get('school') || ''),
        degree: String(fd.get('degree') || ''),
        start: String(fd.get('start') || ''),
        end: String(fd.get('end') || '')
    }
    const parsed = ZEducation.parse(payload)
    const doc = await getDoc()
    doc.educations.push(parsed as any)
    await doc.save()
}
export async function addSkill(fd: FormData) {
    const payload = {
        name: String(fd.get('name') || ''), level:
            String(fd.get('level') || '')
    }
    const parsed = ZSkill.parse(payload)
    const doc = await getDoc()
    doc.skills.push(parsed as any)
    await doc.save()
}
export async function addInterest(fd: FormData) {
    const payload = { name: String(fd.get('name') || '') }
    const parsed = ZInterest.parse(payload)
    const doc = await getDoc()
    doc.interests.push(parsed as any)
    await doc.save()
}
export async function readCv() {
    await connectMongo()
    return Cv.findOne()
}
