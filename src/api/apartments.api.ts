import { apartmentStore } from '@/mock/store'
import type { Apartment } from '@/types'

export interface CreateApartmentPayload {
  number: string; floor?: number; area?: number; monthlyRent: number; status?: Apartment['status']; complexId: string
}

export const apartmentsApi = {
  getAll: (complexId?: string) => apartmentStore.getAll(complexId) as any,
  getOne: (id: string) => apartmentStore.getOne(id) as any,
  create: (data: CreateApartmentPayload) => apartmentStore.create(data) as any,
  update: (id: string, data: Partial<CreateApartmentPayload>) => apartmentStore.update(id, data) as any,
  delete: (id: string) => apartmentStore.delete(id),
  increaseRent: (id: string, percentage: number) => apartmentStore.increaseRent(id, percentage) as any,
}
