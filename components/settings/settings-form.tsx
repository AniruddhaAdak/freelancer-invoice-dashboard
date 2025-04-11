"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Upload } from "lucide-react"

export default function SettingsForm() {
  const [activeTab, setActiveTab] = useState("profile")
  const [profileSettings, setProfileSettings] = useState({
    name: "Aniruddha Adak",
    email: "aniruddhadak80@gmail.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main St\nAnytown, CA 12345",
    website: "https://aniruddha-adak.vercel.app",
  })

  const [invoiceSettings, setInvoiceSettings] = useState({
    businessName: "Aniruddha Adak",
    businessNumber: "123456789",
    currency: "USD",
    taxRate: "10",
    paymentTerms: "14",
    invoicePrefix: "INV-",
    nextInvoiceNumber: "001",
  })

  const [paymentSettings, setPaymentSettings] = useState({
    paypal: "paypal@example.com",
    bankName: "Example Bank",
    accountName: "Aniruddha Adak",
    accountNumber: "1234567890",
    routingNumber: "123456789",
    upiId: "example@upi",
  })

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    paymentReminders: true,
    invoiceViewed: true,
    paymentReceived: true,
  })

  return (
    <div className="grid gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="invoice">Invoice</TabsTrigger>
          <TabsTrigger value="payment">Payment</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Profile Settings</CardTitle>
              <CardDescription>Manage your personal and business information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/placeholder-user.jpg" alt="Profile" />
                  <AvatarFallback>AA</AvatarFallback>
                </Avatar>
                <div className="grid gap-2">
                  <Button variant="outline" size="sm">
                    <Upload className="mr-2 h-4 w-4" />
                    Upload Photo
                  </Button>
                  <p className="text-xs text-muted-foreground">JPG, PNG or GIF. Max size of 2MB.</p>
                </div>
              </div>

              <Separator />

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={profileSettings.name}
                    onChange={(e) => setProfileSettings({ ...profileSettings, name: e.target.value })}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={profileSettings.email}
                    onChange={(e) => setProfileSettings({ ...profileSettings, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    value={profileSettings.phone}
                    onChange={(e) => setProfileSettings({ ...profileSettings, phone: e.target.value })}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="website">Website</Label>
                  <Input
                    id="website"
                    value={profileSettings.website}
                    onChange={(e) => setProfileSettings({ ...profileSettings, website: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="address">Address</Label>
                <Textarea
                  id="address"
                  value={profileSettings.address}
                  onChange={(e) => setProfileSettings({ ...profileSettings, address: e.target.value })}
                  rows={3}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="invoice" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Invoice Settings</CardTitle>
              <CardDescription>Customize your invoice appearance and defaults</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="business-name">Business Name</Label>
                  <Input
                    id="business-name"
                    value={invoiceSettings.businessName}
                    onChange={(e) => setInvoiceSettings({ ...invoiceSettings, businessName: e.target.value })}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="business-number">Business Number/Tax ID</Label>
                  <Input
                    id="business-number"
                    value={invoiceSettings.businessNumber}
                    onChange={(e) => setInvoiceSettings({ ...invoiceSettings, businessNumber: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="currency">Default Currency</Label>
                  <Select
                    value={invoiceSettings.currency}
                    onValueChange={(value) => setInvoiceSettings({ ...invoiceSettings, currency: value })}
                  >
                    <SelectTrigger id="currency">
                      <SelectValue placeholder="Select currency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="USD">USD - US Dollar</SelectItem>
                      <SelectItem value="EUR">EUR - Euro</SelectItem>
                      <SelectItem value="GBP">GBP - British Pound</SelectItem>
                      <SelectItem value="INR">INR - Indian Rupee</SelectItem>
                      <SelectItem value="CAD">CAD - Canadian Dollar</SelectItem>
                      <SelectItem value="AUD">AUD - Australian Dollar</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="tax-rate">Default Tax Rate (%)</Label>
                  <Input
                    id="tax-rate"
                    value={invoiceSettings.taxRate}
                    onChange={(e) => setInvoiceSettings({ ...invoiceSettings, taxRate: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="payment-terms">Default Payment Terms (days)</Label>
                  <Input
                    id="payment-terms"
                    value={invoiceSettings.paymentTerms}
                    onChange={(e) => setInvoiceSettings({ ...invoiceSettings, paymentTerms: e.target.value })}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="invoice-prefix">Invoice Number Prefix</Label>
                  <Input
                    id="invoice-prefix"
                    value={invoiceSettings.invoicePrefix}
                    onChange={(e) => setInvoiceSettings({ ...invoiceSettings, invoicePrefix: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="next-invoice-number">Next Invoice Number</Label>
                <Input
                  id="next-invoice-number"
                  value={invoiceSettings.nextInvoiceNumber}
                  onChange={(e) => setInvoiceSettings({ ...invoiceSettings, nextInvoiceNumber: e.target.value })}
                />
              </div>

              <div className="grid gap-2">
                <Label>Invoice Logo</Label>
                <div className="flex items-center gap-4">
                  <div className="h-16 w-32 rounded-md border border-dashed border-gray-300 flex items-center justify-center">
                    <span className="text-sm text-muted-foreground">No logo</span>
                  </div>
                  <Button variant="outline" size="sm">
                    <Upload className="mr-2 h-4 w-4" />
                    Upload Logo
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">JPG, PNG or SVG. Max size of 1MB.</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="payment" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Payment Settings</CardTitle>
              <CardDescription>Configure your payment methods and details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="paypal">PayPal Email</Label>
                  <Input
                    id="paypal"
                    value={paymentSettings.paypal}
                    onChange={(e) => setPaymentSettings({ ...paymentSettings, paypal: e.target.value })}
                  />
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-sm font-medium">Bank Transfer Details</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="bank-name">Bank Name</Label>
                    <Input
                      id="bank-name"
                      value={paymentSettings.bankName}
                      onChange={(e) => setPaymentSettings({ ...paymentSettings, bankName: e.target.value })}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="account-name">Account Name</Label>
                    <Input
                      id="account-name"
                      value={paymentSettings.accountName}
                      onChange={(e) => setPaymentSettings({ ...paymentSettings, accountName: e.target.value })}
                    />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="account-number">Account Number</Label>
                    <Input
                      id="account-number"
                      value={paymentSettings.accountNumber}
                      onChange={(e) => setPaymentSettings({ ...paymentSettings, accountNumber: e.target.value })}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="routing-number">Routing Number</Label>
                    <Input
                      id="routing-number"
                      value={paymentSettings.routingNumber}
                      onChange={(e) => setPaymentSettings({ ...paymentSettings, routingNumber: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="upi-id">UPI ID</Label>
                  <Input
                    id="upi-id"
                    value={paymentSettings.upiId}
                    onChange={(e) => setPaymentSettings({ ...paymentSettings, upiId: e.target.value })}
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Configure how and when you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="email-notifications">Email Notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive email notifications for important events</p>
                </div>
                <Switch
                  id="email-notifications"
                  checked={notificationSettings.emailNotifications}
                  onCheckedChange={(checked) =>
                    setNotificationSettings({ ...notificationSettings, emailNotifications: checked })
                  }
                />
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-sm font-medium">Invoice Notifications</h3>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="payment-reminders">Payment Reminders</Label>
                    <p className="text-sm text-muted-foreground">Send reminders for upcoming and overdue payments</p>
                  </div>
                  <Switch
                    id="payment-reminders"
                    checked={notificationSettings.paymentReminders}
                    onCheckedChange={(checked) =>
                      setNotificationSettings({ ...notificationSettings, paymentReminders: checked })
                    }
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="invoice-viewed">Invoice Viewed</Label>
                    <p className="text-sm text-muted-foreground">Get notified when a client views your invoice</p>
                  </div>
                  <Switch
                    id="invoice-viewed"
                    checked={notificationSettings.invoiceViewed}
                    onCheckedChange={(checked) =>
                      setNotificationSettings({ ...notificationSettings, invoiceViewed: checked })
                    }
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="payment-received">Payment Received</Label>
                    <p className="text-sm text-muted-foreground">Get notified when you receive a payment</p>
                  </div>
                  <Switch
                    id="payment-received"
                    checked={notificationSettings.paymentReceived}
                    onCheckedChange={(checked) =>
                      setNotificationSettings({ ...notificationSettings, paymentReceived: checked })
                    }
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
