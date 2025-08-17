"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Upload, CreditCard, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"

const NTRUHS_COLLEGES = [
  "Anil Neerukonda Institute of Dental Sciences, Visakhapatnam",
  "CKS Teja Institute of Dental Sciences and Research, Tirupati",
  "Care Dental College, Guntur",
  "Drs. Sudha & Nageswara Rao Siddhartha Institute of Dental Sciences, Gannavaram",
  "G. Pulla Reddy Dental College and Hospital, Kurnool",
  "GITAM Dental College and Hospital, Visakhapatnam",
  "GSL Dental College and Hospital, Rajahmundry",
  "KIMS Dental College, Amalapuram",
  "Lenora Institute of Dental Sciences, Rajahmundry",
  "Narayana Dental College and Hospital, Nellore",
  "Nimra Institute of Dental Sciences, Vijayawada",
  "Sibar Institute of Dental Sciences, Guntur",
  "Sree Sai Dental College and Research Institute, Srikakulam",
  "St. Joseph Dental College, Duggirala",
  "Vishnu Dental College, Bhimavaram",
  "Government Dental College & Hospital, Vijayawada",
  "Government Dental College, RIMS, Kadapa",
]

const KNRUHS_COLLEGES = [
  "Government Dental College and Hospital, Hyderabad",
  "Army College of Dental Sciences, Secunderabad",
  "Kamineni Institute of Dental Sciences, Nalgonda",
  "Mamata Institute of Dental Sciences, Khammam",
  "Meghna Institute of Dental Sciences, Nizamabad",
  "Malla Reddy Dental College for Women, Hyderabad",
  "Malla Reddy Institute of Dental Sciences, Hyderabad",
  "Panineeya Mahavidyalaya Institute of Dental Sciences & Research Centre, Hyderabad",
  "Sri Balaji Dental College, Hyderabad",
  "Sri Sai College of Dental Surgery, Vikarabad",
  "Sri Venkata Sai Institute of Dental Sciences, Hyderabad",
  "Tirumala Institute of Dental Sciences & Research Centre",
  "MNR Dental College and Hospital, Medak",
]

const YEAR_SUBJECTS = {
  "1st Year": {
    subjects: ["Anatomy", "Physiology", "Biochemistry", "Dental Anatomy"],
    singlePrice: 399,
    bundlePrice: 999,
  },
  "2nd Year": {
    subjects: ["Pharmacology", "Pathology & Microbiology", "Dental Materials"],
    singlePrice: 399,
    bundlePrice: 999,
  },
  "3rd Year": {
    subjects: ["General Medicine", "General Surgery", "Oral Pathology"],
    singlePrice: 399,
    bundlePrice: 999,
  },
  "4th Year": {
    subjects: [
      "Oral Medicine & Radiology",
      "Oral & Maxillofacial Surgery",
      "Periodontics",
      "Prosthodontics",
      "Orthodontics",
      "Conservative Dentistry & Endodontics",
      "Public Health Dentistry",
      "Pedodontics",
    ],
    singlePrice: 299,
    bundlePrice: 1699,
  },
}

