import mongoose from 'mongoose'
let cached = (global as any)._mongoose
if (!cached) cached = (global as any)._mongoose = { conn: null, promise: null }
export async function connectMongo() {
    if (cached.conn) return cached.conn
    if (!cached.promise) {
        const uri = process.env.MONGODB_URI as string
        cached.promise = mongoose.connect(uri)
    }
    cached.conn = await cached.promise
    return cached.conn
}