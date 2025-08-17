"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Download, FileText, Mail, Phone, MapPin, TrendingUp } from "lucide-react"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"

const QUESTION_PAPERS = {
  "1st Year": {
    NTRUHS: [
      { subject: "Anatomy", year: "2023", probability: "85%", file: "anatomy-2023-ntruhs.pdf" },
      { subject: "Physiology", year: "2023", probability: "78%", file: "physiology-2023-ntruhs.pdf" },
      { subject: "Biochemistry", year: "2023", probability: "82%", file: "biochemistry-2023-ntruhs.pdf" },
      { subject: "Dental Anatomy", year: "2023", probability: "90%", file: "dental-anatomy-2023-ntruhs.pdf" },
    ],
    KNRUHS: [
      { subject: "Anatomy", year: "2023", probability: "88%", file: "anatomy-2023-knruhs.pdf" },
      { subject: "Physiology", year: "2023", probability: "75%", file: "physiology-2023-knruhs.pdf" },
      { subject: "Biochemistry", year: "2023", probability: "80%", file: "biochemistry-2023-knruhs.pdf" },
      { subject: "Dental Anatomy", year: "2023", probability: "92%", file: "dental-anatomy-2023-knruhs.pdf" },
    ],
  },
  "2nd Year": {
    NTRUHS: [
      { subject: "Pharmacology", year: "2023", probability: "83%", file: "pharmacology-2023-ntruhs.pdf" },
      { subject: "Pathology & Microbiology", year: "2023", probability: "87%", file: "pathology-2023-ntruhs.pdf" },
      { subject: "Dental Materials", year: "2023", probability: "79%", file: "dental-materials-2023-ntruhs.pdf" },
    ],
    KNRUHS: [
      { subject: "Pharmacology", year: "2023", probability: "85%", file: "pharmacology-2023-knruhs.pdf" },
      { subject: "Pathology & Microbiology", year: "2023", probability: "89%", file: "pathology-2023-knruhs.pdf" },
      { subject: "Dental Materials", year: "2023", probability: "81%", file: "dental-materials-2023-knruhs.pdf" },
    ],
  },
  "3rd Year": {
    NTRUHS: [
      { subject: "General Medicine", year: "2023", probability: "86%", file: "general-medicine-2023-ntruhs.pdf" },
      { subject: "General Surgery", year: "2023", probability: "84%", file: "general-surgery-2023-ntruhs.pdf" },
      { subject: "Oral Pathology", year: "2023", probability: "91%", file: "oral-pathology-2023-ntruhs.pdf" },
    ],
    KNRUHS: [
      { subject: "General Medicine", year: "2023", probability: "88%", file: "general-medicine-2023-knruhs.pdf" },
      { subject: "General Surgery", year: "2023", probability: "82%", file: "general-surgery-2023-knruhs.pdf" },
      { subject: "Oral Pathology", year: "2023", probability: "93%", file: "oral-pathology-2023-knruhs.pdf" },
    ],
  },
  "4th Year": {
    NTRUHS: [
      { subject: "Oral Medicine & Radiology", year: "2023", probability: "89%", file: "omr-2023-ntruhs.pdf" },
      { subject: "Oral & Maxillofacial Surgery", year: "2023", probability: "87%", file: "omfs-2023-ntruhs.pdf" },
      { subject: "Periodontics", year: "2023", probability: "85%", file: "periodontics-2023-ntruhs.pdf" },
      { subject: "Prosthodontics", year: "2023", probability: "88%", file: "prosthodontics-2023-ntruhs.pdf" },
      { subject: "Orthodontics", year: "2023", probability: "83%", file: "orthodontics-2023-ntruhs.pdf" },
      { subject: "Conservative Dentistry", year: "2023", probability: "86%", file: "conservative-2023-ntruhs.pdf" },
      { subject: "Public Health Dentistry", year: "2023", probability: "81%", file: "phd-2023-ntruhs.pdf" },
      { subject: "Pedodontics", year: "2023", probability: "84%", file: "pedodontics-2023-ntruhs.pdf" },
    ],
    KNRUHS: [
      { subject: "Oral Medicine & Radiology", year: "2023", probability: "91%", file: "omr-2023-knruhs.pdf" },
      { subject: "Oral & Maxillofacial Surgery", year: "2023", probability: "89%", file: "omfs-2023-knruhs.pdf" },
      { subject: "Periodontics", year: "2023", probability: "87%", file: "periodontics-2023-knruhs.pdf" },
      { subject: "Prosthodontics", year: "2023", probability: "90%", file: "prosthodontics-2023-knruhs.pdf" },
      { subject: "Orthodontics", year: "2023", probability: "85%", file: "orthodontics-2023-knruhs.pdf" },
      { subject: "Conservative Dentistry", year: "2023", probability: "88%", file: "conservative-2023-knruhs.pdf" },
      { subject: "Public Health Dentistry", year: "2023", probability: "83%", file: "phd-2023-knruhs.pdf" },
      { subject: "Pedodontics", year: "2023", probability: "86%", file: "pedodontics-2023-knruhs.pdf" },
    ],
  },
}

