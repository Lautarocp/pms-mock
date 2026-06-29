import { maintenanceStore } from '@/mock/store'
import type { MaintenanceRequest } from '@/types'

export interface CreateMaintenancePayload {
  title: string; description: string; apartmentId: string
  priority?: 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT'
  repairCost?: number; tenantChargeAmount?: number; notes?: string
}
export interface UpdateMaintenancePayload {
  title?: string; description?: string; status?: MaintenanceRequest['status']
  priority?: MaintenanceRequest['priority']; repairCost?: number; tenantChargeAmount?: number; notes?: string
}

export const maintenanceApi = {
  getAll: (apartmentId?: string, _status?: string): Promise<MaintenanceRequest[]> =>
    maintenanceStore.getAll(apartmentId) as any,
  getOne: (id: string): Promise<MaintenanceRequest> => maintenanceStore.getOne(id) as any,
  create: (data: CreateMaintenancePayload) => maintenanceStore.create(data) as any,
  update: (id: string, data: UpdateMaintenancePayload) => maintenanceStore.update(id, data) as any,
  delete: (id: string) => maintenanceStore.delete(id),
}
