import { complexStore } from '@/mock/store'
import type { ApartmentComplex } from '@/types'

export interface CreateComplexPayload {
  name: string; address: string; city: string; state: string; zipCode: string; description?: string
}

export const complexesApi = {
  getAll: (): Promise<ApartmentComplex[]> => complexStore.getAll() as any,
  getOne: (id: string) => complexStore.getOne(id) as any,
  create: (data: CreateComplexPayload) => complexStore.create(data as any) as any,
  update: (id: string, data: Partial<CreateComplexPayload>) => complexStore.update(id, data) as any,
  delete: (id: string) => complexStore.delete(id),
}
