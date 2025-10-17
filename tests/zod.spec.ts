import { describe, it, expect } from 'vitest'
import { ZPersonal } from '@/schemas/cv.z'
describe('zod', () => {
    it('accepts valid personal payload', () => {
        const ok = ZPersonal.parse({
            fullName: 'X', email: 'x@x.com', phone:
                '55555', summary: 'y'
        })
        expect(ok.fullName).toBe('X')
    })
})