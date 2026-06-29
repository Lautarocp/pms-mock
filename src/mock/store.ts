import type {
  ApartmentComplex, Apartment, Tenant, Lease, Payment, Expense, MaintenanceRequest,
} from '@/types'

// ─── Seed data ────────────────────────────────────────────────────────────────

const COMPLEXES: ApartmentComplex[] = [
  {
    id: 'c1', name: 'Residencial Las Palmas', address: 'Av. Diagonal 150',
    city: 'Barcelona', state: 'Cataluña', zipCode: '08018',
    description: 'Complejo residencial moderno en el centro de Barcelona.',
    isActive: true, ownerId: 'u1',
    createdAt: '2023-01-10T10:00:00Z', updatedAt: '2023-01-10T10:00:00Z',
  },
  {
    id: 'c2', name: 'Torre Norte', address: 'Calle Serrano 45',
    city: 'Madrid', state: 'Madrid', zipCode: '28001',
    description: 'Torre residencial premium en el Barrio de Salamanca.',
    isActive: true, ownerId: 'u1',
    createdAt: '2023-03-15T10:00:00Z', updatedAt: '2023-03-15T10:00:00Z',
  },
]

const APARTMENTS: Apartment[] = [
  { id: 'a1', number: '101', floor: 1, area: 65, monthlyRent: 1200, status: 'OCCUPIED', complexId: 'c1', createdAt: '2023-01-10T10:00:00Z', updatedAt: '2023-01-10T10:00:00Z' },
  { id: 'a2', number: '102', floor: 1, area: 70, monthlyRent: 1350, status: 'OCCUPIED', complexId: 'c1', createdAt: '2023-01-10T10:00:00Z', updatedAt: '2023-01-10T10:00:00Z' },
  { id: 'a3', number: '201', floor: 2, area: 80, monthlyRent: 1500, status: 'AVAILABLE', complexId: 'c1', createdAt: '2023-01-10T10:00:00Z', updatedAt: '2023-01-10T10:00:00Z' },
  { id: 'a4', number: '202', floor: 2, area: 75, monthlyRent: 1400, status: 'MAINTENANCE', complexId: 'c1', createdAt: '2023-01-10T10:00:00Z', updatedAt: '2023-01-10T10:00:00Z' },
  { id: 'a5', number: '301', floor: 3, area: 90, monthlyRent: 1650, status: 'AVAILABLE', complexId: 'c1', createdAt: '2023-01-10T10:00:00Z', updatedAt: '2023-01-10T10:00:00Z' },
  { id: 'a6', number: '101', floor: 1, area: 88, monthlyRent: 1800, status: 'OCCUPIED', complexId: 'c2', createdAt: '2023-03-15T10:00:00Z', updatedAt: '2023-03-15T10:00:00Z' },
  { id: 'a7', number: '102', floor: 1, area: 95, monthlyRent: 2000, status: 'OCCUPIED', complexId: 'c2', createdAt: '2023-03-15T10:00:00Z', updatedAt: '2023-03-15T10:00:00Z' },
  { id: 'a8', number: '201', floor: 2, area: 112, monthlyRent: 2400, status: 'AVAILABLE', complexId: 'c2', createdAt: '2023-03-15T10:00:00Z', updatedAt: '2023-03-15T10:00:00Z' },
  { id: 'a9', number: '202', floor: 2, area: 105, monthlyRent: 2200, status: 'OCCUPIED', complexId: 'c2', createdAt: '2023-03-15T10:00:00Z', updatedAt: '2023-03-15T10:00:00Z' },
  { id: 'a10', number: '301', floor: 3, area: 122, monthlyRent: 2800, status: 'AVAILABLE', complexId: 'c2', createdAt: '2023-03-15T10:00:00Z', updatedAt: '2023-03-15T10:00:00Z' },
]

