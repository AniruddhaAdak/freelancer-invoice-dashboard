import type { Metadata } from "next"
import InvoiceGenerator from "@/components/invoices/invoice-generator"
import DashboardLayout from "@/components/layouts/dashboard-layout"

export const metadata: Metadata = {
  title: "Create Invoice | Freelancer Invoice Manager",
  description: "Create a new invoice for your clients.",
}

export default function NewInvoicePage() {
  return (
    <DashboardLayout>
      <InvoiceGenerator />
    </DashboardLayout>
  )
}
