import type { Metadata } from "next"
import SettingsForm from "@/components/settings/settings-form"
import DashboardLayout from "@/components/layouts/dashboard-layout"

export const metadata: Metadata = {
  title: "Settings | Freelancer Invoice Manager",
  description: "Customize your invoice settings and business information.",
}

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <SettingsForm />
    </DashboardLayout>
  )
}
