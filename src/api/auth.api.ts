import type { User } from '@/types'

export interface LoginPayload { email: string; password: string }
export interface RegisterPayload { email: string; password: string; firstName: string; lastName: string }
export interface AuthResponse { user: User; access_token: string }

const DEMO_USER: User = {
  id: 'u1', email: 'demo@pms.com', firstName: 'Demo', lastName: 'Admin',
  role: 'ADMIN', isActive: true, createdAt: '2023-01-01T00:00:00Z', updatedAt: '2023-01-01T00:00:00Z',
}

const delay = (ms = 400) => new Promise<void>(r => setTimeout(r, ms))

export const authApi = {
  login: async (_data: LoginPayload): Promise<AuthResponse> => {
    await delay()
    return { user: DEMO_USER, access_token: 'mock-demo-token' }
  },
  register: async (data: RegisterPayload): Promise<AuthResponse> => {
    await delay()
    const user: User = { id: 'u1', email: data.email, firstName: data.firstName, lastName: data.lastName, role: 'ADMIN', isActive: true, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }
    return { user, access_token: 'mock-demo-token' }
  },
  me: async (): Promise<User> => {
    await delay()
    return DEMO_USER
  },
}
