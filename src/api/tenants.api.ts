import { tenantStore } from '@/mock/store'
import type { Tenant, TenantBalance } from '@/types'

export interface CreateTenantPayload {
  firstName: string; lastName: string; email: string; phone?: string; dni?: string; birthDate?: string
  notes?: string; hasGuarantor?: boolean; guarantorFirstName?: string; guarantorLastName?: string
  guarantorDni?: string; guarantorPhone?: string; guarantorEmail?: string
}

export const tenantsApi = {
  getAll: (): Promise<Tenant[]> => tenantStore.getAll() as any,
  getOne: (id: string): Promise<Tenant> => tenantStore.getOne(id) as any,
  create: (data: CreateTenantPayload) => tenantStore.create(data) as any,
  update: (id: string, data: Partial<CreateTenantPayload>) => tenantStore.update(id, data) as any,
  delete: (id: string) => tenantStore.delete(id),
  getBalance: (id: string): Promise<TenantBalance> => tenantStore.getBalance(id) as any,
}
