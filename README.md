# Freelancer Invoice Dashboard

A modern, responsive invoice generator and billing dashboard built for freelancers and solo professionals. Manage clients, create professional invoices, and track payments all in one place.

![Dashboard Preview](/public/dashboard-preview.png)

## Features

### Dashboard Overview
- Monthly earnings summary with interactive charts
- Pending payments tracking
- Invoice status distribution
- Recent invoice activity feed
- Date range filtering
- Currency selection
- Dark/Light mode toggle

### Invoice Management
- Create professional invoices with a user-friendly form
- Add multiple line items with automatic calculations
- Preview invoices before sending
- Download as PDF or send directly to clients
- Track payment status (Paid, Pending, Overdue, Draft)

### Client Management
- Store and manage client information
- View client payment history and total billing
- Quick actions for creating invoices for specific clients
- Filter and search functionality

### Settings and Customization
- Business profile customization
- Invoice branding options
- Payment method configuration
- Notification preferences
- Theme customization (Light/Dark mode)

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Charts**: Recharts
- **Icons**: Lucide React
- **Theming**: next-themes

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/yourusername/freelancer-invoice-dashboard.git
   cd freelancer-invoice-dashboard
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. Run the development server:
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

\`\`\`
freelancer-invoice-dashboard/
├── app/                      # Next.js App Router
│   ├── clients/              # Clients pages
│   ├── dashboard/            # Dashboard pages
│   ├── invoices/             # Invoices pages
│   ├── settings/             # Settings pages
│   ├── globals.css           # Global styles
│   └── layout.tsx            # Root layout with ThemeProvider
├── components/               # React components
│   ├── clients/              # Client-related components
│   ├── dashboard/            # Dashboard-related components
│   ├── invoices/             # Invoice-related components
│   ├── layouts/              # Layout components
│   ├── settings/             # Settings-related components
│   ├── ui/                   # UI components (shadcn)
│   ├── date-range-picker.tsx # Date range picker component
│   └── theme-toggle.tsx      # Theme toggle component
├── lib/                      # Utility functions
├── public/                   # Static assets
└── README.md                 # Project documentation
\`\`\`

## Usage

### Dashboard

The dashboard provides an overview of your financial data, including total earnings, pending payments, paid invoices, and active clients. You can filter the data by date range and switch between different time periods.

### Invoices

The invoices section allows you to view all invoices with filtering options, create new invoices, preview invoices before sending, and track payment status.

### Clients

The clients section allows you to manage your client information, view client payment history, and create invoices for specific clients.

### Settings

The settings section allows you to customize your business profile, invoice branding, payment methods, and notification preferences.

## Theme Toggle

The application supports both light and dark modes. You can toggle between them by clicking the sun/moon icon in the top navigation bar.

## Responsive Design

The application is fully responsive and works well on desktop computers, tablets, and mobile phones.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Made with ❤️ for freelancers and solo professionals