const TENANTS: Tenant[] = [
  {
    id: 't1', firstName: 'Carlos', lastName: 'García', email: 'carlos.garcia@email.com',
    phone: '+34 612 345 678', dni: '12345678A', birthDate: '1985-04-15T00:00:00Z',
    notes: 'Inquilino puntual. Prefiere comunicación por email.',
    hasGuarantor: true, guarantorFirstName: 'Miguel', guarantorLastName: 'García',
    guarantorDni: '87654321B', guarantorPhone: '+34 698 765 432', guarantorEmail: 'miguel.garcia@email.com',
    isActive: true, createdById: 'u1', createdAt: '2025-01-28T10:00:00Z', updatedAt: '2025-01-28T10:00:00Z',
  },
  {
    id: 't2', firstName: 'María', lastName: 'López', email: 'maria.lopez@email.com',
    phone: '+34 623 456 789', dni: '23456789B', birthDate: '1990-08-22T00:00:00Z',
    hasGuarantor: false, isActive: true, createdById: 'u1',
    createdAt: '2025-03-28T10:00:00Z', updatedAt: '2025-03-28T10:00:00Z',
  },
  {
    id: 't3', firstName: 'Ana', lastName: 'Martínez', email: 'ana.martinez@email.com',
    phone: '+34 634 567 890', dni: '34567890C', birthDate: '1988-12-05T00:00:00Z',
    hasGuarantor: true, guarantorFirstName: 'José', guarantorLastName: 'Martínez',
    guarantorDni: '98765432D', guarantorPhone: '+34 687 654 321', guarantorEmail: 'jose.martinez@email.com',
    isActive: true, createdById: 'u1', createdAt: '2024-10-28T10:00:00Z', updatedAt: '2024-10-28T10:00:00Z',
  },
  {
    id: 't4', firstName: 'Roberto', lastName: 'Silva', email: 'roberto.silva@email.com',
    phone: '+34 645 678 901', dni: '45678901D', birthDate: '1979-03-18T00:00:00Z',
    hasGuarantor: false, isActive: true, createdById: 'u1',
    createdAt: '2024-12-28T10:00:00Z', updatedAt: '2024-12-28T10:00:00Z',
  },
  {
    id: 't5', firstName: 'Lucía', lastName: 'Torres', email: 'lucia.torres@email.com',
    phone: '+34 656 789 012', dni: '56789012E', birthDate: '1995-07-30T00:00:00Z',
    hasGuarantor: false, isActive: true, createdById: 'u1',
    createdAt: '2025-05-28T10:00:00Z', updatedAt: '2025-05-28T10:00:00Z',
  },
  {
    id: 't6', firstName: 'Pablo', lastName: 'Jiménez', email: 'pablo.jimenez@email.com',
    phone: '+34 667 890 123', dni: '67890123F', birthDate: '1982-11-11T00:00:00Z',
    notes: 'Ex-inquilino. Contrato finalizado en diciembre 2023.',
    hasGuarantor: false, isActive: true, createdById: 'u1',
    createdAt: '2022-12-01T10:00:00Z', updatedAt: '2022-12-01T10:00:00Z',
  },
]

const LEASES: Lease[] = [
  { id: 'l1', startDate: '2025-02-01T00:00:00Z', endDate: '2027-01-31T00:00:00Z', monthlyRent: 1200, depositAmount: 2400, status: 'ACTIVE', apartmentId: 'a1', tenantId: 't1', createdAt: '2025-01-28T10:00:00Z', updatedAt: '2025-01-28T10:00:00Z' },
  { id: 'l2', startDate: '2025-04-01T00:00:00Z', endDate: '2026-09-30T00:00:00Z', monthlyRent: 1350, depositAmount: 2700, status: 'ACTIVE', apartmentId: 'a2', tenantId: 't2', createdAt: '2025-03-28T10:00:00Z', updatedAt: '2025-03-28T10:00:00Z' },
  { id: 'l3', startDate: '2024-11-01T00:00:00Z', endDate: '2026-10-31T00:00:00Z', monthlyRent: 1800, depositAmount: 3600, status: 'ACTIVE', apartmentId: 'a6', tenantId: 't3', notes: 'Incluye plaza de garaje.', createdAt: '2024-10-28T10:00:00Z', updatedAt: '2024-10-28T10:00:00Z' },
  { id: 'l4', startDate: '2025-01-01T00:00:00Z', endDate: '2026-12-31T00:00:00Z', monthlyRent: 2000, depositAmount: 4000, status: 'ACTIVE', apartmentId: 'a7', tenantId: 't4', createdAt: '2024-12-28T10:00:00Z', updatedAt: '2024-12-28T10:00:00Z' },
  { id: 'l5', startDate: '2025-06-01T00:00:00Z', endDate: '2026-05-31T00:00:00Z', monthlyRent: 2200, depositAmount: 4400, status: 'ACTIVE', apartmentId: 'a9', tenantId: 't5', createdAt: '2025-05-28T10:00:00Z', updatedAt: '2025-05-28T10:00:00Z' },
  { id: 'l6', startDate: '2023-01-01T00:00:00Z', endDate: '2023-12-31T00:00:00Z', monthlyRent: 1450, depositAmount: 2900, status: 'EXPIRED', apartmentId: 'a3', tenantId: 't6', createdAt: '2022-12-01T10:00:00Z', updatedAt: '2024-01-15T10:00:00Z' },
]

