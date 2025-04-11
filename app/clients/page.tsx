import type { Metadata } from "next"
import ClientList from "@/components/clients/client-list"
import DashboardLayout from "@/components/layouts/dashboard-layout"

export const metadata: Metadata = {
  title: "Clients | Freelancer Invoice Manager",
  description: "Manage your client information and history.",
}

export default function ClientsPage() {
  return (
    <DashboardLayout>
      <ClientList />
    </DashboardLayout>
  )
}
