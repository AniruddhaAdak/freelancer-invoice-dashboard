"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Download, Plus, Save, Send, Trash } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { InvoicePreview } from "@/components/invoices/invoice-preview"

interface InvoiceItem {
  id: string
  description: string
  quantity: number
  rate: number
  amount: number
}

export default function InvoiceGenerator() {
  const [activeTab, setActiveTab] = useState("edit")
  const [invoiceNumber, setInvoiceNumber] = useState("INV-001")
  const [clientName, setClientName] = useState("")
  const [clientEmail, setClientEmail] = useState("")
  const [clientAddress, setClientAddress] = useState("")
  const [invoiceDate, setInvoiceDate] = useState(new Date().toISOString().split("T")[0])
  const [dueDate, setDueDate] = useState(new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split("T")[0])
  const [items, setItems] = useState<InvoiceItem[]>([
    {
      id: "1",
      description: "",
      quantity: 1,
      rate: 0,
      amount: 0,
    },
  ])
  const [notes, setNotes] = useState("")
  const [taxRate, setTaxRate] = useState(0)

  const addItem = () => {
    setItems([
      ...items,
      {
        id: String(items.length + 1),
        description: "",
        quantity: 1,
        rate: 0,
        amount: 0,
      },
    ])
  }

  const removeItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id))
  }

  const updateItem = (id: string, field: keyof InvoiceItem, value: string | number) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          const updatedItem = { ...item, [field]: value }

          // Recalculate amount if quantity or rate changes
          if (field === "quantity" || field === "rate") {
            updatedItem.amount = Number(updatedItem.quantity) * Number(updatedItem.rate)
          }

          return updatedItem
        }
        return item
      }),
    )
  }

  const subtotal = items.reduce((sum, item) => sum + item.amount, 0)
  const taxAmount = (subtotal * taxRate) / 100
  const total = subtotal + taxAmount

  return (
    <div className="grid gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" asChild>
            <Link href="/invoices">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Back</span>
            </Link>
          </Button>
          <h1 className="text-2xl font-bold tracking-tight">Create Invoice</h1>
        </div>
        <div className="flex items-center gap-2">
          <Button variant={activeTab === "edit" ? "default" : "outline"} size="sm" onClick={() => setActiveTab("edit")}>
            Edit
          </Button>
          <Button
            variant={activeTab === "preview" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveTab("preview")}
          >
            Preview
          </Button>
        </div>
      </div>

      {activeTab === "edit" ? (
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Invoice Details</CardTitle>
              <CardDescription>Enter the basic invoice information</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="invoice-number">Invoice Number</Label>
                  <Input id="invoice-number" value={invoiceNumber} onChange={(e) => setInvoiceNumber(e.target.value)} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="invoice-date">Invoice Date</Label>
                  <Input
                    id="invoice-date"
                    type="date"
                    value={invoiceDate}
                    onChange={(e) => setInvoiceDate(e.target.value)}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="due-date">Due Date</Label>
                  <Input id="due-date" type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="tax-rate">Tax Rate (%)</Label>
                  <Input
                    id="tax-rate"
                    type="number"
                    min="0"
                    max="100"
                    value={taxRate}
                    onChange={(e) => setTaxRate(Number(e.target.value))}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Client Information</CardTitle>
              <CardDescription>Enter the client's details</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="client-name">Client Name</Label>
                <Input id="client-name" value={clientName} onChange={(e) => setClientName(e.target.value)} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="client-email">Client Email</Label>
                <Input
                  id="client-email"
                  type="email"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="client-address">Client Address</Label>
                <Textarea
                  id="client-address"
                  value={clientAddress}
                  onChange={(e) => setClientAddress(e.target.value)}
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader className="flex flex-row items-center">
              <div className="grid gap-1">
                <CardTitle>Invoice Items</CardTitle>
                <CardDescription>Add the services or products you're billing for</CardDescription>
              </div>
              <Button variant="outline" size="sm" className="ml-auto" onClick={addItem}>
                <Plus className="mr-2 h-4 w-4" />
                Add Item
              </Button>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid grid-cols-12 gap-4 text-sm font-medium text-muted-foreground">
                  <div className="col-span-6">Description</div>
                  <div className="col-span-2">Quantity</div>
                  <div className="col-span-2">Rate</div>
                  <div className="col-span-1">Amount</div>
                  <div className="col-span-1"></div>
                </div>
                {items.map((item) => (
                  <div key={item.id} className="grid grid-cols-12 gap-4 items-center">
                    <div className="col-span-6">
                      <Input
                        placeholder="Item description"
                        value={item.description}
                        onChange={(e) => updateItem(item.id, "description", e.target.value)}
                      />
                    </div>
                    <div className="col-span-2">
                      <Input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => updateItem(item.id, "quantity", Number(e.target.value))}
                      />
                    </div>
                    <div className="col-span-2">
                      <Input
                        type="number"
                        min="0"
                        step="0.01"
                        value={item.rate}
                        onChange={(e) => updateItem(item.id, "rate", Number(e.target.value))}
                      />
                    </div>
                    <div className="col-span-1 font-medium">${(item.quantity * item.rate).toFixed(2)}</div>
                    <div className="col-span-1 text-right">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeItem(item.id)}
                        disabled={items.length === 1}
                      >
                        <Trash className="h-4 w-4" />
                        <span className="sr-only">Remove item</span>
                      </Button>
                    </div>
                  </div>
                ))}
                <Separator />
                <div className="grid grid-cols-12 gap-4 text-sm">
                  <div className="col-span-9 text-right font-medium">Subtotal:</div>
                  <div className="col-span-2 font-medium">${subtotal.toFixed(2)}</div>
                  <div className="col-span-1"></div>
                </div>
                <div className="grid grid-cols-12 gap-4 text-sm">
                  <div className="col-span-9 text-right font-medium">Tax ({taxRate}%):</div>
                  <div className="col-span-2 font-medium">${taxAmount.toFixed(2)}</div>
                  <div className="col-span-1"></div>
                </div>
                <div className="grid grid-cols-12 gap-4 text-sm">
                  <div className="col-span-9 text-right font-medium">Total:</div>
                  <div className="col-span-2 font-bold text-lg">${total.toFixed(2)}</div>
                  <div className="col-span-1"></div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Additional Notes</CardTitle>
              <CardDescription>Add any additional information or payment terms</CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="e.g., Payment terms, bank details, or any other notes"
                rows={5}
              />
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">
                <Save className="mr-2 h-4 w-4" />
                Save Draft
              </Button>
              <div className="flex gap-2">
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
                <Button>
                  <Send className="mr-2 h-4 w-4" />
                  Send Invoice
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      ) : (
        <InvoicePreview
          invoiceNumber={invoiceNumber}
          invoiceDate={invoiceDate}
          dueDate={dueDate}
          clientName={clientName}
          clientEmail={clientEmail}
          clientAddress={clientAddress}
          items={items}
          notes={notes}
          taxRate={taxRate}
          subtotal={subtotal}
          taxAmount={taxAmount}
          total={total}
        />
      )}
    </div>
  )
}
