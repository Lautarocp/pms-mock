import { leaseStore } from '@/mock/store'
import type { Lease } from '@/types'

export interface CreateLeasePayload {
  apartmentId: string; tenantId: string; startDate: string; endDate: string
  monthlyRent: number; depositAmount: number; buildingFeeAmount?: number; notes?: string
}
export interface TransferLeasePayload {
  newApartmentId: string; startDate: string; endDate: string
  monthlyRent: number; depositAmount: number; buildingFeeAmount?: number
}
export interface LeaseItemPayload { name: string; amount: number }

export const leasesApi = {
  getAll: (apartmentId?: string): Promise<Lease[]> => leaseStore.getAll(apartmentId) as any,
  create: (data: CreateLeasePayload) => leaseStore.create(data) as any,
  getPendingCharges: (id: string) => leaseStore.getPendingCharges(id) as any,
  terminate: (id: string, deductFromDeposit = false) => leaseStore.terminate(id, deductFromDeposit) as any,
  transfer: (id: string, data: TransferLeasePayload) => leaseStore.transfer(id, data) as any,
  addItem: async (_leaseId: string, _data: LeaseItemPayload) => ({}),
  updateItem: async (_leaseId: string, _itemId: string, _data: LeaseItemPayload) => ({}),
  removeItem: async (_leaseId: string, _itemId: string) => ({}),
}
