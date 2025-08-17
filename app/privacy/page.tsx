import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Shield, Lock, Eye, Users, FileText, Mail } from "lucide-react"
import Link from "next/link"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-8 h-8 text-primary" />
            <h1 className="font-serif font-bold text-3xl md:text-4xl text-foreground">Privacy Policy</h1>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <Badge variant="outline">Last Updated: August 16, 2024</Badge>
            <Badge className="bg-primary/10 text-primary border-primary/20">GDPR Compliant</Badge>
          </div>
          <p className="text-lg text-muted-foreground">
            Your privacy is important to us. This policy explains how StudenTal collects, uses, and protects your
            personal information.
          </p>
        </div>

        <div className="space-y-8">
          {/* Introduction */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="w-5 h-5" />
                Introduction
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                StudenTal ("we," "our," or "us") is committed to protecting and respecting your privacy. This Privacy
                Policy explains how we collect, use, disclose, and safeguard your information when you visit our website
                and use our educational services.
              </p>
              <p>
                By accessing or using our services, you agree to the collection and use of information in accordance
                with this policy. If you do not agree with our policies and practices, do not use our services.
              </p>
            </CardContent>
          </Card>

          {/* Information We Collect */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Information We Collect
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-3">Personal Information</h3>
                <p className="mb-3">We collect the following personal information when you register for our courses:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Full name and contact information (email address, WhatsApp number)</li>
                  <li>Educational details (university, college, year of study)</li>
                  <li>Course preferences and subject selections</li>
                  <li>Payment information (UPI ID, bank details, transaction references)</li>
                  <li>Communication records and support inquiries</li>
                </ul>
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold text-lg mb-3">Automatically Collected Information</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>IP address and device information</li>
                  <li>Browser type and version</li>
                  <li>Pages visited and time spent on our website</li>
                  <li>Referring website addresses</li>
                  <li>Operating system and device identifiers</li>
                </ul>
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold text-lg mb-3">Cookies and Tracking Technologies</h3>
                <p className="mb-3">We use cookies and similar technologies to:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Remember your preferences and settings</li>
                  <li>Analyze website traffic and user behavior</li>
                  <li>Improve our services and user experience</li>
                  <li>Provide personalized content and recommendations</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* How We Use Your Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                How We Use Your Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">We use the collected information for the following purposes:</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Service Provision</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                    <li>Process course registrations and payments</li>
                    <li>Provide access to educational content</li>
                    <li>Deliver live classes and study materials</li>
                    <li>Track academic progress and performance</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Communication</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                    <li>Send course updates and announcements</li>
                    <li>Respond to inquiries and support requests</li>
                    <li>Provide technical assistance</li>
                    <li>Send promotional materials (with consent)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Legal Compliance</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                    <li>Comply with applicable laws and regulations</li>
                    <li>Protect against fraud and unauthorized access</li>
                    <li>Enforce our terms of service</li>
                    <li>Resolve disputes and legal claims</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Service Improvement</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                    <li>Analyze usage patterns and preferences</li>
                    <li>Develop new features and services</li>
                    <li>Conduct research and analytics</li>
                    <li>Optimize website performance</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Information Sharing */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="w-5 h-5" />
                Information Sharing and Disclosure
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties without your
                consent, except in the following circumstances:
              </p>

              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Service Providers</h4>
                  <p className="text-sm text-muted-foreground">
                    We may share information with trusted third-party service providers who assist us in operating our
                    website, conducting business, or serving our users (e.g., Google Sheets for data management, payment
                    processors).
                  </p>
                </div>

                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Legal Requirements</h4>
                  <p className="text-sm text-muted-foreground">
                    We may disclose information when required by law, court order, or government request, or to protect
                    our rights, property, or safety, or that of our users or others.
                  </p>
                </div>

                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Business Transfers</h4>
                  <p className="text-sm text-muted-foreground">
                    In the event of a merger, acquisition, or sale of assets, user information may be transferred as
                    part of the business transaction.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Security */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Data Security
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                We implement appropriate technical and organizational security measures to protect your personal
                information against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-medium mb-2">Technical Safeguards</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                    <li>SSL/TLS encryption for data transmission</li>
                    <li>Secure server infrastructure</li>
                    <li>Regular security audits and updates</li>
                    <li>Access controls and authentication</li>
                  </ul>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-medium mb-2">Organizational Measures</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                    <li>Limited access to personal data</li>
                    <li>Employee training on data protection</li>
                    <li>Data retention and deletion policies</li>
                    <li>Incident response procedures</li>
                  </ul>
                </div>
              </div>

              <div className="p-4 border-l-4 border-accent bg-accent/5">
                <p className="text-sm">
                  <strong>Important:</strong> While we strive to protect your personal information, no method of
                  transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute
                  security.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card>
            <CardHeader>
              <CardTitle>Your Privacy Rights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>You have the following rights regarding your personal information:</p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-medium">Access</h4>
                    <p className="text-sm text-muted-foreground">Request copies of your personal data</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-medium">Rectification</h4>
                    <p className="text-sm text-muted-foreground">Request correction of inaccurate data</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-medium">Erasure</h4>
                    <p className="text-sm text-muted-foreground">Request deletion of your data</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-medium">Portability</h4>
                    <p className="text-sm text-muted-foreground">Request transfer of your data</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-medium">Restriction</h4>
                    <p className="text-sm text-muted-foreground">Request limitation of processing</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-medium">Objection</h4>
                    <p className="text-sm text-muted-foreground">Object to certain processing activities</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                <p className="text-sm">
                  To exercise these rights, please contact us at <strong>studental.queries@gmail.com</strong>. We will
                  respond to your request within 30 days.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Data Retention */}
          <Card>
            <CardHeader>
              <CardTitle>Data Retention</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>We retain your personal information for as long as necessary to:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Provide our educational services to you</li>
                <li>Comply with legal obligations and resolve disputes</li>
                <li>Maintain accurate academic records</li>
                <li>Improve our services and user experience</li>
              </ul>

              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2">Specific Retention Periods</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                  <li>
                    <strong>Account Information:</strong> Retained while your account is active plus 7 years after
                    closure
                  </li>
                  <li>
                    <strong>Payment Records:</strong> Retained for 7 years for tax and legal compliance
                  </li>
                  <li>
                    <strong>Academic Records:</strong> Retained for 10 years for certification purposes
                  </li>
                  <li>
                    <strong>Communication Records:</strong> Retained for 3 years for support purposes
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Third-Party Services */}
          <Card>
            <CardHeader>
              <CardTitle>Third-Party Services</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Our website may contain links to third-party websites or integrate with third-party services. We use the
                following services:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Google Services</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                    <li>Google Sheets for data management</li>
                    <li>Google Analytics for website analytics</li>
                    <li>Google Fonts for typography</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Payment Processors</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                    <li>UPI payment gateways</li>
                    <li>Banking partners</li>
                    <li>Transaction verification services</li>
                  </ul>
                </div>
              </div>

              <div className="p-4 border-l-4 border-accent bg-accent/5">
                <p className="text-sm">
                  <strong>Note:</strong> These third-party services have their own privacy policies. We encourage you to
                  review their policies before using their services.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Children's Privacy */}
          <Card>
            <CardHeader>
              <CardTitle>Children's Privacy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Our services are intended for students aged 18 and above. We do not knowingly collect personal
                information from children under 18. If you are a parent or guardian and believe your child has provided
                us with personal information, please contact us immediately.
              </p>
              <p>
                If we discover that we have collected personal information from a child under 18, we will take steps to
                delete such information from our systems promptly.
              </p>
            </CardContent>
          </Card>

          {/* International Transfers */}
          <Card>
            <CardHeader>
              <CardTitle>International Data Transfers</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Your information may be transferred to and processed in countries other than your country of residence.
                These countries may have different data protection laws than your country.
              </p>
              <p>
                When we transfer your personal information internationally, we ensure appropriate safeguards are in
                place to protect your information in accordance with applicable data protection laws.
              </p>
            </CardContent>
          </Card>

          {/* Changes to Privacy Policy */}
          <Card>
            <CardHeader>
              <CardTitle>Changes to This Privacy Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                We may update this Privacy Policy from time to time to reflect changes in our practices or applicable
                laws. We will notify you of any material changes by:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
                <li>Posting the updated policy on our website</li>
                <li>Sending an email notification to registered users</li>
                <li>Displaying a prominent notice on our website</li>
              </ul>
              <p>
                Your continued use of our services after any changes indicates your acceptance of the updated Privacy
                Policy.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Contact Us
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices,
                please contact us:
              </p>

              <div className="p-4 bg-muted/50 rounded-lg">
                <div className="space-y-2">
                  <p>
                    <strong>Email:</strong> studental.queries@gmail.com
                  </p>
                  <p>
                    <strong>Subject Line:</strong> Privacy Policy Inquiry
                  </p>
                  <p>
                    <strong>Response Time:</strong> Within 48 hours
                  </p>
                </div>
              </div>

              <div className="mt-4 p-4 border-l-4 border-primary bg-primary/5">
                <p className="text-sm">
                  <strong>Data Protection Officer:</strong> For specific privacy concerns or to exercise your rights
                  under applicable data protection laws, please mark your email as "Attention: Data Protection Officer."
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="text-center py-8 border-t">
            <p className="text-sm text-muted-foreground mb-2">This Privacy Policy is effective as of August 16, 2024</p>
            <p className="text-sm text-muted-foreground">StudenTal - BDS Exam Preparation Hub</p>
          </div>
        </div>
      </div>
    </div>
  )
}