export default function JoinPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    university: "",
    college: "",
    year: "",
    selectedSubjects: [] as string[],
    upiId: "",
    bankDetails: "",
    transactionRef: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [step, setStep] = useState(1)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
      // Reset dependent fields
      ...(field === "university" && { college: "" }),
      ...(field === "year" && { selectedSubjects: [] }),
    }))
  }

  const handleSubjectToggle = (subject: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedSubjects: prev.selectedSubjects.includes(subject)
        ? prev.selectedSubjects.filter((s) => s !== subject)
        : [...prev.selectedSubjects, subject],
    }))
  }

  const calculateTotal = () => {
    if (!formData.year) return 0
    const yearData = YEAR_SUBJECTS[formData.year as keyof typeof YEAR_SUBJECTS]
    const selectedCount = formData.selectedSubjects.length

    if (selectedCount === 0) return 0
    if (selectedCount === yearData.subjects.length) return yearData.bundlePrice
    return selectedCount * yearData.singlePrice
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Here you would integrate with Google Sheets API
      // For now, we'll simulate the submission
      const submissionData = {
        ...formData,
        totalAmount: calculateTotal(),
        submissionDate: new Date().toISOString(),
        subjects: formData.selectedSubjects.join(", "),
      }

      // Simulate API call to Google Sheets
      await new Promise((resolve) => setTimeout(resolve, 2000))

      console.log("Form submitted:", submissionData)

      toast({
        title: "Registration Successful!",
        description: "Your enrollment has been submitted. You'll receive confirmation via email shortly.",
      })

      // Reset form or redirect
      setStep(4)
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact support.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const colleges =
    formData.university === "NTRUHS" ? NTRUHS_COLLEGES : formData.university === "KNRUHS" ? KNRUHS_COLLEGES : []

  const yearData = formData.year ? YEAR_SUBJECTS[formData.year as keyof typeof YEAR_SUBJECTS] : null

  return (
    <div className="min-h-screen bg-background py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-2">Join StudenTal</h1>
          <p className="text-xl text-muted-foreground">Start your journey to BDS exam success</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between max-w-2xl mx-auto">
            {[1, 2, 3, 4].map((stepNum) => (
              <div key={stepNum} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    step >= stepNum ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  }`}
                >
                  {step > stepNum ? <CheckCircle className="w-4 h-4" /> : stepNum}
                </div>
                {stepNum < 4 && <div className={`w-16 h-0.5 mx-2 ${step > stepNum ? "bg-primary" : "bg-muted"}`} />}
              </div>
            ))}
          </div>
          <div className="flex justify-between max-w-2xl mx-auto mt-2 text-sm text-muted-foreground">
            <span>Personal Info</span>
            <span>Academic Details</span>
            <span>Payment</span>
            <span>Complete</span>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Step 1: Personal Information */}
          {step === 1 && (
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>Tell us about yourself</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="whatsapp">WhatsApp Number *</Label>
                  <Input
                    id="whatsapp"
                    type="tel"
                    value={formData.whatsapp}
                    onChange={(e) => handleInputChange("whatsapp", e.target.value)}
                    placeholder="+91 9876543210"
                    required
                  />
                </div>
                <Button
                  type="button"
                  onClick={() => setStep(2)}
                  disabled={!formData.name || !formData.email || !formData.whatsapp}
                  className="w-full"
                >
                  Continue to Academic Details
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Academic Details */}
          {step === 2 && (
            <Card>
              <CardHeader>
                <CardTitle>Academic Details</CardTitle>
                <CardDescription>Select your university, college, and subjects</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>University *</Label>
                    <Select
                      value={formData.university}
                      onValueChange={(value) => handleInputChange("university", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select your university" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="NTRUHS">NTRUHS</SelectItem>
                        <SelectItem value="KNRUHS">KNRUHS</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Year *</Label>
                    <Select value={formData.year} onValueChange={(value) => handleInputChange("year", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1st Year">1st Year BDS</SelectItem>
                        <SelectItem value="2nd Year">2nd Year BDS</SelectItem>
                        <SelectItem value="3rd Year">3rd Year BDS</SelectItem>
                        <SelectItem value="4th Year">4th Year BDS</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {formData.university && (
                  <div className="space-y-2">
                    <Label>College *</Label>
                    <Select value={formData.college} onValueChange={(value) => handleInputChange("college", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your college" />
                      </SelectTrigger>
                      <SelectContent>
                        {colleges.map((college) => (
                          <SelectItem key={college} value={college}>
                            {college}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {yearData && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label>Select Subjects *</Label>
                      <Badge variant="outline">
                        Bundle: ₹{yearData.bundlePrice} (Save ₹
                        {yearData.subjects.length * yearData.singlePrice - yearData.bundlePrice})
                      </Badge>
                    </div>
                    <div className="grid md:grid-cols-2 gap-3">
                      {yearData.subjects.map((subject) => (
                        <div key={subject} className="flex items-center space-x-2 p-3 border rounded-lg">
                          <Checkbox
                            id={subject}
                            checked={formData.selectedSubjects.includes(subject)}
                            onCheckedChange={() => handleSubjectToggle(subject)}
                          />
                          <Label htmlFor={subject} className="flex-1 cursor-pointer">
                            {subject}
                          </Label>
                          <span className="text-sm text-muted-foreground">₹{yearData.singlePrice}</span>
                        </div>
                      ))}
                    </div>
                    {formData.selectedSubjects.length > 0 && (
                      <div className="bg-muted p-4 rounded-lg">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Total Amount:</span>
                          <span className="text-2xl font-bold text-primary">₹{calculateTotal()}</span>
                        </div>
                        {formData.selectedSubjects.length === yearData.subjects.length && (
                          <p className="text-sm text-accent mt-1">🎉 Bundle discount applied!</p>
                        )}
                      </div>
                    )}
                  </div>
                )}

                <div className="flex gap-4">
                  <Button type="button" variant="outline" onClick={() => setStep(1)} className="flex-1">
                    Back
                  </Button>
                  <Button
                    type="button"
                    onClick={() => setStep(3)}
                    disabled={
                      !formData.university ||
                      !formData.college ||
                      !formData.year ||
                      formData.selectedSubjects.length === 0
                    }
                    className="flex-1"
                  >
                    Continue to Payment
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Payment Details */}
          {step === 3 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  Payment Details
                </CardTitle>
                <CardDescription>Complete your payment to secure your enrollment</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Payment Summary */}
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Order Summary</h3>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span>Selected Subjects ({formData.selectedSubjects.length})</span>
                      <span>{formData.selectedSubjects.join(", ")}</span>
                    </div>
                    <Separator className="my-2" />
                    <div className="flex justify-between font-medium text-lg">
                      <span>Total Amount</span>
                      <span className="text-primary">₹{calculateTotal()}</span>
                    </div>
                  </div>
                </div>

                {/* QR Code Payment */}
                <div className="space-y-4">
                  <h3 className="font-medium">Payment Methods</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                        <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground">QR Code for Payment</p>
                        <p className="text-xs text-muted-foreground mt-1">Scan to pay ₹{calculateTotal()}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="upi">UPI ID</Label>
                        <Input
                          id="upi"
                          value={formData.upiId}
                          onChange={(e) => handleInputChange("upiId", e.target.value)}
                          placeholder="your-upi@paytm"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="bank">Bank Details</Label>
                        <Input
                          id="bank"
                          value={formData.bankDetails}
                          onChange={(e) => handleInputChange("bankDetails", e.target.value)}
                          placeholder="Account details for bank transfer"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="transaction">Transaction Reference / UTR Number *</Label>
                  <Input
                    id="transaction"
                    value={formData.transactionRef}
                    onChange={(e) => handleInputChange("transactionRef", e.target.value)}
                    placeholder="Enter transaction reference number"
                    required
                  />
                  <p className="text-xs text-muted-foreground">
                    Enter the UTR number or transaction ID after completing the payment
                  </p>
                </div>

                <div className="flex gap-4">
                  <Button type="button" variant="outline" onClick={() => setStep(2)} className="flex-1">
                    Back
                  </Button>
                  <Button type="submit" disabled={!formData.transactionRef || isSubmitting} className="flex-1">
                    {isSubmitting ? "Submitting..." : "Complete Registration"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 4: Success */}
          {step === 4 && (
            <Card>
              <CardContent className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                <h2 className="font-serif font-bold text-2xl mb-2">Registration Complete!</h2>
                <p className="text-muted-foreground mb-6">
                  Thank you for joining StudenTal. You'll receive a confirmation email shortly with your course access
                  details.
                </p>
                <div className="space-y-2 text-sm text-muted-foreground mb-6">
                  <p>
                    Classes start: <strong>August 20th, 2024</strong>
                  </p>
                  <p>
                    Next batch: <strong>August 30th, 2024</strong>
                  </p>
                </div>
                <Button asChild>
                  <Link href="/">Return to Home</Link>
                </Button>
              </CardContent>
            </Card>
          )}
        </form>
      </div>
    </div>
  )
}