const PAYMENTS: Payment[] = [
  // Carlos García (t1, l1) — March-May paid, June OVERDUE
  { id: 'p1', amount: 1200, dueDate: '2026-03-01T00:00:00Z', paidDate: '2026-03-02T00:00:00Z', status: 'PAID', type: 'RENT', leaseId: 'l1', tenantId: 't1', createdAt: '2026-02-25T10:00:00Z', updatedAt: '2026-03-02T10:00:00Z' },
  { id: 'p2', amount: 1200, dueDate: '2026-04-01T00:00:00Z', paidDate: '2026-04-03T00:00:00Z', status: 'PAID', type: 'RENT', leaseId: 'l1', tenantId: 't1', createdAt: '2026-03-25T10:00:00Z', updatedAt: '2026-04-03T10:00:00Z' },
  { id: 'p3', amount: 1200, dueDate: '2026-05-01T00:00:00Z', paidDate: '2026-05-04T00:00:00Z', status: 'PAID', type: 'RENT', leaseId: 'l1', tenantId: 't1', createdAt: '2026-04-25T10:00:00Z', updatedAt: '2026-05-04T10:00:00Z' },
  { id: 'p4', amount: 1200, dueDate: '2026-06-01T00:00:00Z', status: 'OVERDUE', type: 'RENT', leaseId: 'l1', tenantId: 't1', createdAt: '2026-05-25T10:00:00Z', updatedAt: '2026-06-05T10:00:00Z' },
  // María López (t2, l2) — April-May paid, June PENDING
  { id: 'p5', amount: 1350, dueDate: '2026-04-01T00:00:00Z', paidDate: '2026-04-01T00:00:00Z', status: 'PAID', type: 'RENT', leaseId: 'l2', tenantId: 't2', createdAt: '2026-03-25T10:00:00Z', updatedAt: '2026-04-01T10:00:00Z' },
  { id: 'p6', amount: 1350, dueDate: '2026-05-01T00:00:00Z', paidDate: '2026-05-02T00:00:00Z', status: 'PAID', type: 'RENT', leaseId: 'l2', tenantId: 't2', createdAt: '2026-04-25T10:00:00Z', updatedAt: '2026-05-02T10:00:00Z' },
  { id: 'p7', amount: 1350, dueDate: '2026-06-01T00:00:00Z', status: 'PENDING', type: 'RENT', leaseId: 'l2', tenantId: 't2', createdAt: '2026-05-25T10:00:00Z', updatedAt: '2026-05-25T10:00:00Z' },
  // Ana Martínez (t3, l3) — April-May paid, June OVERDUE
  { id: 'p8', amount: 1800, dueDate: '2026-04-01T00:00:00Z', paidDate: '2026-04-05T00:00:00Z', status: 'PAID', type: 'RENT', leaseId: 'l3', tenantId: 't3', createdAt: '2026-03-25T10:00:00Z', updatedAt: '2026-04-05T10:00:00Z' },
  { id: 'p9', amount: 1800, dueDate: '2026-05-01T00:00:00Z', paidDate: '2026-05-07T00:00:00Z', status: 'PAID', type: 'RENT', leaseId: 'l3', tenantId: 't3', createdAt: '2026-04-25T10:00:00Z', updatedAt: '2026-05-07T10:00:00Z' },
  { id: 'p10', amount: 1800, dueDate: '2026-06-01T00:00:00Z', status: 'OVERDUE', type: 'RENT', leaseId: 'l3', tenantId: 't3', createdAt: '2026-05-25T10:00:00Z', updatedAt: '2026-06-10T10:00:00Z' },
  // Roberto Silva (t4, l4) — May paid, June PENDING
  { id: 'p11', amount: 2000, dueDate: '2026-05-01T00:00:00Z', paidDate: '2026-05-01T00:00:00Z', status: 'PAID', type: 'RENT', leaseId: 'l4', tenantId: 't4', createdAt: '2026-04-25T10:00:00Z', updatedAt: '2026-05-01T10:00:00Z' },
  { id: 'p12', amount: 2000, dueDate: '2026-06-01T00:00:00Z', status: 'PENDING', type: 'RENT', leaseId: 'l4', tenantId: 't4', createdAt: '2026-05-25T10:00:00Z', updatedAt: '2026-05-25T10:00:00Z' },
  // Lucía Torres (t5, l5) — June paid
  { id: 'p13', amount: 2200, dueDate: '2026-06-01T00:00:00Z', paidDate: '2026-06-01T00:00:00Z', status: 'PAID', type: 'RENT', leaseId: 'l5', tenantId: 't5', createdAt: '2026-05-25T10:00:00Z', updatedAt: '2026-06-01T10:00:00Z' },
  // Deposit payments
  { id: 'p14', amount: 2400, dueDate: '2025-02-01T00:00:00Z', paidDate: '2025-02-01T00:00:00Z', status: 'PAID', type: 'DEPOSIT', leaseId: 'l1', tenantId: 't1', notes: 'Fianza inicial', createdAt: '2025-01-28T10:00:00Z', updatedAt: '2025-02-01T10:00:00Z' },
  { id: 'p15', amount: 2700, dueDate: '2025-04-01T00:00:00Z', paidDate: '2025-04-01T00:00:00Z', status: 'PAID', type: 'DEPOSIT', leaseId: 'l2', tenantId: 't2', notes: 'Fianza inicial', createdAt: '2025-03-28T10:00:00Z', updatedAt: '2025-04-01T10:00:00Z' },
]

