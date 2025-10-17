import { Schema, models, model } from 'mongoose'
const Experience = new Schema({
    role: String, company: String, start: String,
    end: String, description: String
})
const Education = new Schema({
    school: String, degree: String, start: String,
    end: String
})
const Skill = new Schema({ name: String, level: String })
const Interest = new Schema({ name: String })
const Personal = new Schema({
    fullName: String, email: String, phone: String,
    summary: String
})

const CvSchema = new Schema({
    personal: Personal,
    experiences: [Experience],
    educations: [Education],
    skills: [Skill],
    interests: [Interest]
})

export default models.CvAlt || model('CvAlt', CvSchema)