"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Edit, FileText, MoreHorizontal, Plus, Search, Trash } from "lucide-react"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const clients = [
  {
    id: "1",
    name: "Acme Inc.",
    email: "contact@acme.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main St, Anytown, CA 12345",
    invoiceCount: 5,
    totalBilled: 4500.0,
    status: "active",
  },
  {
    id: "2",
    name: "Globex Corp",
    email: "info@globex.com",
    phone: "+1 (555) 987-6543",
    address: "456 Market St, Somewhere, NY 67890",
    invoiceCount: 3,
    totalBilled: 2800.0,
    status: "active",
  },
  {
    id: "3",
    name: "Stark Industries",
    email: "hello@stark.com",
    phone: "+1 (555) 456-7890",
    address: "789 Tech Blvd, Innovation, CA 54321",
    invoiceCount: 7,
    totalBilled: 12500.0,
    status: "active",
  },
  {
    id: "4",
    name: "Wayne Enterprises",
    email: "business@wayne.com",
    phone: "+1 (555) 321-0987",
    address: "1 Wayne Tower, Gotham, NJ 08901",
    invoiceCount: 4,
    totalBilled: 8700.0,
    status: "inactive",
  },
  {
    id: "5",
    name: "Hooli",
    email: "contact@hooli.com",
    phone: "+1 (555) 765-4321",
    address: "101 Silicon Ave, Valley, CA 94025",
    invoiceCount: 2,
    totalBilled: 3200.0,
    status: "active",
  },
  {
    id: "6",
    name: "Pied Piper",
    email: "hello@piedpiper.com",
    phone: "+1 (555) 234-5678",
    address: "22 Startup Way, Incubator, CA 94305",
    invoiceCount: 1,
    totalBilled: 1500.0,
    status: "active",
  },
  {
    id: "7",
    name: "Dunder Mifflin",
    email: "sales@dundermifflin.com",
    phone: "+1 (555) 876-5432",
    address: "1725 Slough Ave, Scranton, PA 18505",
    invoiceCount: 6,
    totalBilled: 4200.0,
    status: "inactive",
  },
]

export default function ClientList() {
  const [searchTerm, setSearchTerm] = useState("")
  const [isAddClientOpen, setIsAddClientOpen] = useState(false)
  const [isEditClientOpen, setIsEditClientOpen] = useState(false)
  const [selectedClient, setSelectedClient] = useState<(typeof clients)[0] | null>(null)
  const [newClient, setNewClient] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  })

  const filteredClients = clients.filter((client) => {
    return (
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.email.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })

  const handleAddClient = () => {
    // In a real app, this would add the client to the database
    console.log("Adding client:", newClient)
    setIsAddClientOpen(false)
    setNewClient({
      name: "",
      email: "",
      phone: "",
      address: "",
    })
  }

  const handleEditClient = () => {
    //  In a real app, this would update the client in the database
    console.log("Editing client:", selectedClient)
    setIsEditClientOpen(false)
    setSelectedClient(null)
  }

  const handleDeleteClient = (id: string) => {
    // In a real app, this would delete the client from the database
    console.log("Deleting client with ID:", id)
  }

  return (
    <div className="grid gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Clients</h1>
        <Button size="sm" onClick={() => setIsAddClientOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Add Client
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Client Management</CardTitle>
          <CardDescription>Manage your client information and history</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search clients..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="mt-6 overflow-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Invoices</TableHead>
                  <TableHead>Total Billed</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredClients.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={7} className="h-24 text-center">
                      No clients found.
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredClients.map((client) => (
                    <TableRow key={client.id}>
                      <TableCell className="font-medium">{client.name}</TableCell>
                      <TableCell>{client.email}</TableCell>
                      <TableCell>{client.phone}</TableCell>
                      <TableCell>{client.invoiceCount}</TableCell>
                      <TableCell>${client.totalBilled.toFixed(2)}</TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={
                            client.status === "active"
                              ? "border-emerald-500 text-emerald-500"
                              : "border-gray-500 text-gray-500"
                          }
                        >
                          {client.status.charAt(0).toUpperCase() + client.status.slice(1)}
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
                            <DropdownMenuItem
                              onClick={() => {
                                setSelectedClient(client)
                                setIsEditClientOpen(true)
                              }}
                            >
                              <Edit className="mr-2 h-4 w-4" />
                              Edit Client
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <FileText className="mr-2 h-4 w-4" />
                              New Invoice
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-500" onClick={() => handleDeleteClient(client.id)}>
                              <Trash className="mr-2 h-4 w-4" />
                              Delete Client
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Add Client Dialog */}
      <Dialog open={isAddClientOpen} onOpenChange={setIsAddClientOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add New Client</DialogTitle>
            <DialogDescription>Enter the client's information to add them to your client list.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Client Name</Label>
              <Input
                id="name"
                value={newClient.name}
                onChange={(e) => setNewClient({ ...newClient, name: e.target.value })}
                placeholder="Acme Inc."
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={newClient.email}
                onChange={(e) => setNewClient({ ...newClient, email: e.target.value })}
                placeholder="contact@acme.com"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                value={newClient.phone}
                onChange={(e) => setNewClient({ ...newClient, phone: e.target.value })}
                placeholder="+1 (555) 123-4567"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="address">Address</Label>
              <Textarea
                id="address"
                value={newClient.address}
                onChange={(e) => setNewClient({ ...newClient, address: e.target.value })}
                placeholder="123 Main St, Anytown, CA 12345"
                rows={3}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddClientOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddClient}>Add Client</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Client Dialog */}
      <Dialog open={isEditClientOpen} onOpenChange={setIsEditClientOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Edit Client</DialogTitle>
            <DialogDescription>Update the client's information.</DialogDescription>
          </DialogHeader>
          {selectedClient && (
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="edit-name">Client Name</Label>
                <Input
                  id="edit-name"
                  value={selectedClient.name}
                  onChange={(e) => setSelectedClient({ ...selectedClient, name: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-email">Email</Label>
                <Input
                  id="edit-email"
                  type="email"
                  value={selectedClient.email}
                  onChange={(e) => setSelectedClient({ ...selectedClient, email: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-phone">Phone</Label>
                <Input
                  id="edit-phone"
                  value={selectedClient.phone}
                  onChange={(e) => setSelectedClient({ ...selectedClient, phone: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-address">Address</Label>
                <Textarea
                  id="edit-address"
                  value={selectedClient.address}
                  onChange={(e) => setSelectedClient({ ...selectedClient, address: e.target.value })}
                  rows={3}
                />
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditClientOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleEditClient}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
