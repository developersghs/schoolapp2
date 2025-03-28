"use client"

import { useState } from "react"
import { UnifiedHeader } from "@/components/unified-header"
import { UnifiedNav } from "@/components/unified-nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CreditCard, CheckCircle, AlertCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Checkbox } from "@/components/ui/checkbox"

export default function FeesPage() {
  const [activeTab, setActiveTab] = useState("pending")
  const [paymentInProgress, setPaymentInProgress] = useState(false)
  const [paymentSuccess, setPaymentSuccess] = useState(false)
  const [selectedFees, setSelectedFees] = useState<number[]>([])

  const feeStructure = [
    { id: 1, month: "April", amount: 2500, status: "paid", dueDate: "10 Apr 2023", paidDate: "08 Apr 2023" },
    { id: 2, month: "May", amount: 2500, status: "paid", dueDate: "10 May 2023", paidDate: "05 May 2023" },
    { id: 3, month: "June", amount: 2500, status: "pending", dueDate: "10 Jun 2023", paidDate: null },
    { id: 4, month: "July", amount: 2500, status: "pending", dueDate: "10 Jul 2023", paidDate: null },
    { id: 5, month: "August", amount: 2500, status: "pending", dueDate: "10 Aug 2023", paidDate: null },
    { id: 6, month: "September", amount: 2500, status: "pending", dueDate: "10 Sep 2023", paidDate: null },
    { id: 7, month: "October", amount: 2500, status: "pending", dueDate: "10 Oct 2023", paidDate: null },
    { id: 8, month: "November", amount: 2500, status: "pending", dueDate: "10 Nov 2023", paidDate: null },
    { id: 9, month: "December", amount: 2500, status: "pending", dueDate: "10 Dec 2023", paidDate: null },
    { id: 10, month: "January", amount: 2500, status: "pending", dueDate: "10 Jan 2024", paidDate: null },
    { id: 11, month: "February", amount: 2500, status: "pending", dueDate: "10 Feb 2024", paidDate: null },
    { id: 12, month: "March", amount: 2500, status: "pending", dueDate: "10 Mar 2024", paidDate: null },
  ]

  const pendingFees = feeStructure.filter((fee) => fee.status === "pending")
  const paidFees = feeStructure.filter((fee) => fee.status === "paid")

  const totalFees = feeStructure.length * 2500
  const paidAmount = paidFees.length * 2500
  const paidPercentage = (paidAmount / totalFees) * 100

  const selectedTotal = selectedFees.length * 2500

  const handleCheckboxChange = (feeId: number) => {
    setSelectedFees((prev) => {
      if (prev.includes(feeId)) {
        return prev.filter((id) => id !== feeId)
      } else {
        return [...prev, feeId]
      }
    })
  }

  const handlePayment = () => {
    if (selectedFees.length === 0) return

    setPaymentInProgress(true)

    // Simulate payment processing
    setTimeout(() => {
      setPaymentInProgress(false)
      setPaymentSuccess(true)
      setSelectedFees([])

      // Reset success message after 3 seconds
      setTimeout(() => {
        setPaymentSuccess(false)
      }, 3000)
    }, 2000)
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <UnifiedHeader title="Fee Payment" />

      <main className="flex-1 container max-w-md mx-auto p-4">
        <div className="space-y-6 pb-16">
          <div>
            <h1 className="text-2xl font-bold">Fee Payment</h1>
            <p className="text-muted-foreground mt-1">Manage your monthly fee payments</p>
          </div>

          <Card className="border border-border">
            <CardHeader>
              <CardTitle>Payment Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-sm text-muted-foreground">Total Annual Fee</div>
                  <div className="text-2xl font-bold">₹{totalFees.toLocaleString()}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Paid Amount</div>
                  <div className="text-2xl font-bold">₹{paidAmount.toLocaleString()}</div>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>Payment Progress</span>
                  <span>{paidPercentage.toFixed(0)}%</span>
                </div>
                <Progress value={paidPercentage} className="h-2" />
              </div>

              <div className="flex justify-between text-sm">
                <div>
                  <span className="text-muted-foreground">Months Paid: </span>
                  <span className="font-medium">{paidFees.length}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Months Pending: </span>
                  <span className="font-medium">{pendingFees.length}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="pending">Pending</TabsTrigger>
              <TabsTrigger value="paid">Paid</TabsTrigger>
            </TabsList>

            <TabsContent value="pending" className="mt-4 space-y-4">
              {pendingFees.length > 0 ? (
                <>
                  {pendingFees.map((fee) => (
                    <Card key={fee.id} className="border border-border">
                      <CardContent className="p-4">
                        <div className="flex items-center">
                          <Checkbox
                            id={`fee-${fee.id}`}
                            checked={selectedFees.includes(fee.id)}
                            onCheckedChange={() => handleCheckboxChange(fee.id)}
                            className="mr-3"
                          />
                          <div className="flex justify-between items-center w-full">
                            <div>
                              <h3 className="font-medium">{fee.month} Fee</h3>
                              <p className="text-sm text-muted-foreground">Due: {fee.dueDate}</p>
                            </div>
                            <div className="text-right">
                              <div className="font-bold">₹{fee.amount.toLocaleString()}</div>
                              <Badge variant="outline" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
                                Pending
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}

                  <div className="sticky bottom-20 bg-background pt-4 pb-2 border-t">
                    <div className="flex justify-between items-center mb-2">
                      <div className="text-sm font-medium">
                        Selected: {selectedFees.length} month{selectedFees.length !== 1 ? "s" : ""}
                      </div>
                      <div className="text-sm font-bold">Total: ₹{selectedTotal.toLocaleString()}</div>
                    </div>
                    <Button
                      className="w-full"
                      onClick={handlePayment}
                      disabled={paymentInProgress || selectedFees.length === 0}
                    >
                      {paymentInProgress ? (
                        <span className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Processing...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <CreditCard className="mr-2 h-4 w-4" />
                          Pay Selected Fees
                        </span>
                      )}
                    </Button>
                  </div>
                </>
              ) : (
                <div className="text-center py-8">
                  <CheckCircle className="mx-auto h-12 w-12 text-green-500 mb-4" />
                  <h3 className="text-xl font-medium mb-2">All Fees Paid</h3>
                  <p className="text-muted-foreground">You have no pending fee payments.</p>
                </div>
              )}

              {paymentSuccess && (
                <div className="fixed inset-x-0 bottom-20 mx-auto w-full max-w-md px-4">
                  <div className="bg-green-100 text-green-800 p-4 rounded-md shadow-lg flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                    <span>Payment successful! Thank you.</span>
                  </div>
                </div>
              )}
            </TabsContent>

            <TabsContent value="paid" className="mt-4 space-y-4">
              {paidFees.length > 0 ? (
                paidFees.map((fee) => (
                  <Card key={fee.id} className="border border-border">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-medium">{fee.month} Fee</h3>
                          <p className="text-sm text-muted-foreground">Paid: {fee.paidDate}</p>
                        </div>
                        <div className="text-right">
                          <div className="font-bold">₹{fee.amount.toLocaleString()}</div>
                          <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">
                            Paid
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="text-center py-8">
                  <AlertCircle className="mx-auto h-12 w-12 text-yellow-500 mb-4" />
                  <h3 className="text-xl font-medium mb-2">No Payments Yet</h3>
                  <p className="text-muted-foreground">You haven't made any fee payments yet.</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <UnifiedNav activeItem="more" />
    </div>
  )
}