export default function DownloadsPage() {
  const { toast } = useToast()
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate email sending
      await new Promise((resolve) => setTimeout(resolve, 1500))

      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      })

      setContactForm({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDownload = (fileName: string) => {
    // In a real implementation, this would trigger the actual download
    toast({
      title: "Download Started",
      description: `Downloading ${fileName}...`,
    })
  }

  return (
    <div className="min-h-screen bg-background py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-2">Downloads & Resources</h1>
          <p className="text-xl text-muted-foreground">
            Access previous year question papers, study materials, and get in touch with us
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Downloads Section */}
          <div className="lg:col-span-2 space-y-8">
            {/* Previous Year Question Papers */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Previous Year Question Papers
                </CardTitle>
                <CardDescription>
                  Download authentic question papers from NTRUHS and KNRUHS universities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="1st Year" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="1st Year">1st Year</TabsTrigger>
                    <TabsTrigger value="2nd Year">2nd Year</TabsTrigger>
                    <TabsTrigger value="3rd Year">3rd Year</TabsTrigger>
                    <TabsTrigger value="4th Year">4th Year</TabsTrigger>
                  </TabsList>

                  {Object.entries(QUESTION_PAPERS).map(([year, universities]) => (
                    <TabsContent key={year} value={year} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        {Object.entries(universities).map(([university, papers]) => (
                          <div key={university} className="space-y-4">
                            <h3 className="font-semibold text-lg flex items-center gap-2">
                              {university}
                              <Badge variant="outline">{papers.length} Papers</Badge>
                            </h3>
                            <div className="space-y-3">
                              {papers.map((paper, index) => (
                                <div
                                  key={index}
                                  className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors"
                                >
                                  <div className="flex-1">
                                    <p className="font-medium">{paper.subject}</p>
                                    <p className="text-sm text-muted-foreground">Year: {paper.year}</p>
                                  </div>
                                  <div className="flex items-center gap-3">
                                    <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                                      <TrendingUp className="w-3 h-3 mr-1" />
                                      {paper.probability}
                                    </Badge>
                                    <Button size="sm" onClick={() => handleDownload(paper.file)} className="gap-1">
                                      <Download className="w-3 h-3" />
                                      Download
                                    </Button>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
            </Card>

            {/* Most Probable Questions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Most Probable Questions 2024
                </CardTitle>
                <CardDescription>
                  High-probability questions based on previous year analysis and expert predictions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">NTRUHS - High Probability Topics</h3>
                    <div className="space-y-3">
                      <div className="p-3 border rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">Oral Pathology - Cysts & Tumors</span>
                          <Badge className="bg-red-100 text-red-800 border-red-200">95%</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">Expected in 4th year finals</p>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">Anatomy - Head & Neck</span>
                          <Badge className="bg-orange-100 text-orange-800 border-orange-200">92%</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">Critical for 1st year</p>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">Periodontics - Gum Diseases</span>
                          <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">89%</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">4th year essential topic</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">KNRUHS - High Probability Topics</h3>
                    <div className="space-y-3">
                      <div className="p-3 border rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">Prosthodontics - Complete Dentures</span>
                          <Badge className="bg-red-100 text-red-800 border-red-200">97%</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">Must-know for finals</p>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">Pharmacology - Antibiotics</span>
                          <Badge className="bg-orange-100 text-orange-800 border-orange-200">94%</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">2nd year priority</p>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">Oral Surgery - Extractions</span>
                          <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">91%</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">4th year practical focus</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator className="my-6" />

                <div className="text-center">
                  <Button asChild className="gap-2">
                    <Link href="/join">
                      <Download className="w-4 h-4" />
                      Get Complete Question Bank - Join Course
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Section */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Contact Us
                </CardTitle>
                <CardDescription>Have questions? We're here to help!</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Contact Info */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <Mail className="w-4 h-4 text-primary" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">studental.queries@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <Phone className="w-4 h-4 text-primary" />
                    <div>
                      <p className="font-medium">Response Time</p>
                      <p className="text-sm text-muted-foreground">Within 24 hours</p>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Contact Form */}
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name">Name *</Label>
                    <Input
                      id="contact-name"
                      value={contactForm.name}
                      onChange={(e) => setContactForm((prev) => ({ ...prev, name: e.target.value }))}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-email">Email *</Label>
                    <Input
                      id="contact-email"
                      type="email"
                      value={contactForm.email}
                      onChange={(e) => setContactForm((prev) => ({ ...prev, email: e.target.value }))}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-subject">Subject *</Label>
                    <Select
                      value={contactForm.subject}
                      onValueChange={(value) => setContactForm((prev) => ({ ...prev, subject: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="course-inquiry">Course Inquiry</SelectItem>
                        <SelectItem value="technical-support">Technical Support</SelectItem>
                        <SelectItem value="payment-issue">Payment Issue</SelectItem>
                        <SelectItem value="study-material">Study Material Request</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-message">Message *</Label>
                    <Textarea
                      id="contact-message"
                      value={contactForm.message}
                      onChange={(e) => setContactForm((prev) => ({ ...prev, message: e.target.value }))}
                      placeholder="Tell us how we can help you..."
                      rows={4}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={
                      !contactForm.name ||
                      !contactForm.email ||
                      !contactForm.subject ||
                      !contactForm.message ||
                      isSubmitting
                    }
                    className="w-full"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button asChild variant="outline" className="w-full justify-start bg-transparent">
                  <Link href="/join">
                    <Mail className="w-4 h-4 mr-2" />
                    Join Course
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start bg-transparent">
                  <Link href="/about">
                    <FileText className="w-4 h-4 mr-2" />
                    About Our Tutors
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start bg-transparent">
                  <Link href="/privacy">
                    <MapPin className="w-4 h-4 mr-2" />
                    Privacy Policy
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
