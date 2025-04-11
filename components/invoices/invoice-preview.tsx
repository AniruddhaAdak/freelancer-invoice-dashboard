"use client"

import { Download, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

interface InvoiceItem {
  id: string
  description: string
  quantity: number
  rate: number
  amount: number
}

interface InvoicePreviewProps {
  invoiceNumber: string
  invoiceDate: string
  dueDate: string
  clientName: string
  clientEmail: string
  clientAddress: string
  items: InvoiceItem[]
  notes: string
  taxRate: number
  subtotal: number
  taxAmount: number
  total: number
}

export function InvoicePreview({
  invoiceNumber,
  invoiceDate,
  dueDate,
  clientName,
  clientEmail,
  clientAddress,
  items,
  notes,
  taxRate,
  subtotal,
  taxAmount,
  total,
}: InvoicePreviewProps) {
  return (
    <div className="grid gap-6">
      <Card className="mx-auto w-full max-w-4xl">
        <CardContent className="p-8">
          <div className="grid gap-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="text-2xl font-bold text-primary">Aniruddha Adak</h2>
                <p className="text-sm text-muted-foreground">aniruddhadak80@gmail.com</p>
                <p className="text-sm text-muted-foreground">Freelance Developer</p>
              </div>
              <div className="text-right">
                <h1 className="text-3xl font-bold">INVOICE</h1>
                <p className="text-sm font-medium">{invoiceNumber}</p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="mb-2 text-sm font-medium text-muted-foreground">Bill To:</h3>
                <p className="font-medium">{clientName || "Client Name"}</p>
                <p className="text-sm text-muted-foreground">{clientEmail || "client@example.com"}</p>
                <p className="whitespace-pre-line text-sm text-muted-foreground">
                  {clientAddress || "Client Address\nCity, State, ZIP\nCountry"}
                </p>
              </div>
              <div className="grid gap-2 text-sm sm:text-right">
                <div className="grid grid-cols-2">
                  <span className="font-medium text-muted-foreground">Invoice Date:</span>
                  <span>{new Date(invoiceDate).toLocaleDateString()}</span>
                </div>
                <div className="grid grid-cols-2">
                  <span className="font-medium text-muted-foreground">Due Date:</span>
                  <span>{new Date(dueDate).toLocaleDateString()}</span>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b text-left text-sm font-medium text-muted-foreground">
                    <th className="pb-2">Description</th>
                    <th className="pb-2 text-right">Qty</th>
                    <th className="pb-2 text-right">Rate</th>
                    <th className="pb-2 text-right">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.id} className="border-b">
                      <td className="py-3">{item.description || "Item description"}</td>
                      <td className="py-3 text-right">{item.quantity}</td>
                      <td className="py-3 text-right">${item.rate.toFixed(2)}</td>
                      <td className="py-3 text-right">${item.amount.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex flex-col items-end gap-2">
              <div className="grid w-full max-w-xs grid-cols-2 gap-2 text-sm">
                <span className="font-medium text-muted-foreground">Subtotal:</span>
                <span className="text-right">${subtotal.toFixed(2)}</span>
                <span className="font-medium text-muted-foreground">Tax ({taxRate}%):</span>
                <span className="text-right">${taxAmount.toFixed(2)}</span>
                <span className="text-base font-medium">Total:</span>
                <span className="text-right text-base font-bold">${total.toFixed(2)}</span>
              </div>
            </div>

            {notes && (
              <div>
                <h3 className="mb-2 text-sm font-medium text-muted-foreground">Notes:</h3>
                <p className="whitespace-pre-line text-sm text-muted-foreground">{notes}</p>
              </div>
            )}

            <div className="text-center text-sm text-muted-foreground">
              <p>Thank you for your business!</p>
            </div>
          </div>
        </CardContent>
        <Separator />
        <CardFooter className="flex justify-between p-6">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
          <Button>
            <Send className="mr-2 h-4 w-4" />
            Send Invoice
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