const MAINTENANCE_REQUESTS: MaintenanceRequest[] = [
  { id: 'm1', title: 'Fuga de agua en baño principal', description: 'Se detecta humedad y agua en el suelo del baño principal. Requiere revisión urgente de tuberías.', status: 'OPEN', priority: 'URGENT', apartmentId: 'a4', createdAt: '2026-06-25T10:00:00Z', updatedAt: '2026-06-25T10:00:00Z' },
  { id: 'm2', title: 'Aire acondicionado no enfría', description: 'El sistema de aire acondicionado está encendido pero no baja la temperatura. Posible fallo en el compresor.', status: 'IN_PROGRESS', priority: 'HIGH', apartmentId: 'a1', tenantId: 't1', createdAt: '2026-06-20T10:00:00Z', updatedAt: '2026-06-22T10:00:00Z' },
  { id: 'm3', title: 'Cerradura desgastada en puerta principal', description: 'La cerradura de la puerta de entrada tiene dificultad para abrir y cerrar. Riesgo de quedar bloqueada.', status: 'RESOLVED', priority: 'MEDIUM', apartmentId: 'a2', tenantId: 't2', resolvedAt: '2026-06-18T10:00:00Z', notes: 'Se reemplazó la cerradura completa.', createdAt: '2026-06-10T10:00:00Z', updatedAt: '2026-06-18T10:00:00Z' },
  { id: 'm4', title: 'Mancha en techo del salón', description: 'Aparece una mancha de humedad en el techo del salón, posiblemente proveniente del piso superior.', status: 'OPEN', priority: 'LOW', apartmentId: 'a6', tenantId: 't3', createdAt: '2026-06-15T10:00:00Z', updatedAt: '2026-06-15T10:00:00Z' },
  { id: 'm5', title: 'Lavadora averiada', description: 'La lavadora integrada no enciende. Se revisó el enchufe y no hay corriente en el electrodoméstico.', status: 'CLOSED', priority: 'MEDIUM', apartmentId: 'a7', tenantId: 't4', resolvedAt: '2026-05-30T10:00:00Z', notes: 'Se reemplazó la lavadora por una nueva. Costo asumido por la propiedad.', createdAt: '2026-05-22T10:00:00Z', updatedAt: '2026-05-30T10:00:00Z' },
]

const EXPENSES: Expense[] = [
  { id: 'e1', description: 'Limpieza jardines y zonas comunes', amount: 250, date: '2026-06-01T00:00:00Z', category: 'CLEANING', complexId: 'c1', createdAt: '2026-06-01T10:00:00Z', updatedAt: '2026-06-01T10:00:00Z' },
  { id: 'e2', description: 'Factura electricidad zonas comunes', amount: 380, date: '2026-06-05T00:00:00Z', category: 'UTILITIES', complexId: 'c1', createdAt: '2026-06-05T10:00:00Z', updatedAt: '2026-06-05T10:00:00Z' },
  { id: 'e3', description: 'Seguro anual del edificio', amount: 1200, date: '2026-05-15T00:00:00Z', category: 'INSURANCE', complexId: 'c1', createdAt: '2026-05-15T10:00:00Z', updatedAt: '2026-05-15T10:00:00Z' },
  { id: 'e4', description: 'Reparación ascensor - mantenimiento trimestral', amount: 680, date: '2026-06-10T00:00:00Z', category: 'REPAIRS', complexId: 'c2', createdAt: '2026-06-10T10:00:00Z', updatedAt: '2026-06-10T10:00:00Z' },
  { id: 'e5', description: 'Limpieza portal y escaleras', amount: 180, date: '2026-06-20T00:00:00Z', category: 'CLEANING', complexId: 'c2', createdAt: '2026-06-20T10:00:00Z', updatedAt: '2026-06-20T10:00:00Z' },
  { id: 'e6', description: 'IBI - Impuesto Bienes Inmuebles', amount: 2400, date: '2026-06-01T00:00:00Z', category: 'TAXES', complexId: 'c2', createdAt: '2026-06-01T10:00:00Z', updatedAt: '2026-06-01T10:00:00Z' },
  { id: 'e7', description: 'Pintura pasillos planta 2', amount: 950, date: '2026-05-20T00:00:00Z', category: 'REPAIRS', complexId: 'c1', createdAt: '2026-05-20T10:00:00Z', updatedAt: '2026-05-20T10:00:00Z' },
]

// ─── Mutable store ─────────────────────────────────────────────────────────────

let _complexes = [...COMPLEXES]
let _apartments = [...APARTMENTS]
let _tenants = [...TENANTS]
let _leases = [...LEASES]
let _payments = [...PAYMENTS]
let _maintenance = [...MAINTENANCE_REQUESTS]
let _expenses = [...EXPENSES]
let _counter = 1000

function id() { return `mock-${_counter++}` }
const delay = (ms = 350) => new Promise<void>(r => setTimeout(r, ms))

// ─── View builders ─────────────────────────────────────────────────────────────

function complexOf(complexId: string) {
  return _complexes.find(c => c.id === complexId)
}

