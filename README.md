# WhatsApp Billing Admin Dashboard

A complete admin-side website for managing WhatsApp billing bot operations. Admins can view apartments, manage bills, send bills via WhatsApp, and track payments.

## Features

### Core Features
- **Dashboard View**: Grid display of all apartments with color-coded payment status
- **Apartment Detail View**: Complete bill management interface
- **Bill Editing**: Edit water, electricity, and gas bills with auto-calculated totals
- **Payment Tracking**: Mark bills as paid/unpaid with visual indicators
- **WhatsApp Integration**: Send bills and reminders via WhatsApp (API stubs)
- **Alerts System**: View overdue payments and pending actions
- **Contact Management**: View tenant contact information

### Extra Features
- **Monthly Bill History**: View historical bills for each apartment
- **CSV Export**: Export bill history to CSV format
- **Admin Login**: Mock authentication system
- **Send Reminder**: Send payment reminders via WhatsApp
- **Search & Filter**: Search by flat number and filter by payment status
- **Responsive Design**: Mobile-friendly interface

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **TailwindCSS** - Utility-first CSS framework
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Login

- Navigate to `/login`
- Enter any username and password (mock authentication)
- You'll be redirected to the dashboard

## Project Structure

```
whatsappmaintenance1.0/
├── app/
│   ├── api/              # API route stubs
│   │   ├── send-bill/
│   │   ├── send-reminder/
│   │   └── mark-paid/
│   ├── apartment/[id]/   # Apartment detail page
│   ├── login/            # Login page
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Dashboard page
├── components/           # React components
│   ├── Sidebar.tsx
│   ├── ApartmentCard.tsx
│   ├── SearchBar.tsx
│   ├── BillForm.tsx
│   ├── AlertsSection.tsx
│   ├── ContactSection.tsx
│   └── BillHistory.tsx
├── data/
│   └── mockData.ts       # Mock apartment data
├── types/
│   └── index.ts          # TypeScript type definitions
└── package.json
```

## Usage

### Dashboard
- View all apartments in a grid layout
- Green tiles = Paid, Red tiles = Unpaid
- Click on any apartment to view details
- Use search bar to find specific apartments
- Filter by payment status (All/Paid/Unpaid)

### Apartment Detail
- **Edit Bills**: Modify water, electricity, and gas amounts
- **View Alerts**: See overdue payments and warnings
- **Contact Info**: View tenant details
- **Send Bill**: Send monthly bill via WhatsApp
- **Send Reminder**: Send payment reminder
- **Mark as Paid**: Update payment status
- **Bill History**: View past bills and export to CSV

## API Routes

All API routes are stubbed and ready for integration:

- `POST /api/send-bill` - Send bill via WhatsApp
- `POST /api/send-reminder` - Send payment reminder
- `POST /api/mark-paid` - Mark bill as paid

## Color Scheme

- **Paid Status**: `#0f0` (Green)
- **Unpaid Status**: `#f00` (Red)
- **Primary Actions**: Blue (`bg-blue-600`)
- **Success Actions**: Green (`bg-green-600`)
- **Warning Actions**: Yellow (`bg-yellow-600`)

## Future Enhancements

- Real WhatsApp API integration (Twilio, WhatsApp Business API)
- Database integration (PostgreSQL, MongoDB)
- Real authentication system
- Payment gateway integration
- Email notifications
- Advanced reporting and analytics
- Multi-admin support with roles
- Real-time updates

## Development

### Build for Production

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## License

This project is for demonstration purposes.

