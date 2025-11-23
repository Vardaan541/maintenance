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
    <div className="space-y-6">
      <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2 neon-white">
        <div className="w-1 h-6 bg-white rounded-full"></div>
        Bills
      </h3>
      
      <div className="space-y-4">
        <div className="group">
          <label className="block text-sm font-semibold text-white/90 mb-2">
            💧 Water (₹)
          </label>
          <input
            type="number"
            value={localBills.water}
            onChange={(e) => handleChange('water', e.target.value)}
            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            min="0"
            step="0.01"
            placeholder="0.00"
          />
        </div>

        <div className="group">
          <label className="block text-sm font-semibold text-white/90 mb-2">
            ⚡ Electricity (₹)
          </label>
          <input
            type="number"
            value={localBills.electricity}
            onChange={(e) => handleChange('electricity', e.target.value)}
            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            min="0"
            step="0.01"
            placeholder="0.00"
          />
        </div>

        <div className="group">
          <label className="block text-sm font-semibold text-white/90 mb-2">
            🔥 Gas (₹)
          </label>
          <input
            type="number"
            value={localBills.gas}
            onChange={(e) => handleChange('gas', e.target.value)}
            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            min="0"
            step="0.01"
            placeholder="0.00"
          />
        </div>

        <div className="pt-4 mt-4 border-t border-white/20">
          <div className="flex justify-between items-center p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm">
            <span className="text-lg font-semibold text-white">Total:</span>
            <span className="text-3xl font-bold text-white neon-white">
              ₹{localBills.total.toLocaleString('en-IN')}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