function aptOf(aptId: string) {
  const apt = _apartments.find(a => a.id === aptId)
  if (!apt) return null
  return { ...apt, complex: complexOf(apt.complexId) }
}

function tenantOf(tenantId: string) {
  return _tenants.find(t => t.id === tenantId)
}

function leaseOf(leaseId: string) {
  const lease = _leases.find(l => l.id === leaseId)
  if (!lease) return null
  const apt = aptOf(lease.apartmentId)
  const tenant = tenantOf(lease.tenantId)
  return { ...lease, apartment: apt, tenant }
}

// ─── Complexes ─────────────────────────────────────────────────────────────────

export const complexStore = {
  getAll: async () => {
    await delay()
    return [..._complexes]
  },
  getOne: async (id: string) => {
    await delay()
    return _complexes.find(c => c.id === id)
  },
  create: async (data: Omit<ApartmentComplex, 'id' | 'ownerId' | 'isActive' | 'createdAt' | 'updatedAt'>) => {
    await delay()
    const complex: ApartmentComplex = { ...data as any, id: id(), isActive: true, ownerId: 'u1', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }
    _complexes = [..._complexes, complex]
    return complex
  },
  update: async (cid: string, data: any) => {
    await delay()
    _complexes = _complexes.map(c => c.id === cid ? { ...c, ...data, updatedAt: new Date().toISOString() } : c)
    return _complexes.find(c => c.id === cid)
  },
  delete: async (cid: string) => {
    await delay()
    _complexes = _complexes.filter(c => c.id !== cid)
    return {}
  },
}

// ─── Apartments ────────────────────────────────────────────────────────────────

function buildApartmentView(apt: Apartment) {
  const activeLeases = _leases
    .filter(l => l.apartmentId === apt.id && l.status === 'ACTIVE')
    .map(l => ({ ...l, tenant: tenantOf(l.tenantId), apartment: { ...apt, complex: complexOf(apt.complexId) } }))
  return { ...apt, complex: complexOf(apt.complexId), leases: activeLeases }
}

export const apartmentStore = {
  getAll: async (complexId?: string) => {
    await delay()
    let list = _apartments
    if (complexId) list = list.filter(a => a.complexId === complexId)
    return list.map(buildApartmentView)
  },
  getOne: async (aptId: string) => {
    await delay()
    const apt = _apartments.find(a => a.id === aptId)
    return apt ? buildApartmentView(apt) : null
  },
  create: async (data: any) => {
    await delay()
    const apt: Apartment = { ...data, id: id(), createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }
    _apartments = [..._apartments, apt]
    return buildApartmentView(apt)
  },
  update: async (aptId: string, data: any) => {
    await delay()
    _apartments = _apartments.map(a => a.id === aptId ? { ...a, ...data, updatedAt: new Date().toISOString() } : a)
    const apt = _apartments.find(a => a.id === aptId)
    return apt ? buildApartmentView(apt) : null
  },
  delete: async (aptId: string) => {
    await delay()
    _apartments = _apartments.filter(a => a.id !== aptId)
    return {}
  },
  increaseRent: async (aptId: string, percentage: number) => {
    await delay()
    _apartments = _apartments.map(a => {
      if (a.id !== aptId) return a
      const newRent = Number((Number(a.monthlyRent) * (1 + percentage / 100)).toFixed(2))
      return { ...a, monthlyRent: newRent, updatedAt: new Date().toISOString() }
    })
    const apt = _apartments.find(a => a.id === aptId)
    return apt ? buildApartmentView(apt) : null
  },
}

// ─── Tenants ───────────────────────────────────────────────────────────────────

function buildTenantView(tenant: Tenant) {
  const leases = _leases
    .filter(l => l.tenantId === tenant.id)
    .map(l => {
      const apt = _apartments.find(a => a.id === l.apartmentId)
      return { ...l, apartment: { ...apt, complex: complexOf(l.apartmentId) ? complexOf((apt as any)?.complexId) : null } }
    })
  return { ...tenant, leases }
}

export const tenantStore = {
  getAll: async () => {
    await delay()
    return _tenants.map(buildTenantView)
  },
  getOne: async (tenantId: string) => {
    await delay()
    const tenant = _tenants.find(t => t.id === tenantId)
    if (!tenant) return null
    const leases = _leases
      .filter(l => l.tenantId === tenantId)
      .map(l => {
        const apt = _apartments.find(a => a.id === l.apartmentId)
        return { ...l, apartment: { ...apt, complex: apt ? complexOf(apt.complexId) : null } }
      })
    return { ...tenant, leases }
  },
  getBalance: async (tenantId: string) => {
    await delay()
    const tenantPayments = _payments.filter(p => p.tenantId === tenantId)
    const totalCharged = tenantPayments.filter(p => p.status !== 'CANCELLED').reduce((s, p) => s + Number(p.amount), 0)
    const totalPaid = tenantPayments.filter(p => p.status === 'PAID').reduce((s, p) => s + Number(p.amount), 0)
    return { totalCharged, totalPaid, balance: totalCharged - totalPaid }
  },
  create: async (data: any) => {
    await delay()
    const tenant: Tenant = { ...data, id: id(), isActive: true, createdById: 'u1', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }
    _tenants = [..._tenants, tenant]
    return buildTenantView(tenant)
  },
  update: async (tenantId: string, data: any) => {
    await delay()
    _tenants = _tenants.map(t => t.id === tenantId ? { ...t, ...data, updatedAt: new Date().toISOString() } : t)
    const tenant = _tenants.find(t => t.id === tenantId)
    return tenant ? buildTenantView(tenant) : null
  },
  delete: async (tenantId: string) => {
    await delay()
    _tenants = _tenants.filter(t => t.id !== tenantId)
    return {}
  },
}

