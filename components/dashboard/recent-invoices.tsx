"use client"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, FileText, MoreHorizontal } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const invoices = [
  {
    id: "INV-001",
    client: "Acme Inc.",
    amount: 1200.0,
    status: "paid",
    date: "2023-04-15",
  },
  {
    id: "INV-002",
    client: "Globex Corp",
    amount: 850.0,
    status: "pending",
    date: "2023-04-20",
  },
  {
    id: "INV-003",
    client: "Stark Industries",
    amount: 3200.0,
    status: "paid",
    date: "2023-04-25",
  },
  {
    id: "INV-004",
    client: "Wayne Enterprises",
    amount: 1500.0,
    status: "overdue",
    date: "2023-04-10",
  },
  {
    id: "INV-005",
    client: "Hooli",
    amount: 2800.0,
    status: "paid",
    date: "2023-04-30",
  },
]

export function RecentInvoices() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Client</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell className="font-medium">{invoice.id}</TableCell>
            <TableCell>{invoice.client}</TableCell>
            <TableCell>{new Date(invoice.date).toLocaleDateString()}</TableCell>
            <TableCell>${invoice.amount.toFixed(2)}</TableCell>
            <TableCell>
              <Badge
                variant="outline"
                className={
                  invoice.status === "paid"
                    ? "border-emerald-500 text-emerald-500"
                    : invoice.status === "pending"
                      ? "border-amber-500 text-amber-500"
                      : "border-red-500 text-red-500"
                }
              >
                {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
              </Badge>
            </TableCell>
            <TableCell className="text-right">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuItem>
                    <Eye className="mr-2 h-4 w-4" />
                    View
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <FileText className="mr-2 h-4 w-4" />
                    Download PDF
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Mark as Paid</DropdownMenuItem>
                  <DropdownMenuItem className="text-red-500">Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
