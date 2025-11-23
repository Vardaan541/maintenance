# Quick Start Guide

## Installation & Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open browser:**
   Navigate to `http://localhost:3000`

4. **Login:**
   - Go to `/login` or you'll be redirected automatically
   - Enter any username and password (mock authentication)
   - Click "Login"

## Key Features to Test

### Dashboard (`/`)
- View all apartments in a grid
- Green = Paid, Red = Unpaid
- Click any apartment card to view details
- Use search bar to filter by flat number
- Use filter buttons (All/Paid/Unpaid)

### Apartment Detail (`/apartment/[id]`)
- **Edit Bills**: Change water, electricity, gas amounts
- **Auto-calculate Total**: Total updates automatically
- **View Alerts**: See payment warnings
- **Contact Info**: View tenant details
- **Send Bill**: Click "Send Bill via WhatsApp" button
- **Send Reminder**: Click "Send Reminder" button
- **Mark as Paid**: Update payment status
- **Bill History**: Scroll down to see monthly history
- **Export CSV**: Click "Export CSV" in bill history section

## Mock Data

The app comes with 8 sample apartments:
- Flats 101, 201, 301, 401: Paid (Green)
- Flats 102, 202, 302, 402: Unpaid (Red)

## API Endpoints

All endpoints are stubbed and ready for integration:

- `POST /api/send-bill` - Send bill via WhatsApp
- `POST /api/send-reminder` - Send payment reminder
- `POST /api/mark-paid` - Mark bill as paid

## Color Codes

- **Green (#0f0)**: Paid status
- **Red (#f00)**: Unpaid status
- **Blue**: Primary actions
- **Yellow**: Warning/reminder actions

## Troubleshooting

**Port already in use?**
```bash
# Use a different port
npm run dev -- -p 3001
```

**Build errors?**
```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run dev
```

## Next Steps

1. Integrate real WhatsApp API (Twilio, WhatsApp Business API)
2. Connect to a database (PostgreSQL, MongoDB)
3. Implement real authentication
4. Add payment gateway integration
5. Deploy to production (Vercel, AWS, etc.)

