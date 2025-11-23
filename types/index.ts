export interface Bill {
  water: number;
  electricity: number;
  gas: number;
  total: number;
}

export interface Apartment {
  id: string;
  flatNumber: string;
  isPaid: boolean;
  bills: Bill;
  tenant: {
    name: string;
    phone: string;
    email?: string;
  };
  alerts: string[];
  billHistory: {
    month: string;
    bills: Bill;
    isPaid: boolean;
    paidDate?: string;
  }[];
}

export interface Alert {
  type: 'overdue' | 'pending' | 'warning';
  message: string;
  date: string;
}

