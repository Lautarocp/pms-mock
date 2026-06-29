import { paymentStore } from '@/mock/store'
import type { Payment } from '@/types'

export interface PaymentItemPayload { name: string; amount: number }
export interface CreatePaymentPayload {
  leaseId: string; amount?: number; dueDate: string
  type?: 'RENT' | 'DEPOSIT' | 'LATE_FEE' | 'OTHER'
  notes?: string; items?: PaymentItemPayload[]
}

export const paymentsApi = {
  getAll: (params?: { leaseId?: string; tenantId?: string; status?: string }): Promise<Payment[]> =>
    paymentStore.getAll(params) as any,
  getOne: async (id: string): Promise<Payment> => {
    const all = await paymentStore.getAll()
    return (all as any[]).find((p: any) => p.id === id)
  },
  create: (data: CreatePaymentPayload) => paymentStore.create(data) as any,
  markAsPaid: (id: string, paidItemIds?: string[]) => paymentStore.markAsPaid(id, paidItemIds) as any,
  markAsUnpaid: (id: string) => paymentStore.markAsUnpaid(id) as any,
  update: (id: string, data: Partial<CreatePaymentPayload>) => paymentStore.update(id, data) as any,
  delete: (id: string) => paymentStore.delete(id),
  downloadPdf: (id: string) => paymentStore.downloadPdf(id),
}
