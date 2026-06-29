import { reportsStore } from '@/mock/store'
import type { RevenueByMonth, RevenueByComplex, OutstandingBalance } from '@/types'

export const reportsApi = {
  revenueByMonth: (complexId?: string): Promise<RevenueByMonth[]> =>
    reportsStore.revenueByMonth(complexId) as any,
  revenueByComplex: (): Promise<RevenueByComplex[]> =>
    reportsStore.revenueByComplex() as any,
  outstandingBalances: (): Promise<OutstandingBalance[]> =>
    reportsStore.outstandingBalances() as any,
  maintenanceCosts: (complexId?: string, _from?: string, _to?: string) =>
    reportsStore.maintenanceCosts(complexId) as any,
  expensesByCategory: (complexId?: string) =>
    reportsStore.expensesByCategory(complexId) as any,
}
