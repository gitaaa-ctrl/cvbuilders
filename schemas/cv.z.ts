import { z } from 'zod'

export const ZPersonal = z.object({
    fullName: z.string().min(1),
    email: z.string().email(),
    phone: z.string().min(5),
    summary: z.string().min(1)
})
export const ZExperience = z.object({
    role: z.string().min(1),
    company: z.string().min(1),
    start: z.string().min(1),
    end: z.string().min(1),
    description: z.string().min(1)
})
export const ZEducation = z.object({
    school: z.string().min(1),
    degree: z.string().min(1),
    start: z.string().min(1),
    end: z.string().min(1)
})
export const ZSkill = z.object({
    name: z.string().min(1), level:
        z.string().min(1)
})
export const ZInterest = z.object({ name: z.string().min(1) })
export const ZCv = z.object({
    personal: ZPersonal,
    experiences: z.array(ZExperience),
    educations: z.array(ZEducation),
    skills: z.array(ZSkill),
    interests: z.array(ZInterest)
})