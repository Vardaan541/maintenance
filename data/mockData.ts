import { Apartment } from '@/types';

export const mockApartments: Apartment[] = [
  {
    id: '1',
    flatNumber: '101',
    isPaid: true,
    bills: {
      water: 500,
      electricity: 1200,
      gas: 300,
      total: 2000,
    },
    tenant: {
      name: 'Rajesh Kumar',
      phone: '+91 98765 43210',
      email: 'rajesh@example.com',
    },
    alerts: [],
    billHistory: [
      {
        month: '2024-01',
        bills: { water: 500, electricity: 1200, gas: 300, total: 2000 },
        isPaid: true,
        paidDate: '2024-01-15',
      },
      {
        month: '2023-12',
        bills: { water: 480, electricity: 1150, gas: 280, total: 1910 },
        isPaid: true,
        paidDate: '2023-12-18',
      },
    ],
  },
  {
    id: '2',
    flatNumber: '102',
    isPaid: false,
    bills: {
      water: 550,
      electricity: 1300,
      gas: 320,
      total: 2170,
    },
    tenant: {
      name: 'Priya Sharma',
      phone: '+91 98765 43211',
      email: 'priya@example.com',
    },
    alerts: ['Payment overdue by 5 days'],
    billHistory: [
      {
        month: '2024-01',
        bills: { water: 550, electricity: 1300, gas: 320, total: 2170 },
        isPaid: false,
      },
      {
        month: '2023-12',
        bills: { water: 520, electricity: 1250, gas: 300, total: 2070 },
        isPaid: true,
        paidDate: '2023-12-20',
      },
    ],
  },
  {
    id: '3',
    flatNumber: '201',
    isPaid: true,
    bills: {
      water: 480,
      electricity: 1100,
      gas: 280,
      total: 1860,
    },
    tenant: {
      name: 'Amit Patel',
      phone: '+91 98765 43212',
      email: 'amit@example.com',
    },
    alerts: [],
    billHistory: [
      {
        month: '2024-01',
        bills: { water: 480, electricity: 1100, gas: 280, total: 1860 },
        isPaid: true,
        paidDate: '2024-01-10',
      },
    ],
  },
  {
    id: '4',
    flatNumber: '202',
    isPaid: false,
    bills: {
      water: 600,
      electricity: 1400,
      gas: 350,
      total: 2350,
    },
    tenant: {
      name: 'Sneha Reddy',
      phone: '+91 98765 43213',
      email: 'sneha@example.com',
    },
    alerts: ['Payment pending', 'Bill not sent'],
    billHistory: [
      {
        month: '2024-01',
        bills: { water: 600, electricity: 1400, gas: 350, total: 2350 },
        isPaid: false,
      },
    ],
  },
  {
    id: '5',
    flatNumber: '301',
    isPaid: true,
    bills: {
      water: 520,
      electricity: 1250,
      gas: 310,
      total: 2080,
    },
    tenant: {
      name: 'Vikram Singh',
      phone: '+91 98765 43214',
      email: 'vikram@example.com',
    },
    alerts: [],
    billHistory: [
      {
        month: '2024-01',
        bills: { water: 520, electricity: 1250, gas: 310, total: 2080 },
        isPaid: true,
        paidDate: '2024-01-12',
      },
    ],
  },
  {
    id: '6',
    flatNumber: '302',
    isPaid: false,
    bills: {
      water: 490,
      electricity: 1150,
      gas: 290,
      total: 1930,
    },
    tenant: {
      name: 'Anjali Mehta',
      phone: '+91 98765 43215',
      email: 'anjali@example.com',
    },
    alerts: ['Payment overdue by 3 days'],
    billHistory: [
      {
        month: '2024-01',
        bills: { water: 490, electricity: 1150, gas: 290, total: 1930 },
        isPaid: false,
      },
    ],
  },
  {
    id: '7',
    flatNumber: '401',
    isPaid: true,
    bills: {
      water: 510,
      electricity: 1180,
      gas: 295,
      total: 1985,
    },
    tenant: {
      name: 'Rohit Verma',
      phone: '+91 98765 43216',
      email: 'rohit@example.com',
    },
    alerts: [],
    billHistory: [
      {
        month: '2024-01',
        bills: { water: 510, electricity: 1180, gas: 295, total: 1985 },
        isPaid: true,
        paidDate: '2024-01-14',
      },
    ],
  },
  {
    id: '8',
    flatNumber: '402',
    isPaid: false,
    bills: {
      water: 570,
      electricity: 1350,
      gas: 340,
      total: 2260,
    },
    tenant: {
      name: 'Kavita Nair',
      phone: '+91 98765 43217',
      email: 'kavita@example.com',
    },
    alerts: ['Payment overdue by 7 days', 'Multiple reminders sent'],
    billHistory: [
      {
        month: '2024-01',
        bills: { water: 570, electricity: 1350, gas: 340, total: 2260 },
        isPaid: false,
      },
    ],
  },
];