// ─── Leases ────────────────────────────────────────────────────────────────────

export const leaseStore = {
  getAll: async (apartmentId?: string) => {
    await delay()
    let list = _leases
    if (apartmentId) list = list.filter(l => l.apartmentId === apartmentId)
    return list.map(l => leaseOf(l.id)).filter(Boolean)
  },
  create: async (data: any) => {
    await delay()
    const lease: Lease = { ...data, id: id(), status: 'ACTIVE', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }
    _leases = [..._leases, lease]
    // Mark apartment as OCCUPIED
    _apartments = _apartments.map(a => a.id === data.apartmentId ? { ...a, status: 'OCCUPIED' as const, updatedAt: new Date().toISOString() } : a)
    return leaseOf(lease.id)
  },
  getPendingCharges: async (leaseId: string) => {
    await delay()
    const charges = _payments.filter(p => p.leaseId === leaseId && (p.status === 'PENDING' || p.status === 'OVERDUE'))
    const totalCharges = charges.reduce((s, p) => s + Number(p.amount), 0)
    return { charges, totalCharges }
  },
  terminate: async (leaseId: string, deductFromDeposit: boolean) => {
    await delay()
    const lease = _leases.find(l => l.id === leaseId)
    _leases = _leases.map(l => l.id === leaseId ? { ...l, status: 'TERMINATED' as const, updatedAt: new Date().toISOString() } : l)
    if (lease) {
      _apartments = _apartments.map(a => a.id === lease.apartmentId ? { ...a, status: 'AVAILABLE' as const, updatedAt: new Date().toISOString() } : a)
      if (deductFromDeposit) {
        _payments = _payments.map(p =>
          p.leaseId === leaseId && (p.status === 'PENDING' || p.status === 'OVERDUE')
            ? { ...p, status: 'CANCELLED' as const, updatedAt: new Date().toISOString() }
            : p
        )
      }
    }
    return {}
  },
  transfer: async (leaseId: string, data: any) => {
    await delay()
    const lease = _leases.find(l => l.id === leaseId)
    if (lease) {
      _leases = _leases.map(l => l.id === leaseId ? { ...l, status: 'TERMINATED' as const, updatedAt: new Date().toISOString() } : l)
      _apartments = _apartments.map(a => {
        if (a.id === lease.apartmentId) return { ...a, status: 'AVAILABLE' as const, updatedAt: new Date().toISOString() }
        if (a.id === data.newApartmentId) return { ...a, status: 'OCCUPIED' as const, updatedAt: new Date().toISOString() }
        return a
      })
      const newLease: Lease = { id: id(), apartmentId: data.newApartmentId, tenantId: lease.tenantId, startDate: data.startDate, endDate: data.endDate, monthlyRent: data.monthlyRent, depositAmount: data.depositAmount ?? 0, status: 'ACTIVE', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }
      _leases = [..._leases, newLease]
    }
    return {}
  },
}

// ─── Payments ──────────────────────────────────────────────────────────────────

function buildPaymentView(p: Payment) {
  const lease = _leases.find(l => l.id === p.leaseId)
  const apt = lease ? _apartments.find(a => a.id === lease.apartmentId) : null
  const tenant = _tenants.find(t => t.id === p.tenantId)
  return {
    ...p,
    tenant,
    lease: lease ? { ...lease, apartment: apt ? { ...apt, complex: complexOf(apt.complexId) } : null } : null,
    items: (p as any).items ?? [],
  }
}

