import { billingStore } from '@/mock/store'

export const billingApi = {
  generateMonthlyRent: (month?: string): Promise<{ created: number; skipped: number }> =>
    billingStore.generateMonthlyRent(month ?? new Date().toISOString().slice(0, 7)),
}
