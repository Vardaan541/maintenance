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
    <div className="glass rounded-2xl p-6 shadow-2xl backdrop-blur-xl border border-white/10">
      <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2 neon-white">
        <div className="w-10 h-10 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center">
          <User className="text-white" size={20} />
        </div>
        <div className="w-1 h-6 bg-white rounded-full"></div>
        Contact
      </h3>
      <div className="space-y-3">
        <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors border border-white/5">
          <User className="text-white/80" size={18} />
          <span className="font-semibold text-white">{tenant.name}</span>
        </div>
        <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors border border-white/5">
          <Phone className="text-white/80" size={18} />
          <a href={`tel:${tenant.phone}`} className="text-white hover:text-white/80 transition-colors font-medium">
            {tenant.phone}
          </a>
        </div>
        {tenant.email && (
          <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors border border-white/5">
            <Mail className="text-white/80" size={18} />
            <a href={`mailto:${tenant.email}`} className="text-white hover:text-white/80 transition-colors font-medium">
              {tenant.email}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