export const paymentStore = {
  getAll: async (params?: { leaseId?: string; tenantId?: string; status?: string }) => {
    await delay()
    let list = _payments
    if (params?.leaseId) list = list.filter(p => p.leaseId === params.leaseId)
    if (params?.tenantId) list = list.filter(p => p.tenantId === params.tenantId)
    if (params?.status) list = list.filter(p => p.status === params.status)
    return list.map(buildPaymentView).reverse()
  },
  create: async (data: any) => {
    await delay()
    const lease = _leases.find(l => l.id === data.leaseId)
    const amount = data.items?.length
      ? data.items.reduce((s: number, i: any) => s + Number(i.amount), 0)
      : Number(data.amount ?? 0)
    const payment: Payment = { id: id(), leaseId: data.leaseId, tenantId: lease?.tenantId ?? '', amount, dueDate: data.dueDate, status: 'PENDING', type: data.type ?? 'RENT', notes: data.notes, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), ...(data.items?.length ? { items: data.items.map((i: any) => ({ ...i, id: id() })) } : {}) }
    _payments = [..._payments, payment]
    return buildPaymentView(payment)
  },
  update: async (paymentId: string, data: any) => {
    await delay()
    _payments = _payments.map(p => p.id === paymentId ? { ...p, ...data, updatedAt: new Date().toISOString() } : p)
    const p = _payments.find(p => p.id === paymentId)
    return p ? buildPaymentView(p) : null
  },
  delete: async (paymentId: string) => {
    await delay()
    _payments = _payments.filter(p => p.id !== paymentId)
    return {}
  },
  markAsPaid: async (paymentId: string, paidItemIds?: string[]) => {
    await delay()
    _payments = _payments.map(p => {
      if (p.id !== paymentId) return p
      const items = (p as any).items
      if (paidItemIds?.length && items?.length) {
        const updatedItems = items.map((i: any) => ({ ...i, paid: paidItemIds.includes(i.id) }))
        const allPaid = updatedItems.every((i: any) => i.paid)
        return { ...p, items: updatedItems, status: allPaid ? 'PAID' as const : 'PENDING' as const, paidDate: new Date().toISOString(), updatedAt: new Date().toISOString() }
      }
      return { ...p, status: 'PAID' as const, paidDate: new Date().toISOString(), updatedAt: new Date().toISOString() }
    })
    const p = _payments.find(p => p.id === paymentId)
    return p ? buildPaymentView(p) : null
  },
  markAsUnpaid: async (paymentId: string) => {
    await delay()
    _payments = _payments.map(p => p.id === paymentId ? { ...p, status: 'PENDING' as const, paidDate: undefined, updatedAt: new Date().toISOString() } : p)
    const p = _payments.find(p => p.id === paymentId)
    return p ? buildPaymentView(p) : null
  },
  downloadPdf: async (_paymentId: string) => {
    await delay(500)
    return new Blob(['Mock PDF content'], { type: 'application/pdf' })
  },
}

// ─── Maintenance ───────────────────────────────────────────────────────────────

function buildMaintenanceView(req: MaintenanceRequest) {
  const apt = _apartments.find(a => a.id === req.apartmentId)
  const tenant = req.tenantId ? _tenants.find(t => t.id === req.tenantId) : undefined
  return { ...req, apartment: apt ? { ...apt, complex: complexOf(apt.complexId) } : null, tenant: tenant ?? null, payments: [] }
}

export const maintenanceStore = {
  getAll: async (apartmentId?: string) => {
    await delay()
    let list = _maintenance
    if (apartmentId) list = list.filter(r => r.apartmentId === apartmentId)
    return list.map(buildMaintenanceView).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
  },
  getOne: async (reqId: string) => {
    await delay()
    const req = _maintenance.find(r => r.id === reqId)
    return req ? buildMaintenanceView(req) : null
  },
  create: async (data: any) => {
    await delay()
    const req: MaintenanceRequest = { ...data, id: id(), status: 'OPEN', priority: data.priority ?? 'MEDIUM', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }
    _maintenance = [req, ..._maintenance]
    return buildMaintenanceView(req)
  },
  update: async (reqId: string, data: any) => {
    await delay()
    _maintenance = _maintenance.map(r => {
      if (r.id !== reqId) return r
      const updated = { ...r, ...data, updatedAt: new Date().toISOString() }
      if (data.status === 'RESOLVED' && !r.resolvedAt) updated.resolvedAt = new Date().toISOString()
      return updated
    })
    const req = _maintenance.find(r => r.id === reqId)
    return req ? buildMaintenanceView(req) : null
  },
  delete: async (reqId: string) => {
    await delay()
    _maintenance = _maintenance.filter(r => r.id !== reqId)
    return {}
  },
}

// ─── Expenses ──────────────────────────────────────────────────────────────────

export const expenseStore = {
  getAll: async (complexId?: string, category?: string) => {
    await delay()
    let list = _expenses
    if (complexId) list = list.filter(e => e.complexId === complexId)
    if (category) list = list.filter(e => e.category === category)
    return [...list].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  },
  create: async (data: any) => {
    await delay()
    const expense: Expense = { ...data, id: id(), createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }
    _expenses = [expense, ..._expenses]
    return expense
  },
  update: async (expId: string, data: any) => {
    await delay()
    _expenses = _expenses.map(e => e.id === expId ? { ...e, ...data, updatedAt: new Date().toISOString() } : e)
    return _expenses.find(e => e.id === expId)
  },
  delete: async (expId: string) => {
    await delay()
    _expenses = _expenses.filter(e => e.id !== expId)
    return {}
  },
}

