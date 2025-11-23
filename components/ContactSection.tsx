'use client';

import { Phone, Mail, User } from 'lucide-react';

interface ContactSectionProps {
  tenant: {
    name: string;
    phone: string;
    email?: string;
  };
}

export default function ContactSection({ tenant }: ContactSectionProps) {
  return (
    <div className="bg-gray-50 rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
        <User size={20} />
        Contact
      </h3>
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-gray-700">
          <User size={16} />
          <span className="font-medium">{tenant.name}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-700">
          <Phone size={16} />
          <a href={`tel:${tenant.phone}`} className="hover:text-blue-600">
            {tenant.phone}
          </a>
        </div>
        {tenant.email && (
          <div className="flex items-center gap-2 text-gray-700">
            <Mail size={16} />
            <a href={`mailto:${tenant.email}`} className="hover:text-blue-600">
              {tenant.email}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

