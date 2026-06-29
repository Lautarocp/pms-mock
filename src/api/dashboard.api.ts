import { dashboardStore } from '@/mock/store'
import type { FinancialSummary } from '@/types'

export interface DashboardStats {
  totalComplexes: number; totalApartments: number; availableApartments: number
  occupiedApartments: number; totalTenants: number; activeLeases: number
  pendingPayments: number; overduePayments: number
}

export const dashboardApi = {
  getStats: (): Promise<DashboardStats> => dashboardStore.getStats() as any,
  getFinancialSummary: (): Promise<FinancialSummary> => dashboardStore.getFinancialSummary() as any,
}