// ─── Dashboard ─────────────────────────────────────────────────────────────────

export const dashboardStore = {
  getStats: async () => {
    await delay()
    return {
      totalComplexes: _complexes.length,
      totalApartments: _apartments.length,
      availableApartments: _apartments.filter(a => a.status === 'AVAILABLE').length,
      occupiedApartments: _apartments.filter(a => a.status === 'OCCUPIED').length,
      totalTenants: _tenants.length,
      activeLeases: _leases.filter(l => l.status === 'ACTIVE').length,
      pendingPayments: _payments.filter(p => p.status === 'PENDING').length,
      overduePayments: _payments.filter(p => p.status === 'OVERDUE').length,
    }
  },
  getFinancialSummary: async () => {
    await delay()
    const totalRevenue = _payments.filter(p => p.status === 'PAID').reduce((s, p) => s + Number(p.amount), 0)
    const totalCharges = _payments.filter(p => p.status !== 'CANCELLED').reduce((s, p) => s + Number(p.amount), 0)
    const totalOutstanding = _payments.filter(p => p.status === 'PENDING' || p.status === 'OVERDUE').reduce((s, p) => s + Number(p.amount), 0)
    const totalExpenses = _expenses.reduce((s, e) => s + Number(e.amount), 0)
    return { totalRevenue, totalCharges, totalOutstanding, totalExpenses }
  },
}

// ─── Reports ───────────────────────────────────────────────────────────────────

export const reportsStore = {
  revenueByMonth: async (complexId?: string) => {
    await delay()
    const paid = _payments.filter(p => {
      if (p.status !== 'PAID' || !p.paidDate) return false
      if (!complexId) return true
      const lease = _leases.find(l => l.id === p.leaseId)
      const apt = lease ? _apartments.find(a => a.id === lease.apartmentId) : null
      return apt?.complexId === complexId
    })
    const byMonth: Record<string, number> = {}
    paid.forEach(p => {
      const month = (p.paidDate ?? p.dueDate).slice(0, 7)
      byMonth[month] = (byMonth[month] ?? 0) + Number(p.amount)
    })
    return Object.entries(byMonth)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([month, total]) => ({ month, total }))
  },
  revenueByComplex: async () => {
    await delay()
    return _complexes.map(c => {
      const aptIds = _apartments.filter(a => a.complexId === c.id).map(a => a.id)
      const leaseIds = _leases.filter(l => aptIds.includes(l.apartmentId)).map(l => l.id)
      const total = _payments.filter(p => leaseIds.includes(p.leaseId) && p.status === 'PAID').reduce((s, p) => s + Number(p.amount), 0)
      return { complexId: c.id, complexName: c.name, total }
    })
  },
  outstandingBalances: async () => {
    await delay()
    return _tenants.map(t => {
      const tenantPayments = _payments.filter(p => p.tenantId === t.id)
      const totalCharged = tenantPayments.filter(p => p.status !== 'CANCELLED').reduce((s, p) => s + Number(p.amount), 0)
      const totalPaid = tenantPayments.filter(p => p.status === 'PAID').reduce((s, p) => s + Number(p.amount), 0)
      return { tenantId: t.id, firstName: t.firstName, lastName: t.lastName, balance: totalCharged - totalPaid }
    }).filter(b => b.balance > 0)
  },
  maintenanceCosts: async (complexId?: string) => {
    await delay()
    const list = complexId ? _maintenance.filter(r => {
      const apt = _apartments.find(a => a.id === r.apartmentId)
      return apt?.complexId === complexId
    }) : _maintenance
    const total = list.reduce((s, r) => s + Number((r as any).repairCost ?? 0), 0)
    return { total }
  },
  expensesByCategory: async (complexId?: string) => {
    await delay()
    let list = _expenses
    if (complexId) list = list.filter(e => e.complexId === complexId)
    const byCategory: Record<string, number> = {}
    list.forEach(e => { byCategory[e.category] = (byCategory[e.category] ?? 0) + Number(e.amount) })
    return Object.entries(byCategory).map(([category, total]) => ({ category, total }))
  },
}

// ─── Billing ───────────────────────────────────────────────────────────────────

export const billingStore = {
  generateMonthlyRent: async (month: string) => {
    await delay(600)
    const activeLeases = _leases.filter(l => l.status === 'ACTIVE')
    let created = 0
    let skipped = 0
    for (const lease of activeLeases) {
      const dueDate = `${month}-01T00:00:00Z`
      const exists = _payments.some(p => p.leaseId === lease.id && p.dueDate.startsWith(month) && p.type === 'RENT')
      if (exists) { skipped++; continue }
      const payment: Payment = { id: id(), leaseId: lease.id, tenantId: lease.tenantId, amount: lease.monthlyRent, dueDate, status: 'PENDING', type: 'RENT', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }
      _payments = [..._payments, payment]
      created++
    }
    return { created, skipped }
  },
}
