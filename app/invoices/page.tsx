import type { Metadata } from "next"
import InvoiceList from "@/components/invoices/invoice-list"
import DashboardLayout from "@/components/layouts/dashboard-layout"

export const metadata: Metadata = {
  title: "Invoices | Freelancer Invoice Manager",
  description: "Manage your invoices and track payments.",
}

export default function InvoicesPage() {
  return (
    <DashboardLayout>
      <InvoiceList />
    </DashboardLayout>
  )
}
