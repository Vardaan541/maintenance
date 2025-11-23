'use client';

import { Bill } from '@/types';
import { useState, useEffect } from 'react';

interface BillFormProps {
  bills: Bill;
  onBillsChange: (bills: Bill) => void;
}

export default function BillForm({ bills, onBillsChange }: BillFormProps) {
  const [localBills, setLocalBills] = useState<Bill>(bills);

  useEffect(() => {
    setLocalBills(bills);
  }, [bills]);

  const calculateTotal = (water: number, electricity: number, gas: number) => {
    return water + electricity + gas;
  };

  const handleChange = (field: keyof Omit<Bill, 'total'>, value: string) => {
    const numValue = parseFloat(value) || 0;
    const newBills = {
      ...localBills,
      [field]: numValue,
      total: calculateTotal(
        field === 'water' ? numValue : localBills.water,
        field === 'electricity' ? numValue : localBills.electricity,
        field === 'gas' ? numValue : localBills.gas
      ),
    };
    setLocalBills(newBills);
    onBillsChange(newBills);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold mb-4">Bills</h3>
      
      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Water (₹)
          </label>
          <input
            type="number"
            value={localBills.water}
            onChange={(e) => handleChange('water', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            min="0"
            step="0.01"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Electricity (₹)
          </label>
          <input
            type="number"
            value={localBills.electricity}
            onChange={(e) => handleChange('electricity', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            min="0"
            step="0.01"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Gas (₹)
          </label>
          <input
            type="number"
            value={localBills.gas}
            onChange={(e) => handleChange('gas', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            min="0"
            step="0.01"
          />
        </div>

        <div className="pt-3 border-t border-gray-300">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-gray-700">Total:</span>
            <span className="text-2xl font-bold text-blue-600">
              ₹{localBills.total.toLocaleString('en-IN')}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

