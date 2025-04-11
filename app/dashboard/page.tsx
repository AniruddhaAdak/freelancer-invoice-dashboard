import type { Metadata } from "next"
import DashboardOverview from "@/components/dashboard/dashboard-overview"
import DashboardLayout from "@/components/layouts/dashboard-layout"

export const metadata: Metadata = {
  title: "Freelancer Invoice Manager – Built for Simplicity",
  description: "Generate and manage invoices easily with this dashboard template for freelancers.",
}

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <DashboardOverview />
    </DashboardLayout>
  )
}
