import { expenseStore } from '@/mock/store'
import type { Expense } from '@/types'

export interface CreateExpensePayload {
  description: string; amount: number; date: string; category?: Expense['category']
  complexId: string; receipt?: string; notes?: string
  maintenanceRequestId?: string; distributeToTenants?: boolean; assignToTenantId?: string
}

export const expensesApi = {
  getAll: (complexId?: string, category?: string): Promise<Expense[]> =>
    expenseStore.getAll(complexId, category) as any,
  getOne: async (id: string): Promise<Expense> => {
    const all = await expenseStore.getAll()
    return all.find(e => e.id === id) as Expense
  },
  create: (data: CreateExpensePayload) => expenseStore.create(data) as any,
  update: (id: string, data: Partial<CreateExpensePayload>) => expenseStore.update(id, data) as any,
  delete: (id: string) => expenseStore.delete(id),
}
