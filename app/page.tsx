import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Users, Video, BookOpen, Smartphone, Calendar, Star } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">S</span>
              </div>
              <span className="text-xl text-foreground font-extrabold">StuDental</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#courses" className="text-muted-foreground hover:text-foreground transition-colors">
                Courses
              </Link>
              <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                Features
              </Link>
              <Link href="/downloads" className="text-muted-foreground hover:text-foreground transition-colors">
                Downloads
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Button asChild>
                <Link href="/join">Join Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-accent/10 text-accent border-accent/20">Classes Starting August 20th</Badge>
                <h1 className="font-black text-4xl md:text-6xl text-foreground leading-tight">
                  Master Your BDS Finals with Expert Guidance
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Live video classes, short-form content, and comprehensive study materials designed for ambitious
                  dental students who want to excel in NTRUHS & KNRUHS university exams.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8" asChild>
                  <Link href="/join">Start Learning Today</Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent" asChild>
                  <Link href="/downloads">Free Resources</Link>
                </Button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>500+ Students</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 fill-accent text-accent" />
                  <span>4.9/5 Rating</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src="/dental-students-study.png" alt="BDS students studying" className="rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-bold text-3xl md:text-4xl text-foreground">Built for the Modern Student</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We understand today's students need engaging, mobile-friendly content that competes with social media for
              attention.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary/20 transition-colors">
              <CardHeader>
                <Video className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Live Video Classes</CardTitle>
                <CardDescription>
                  Interactive sessions with experienced faculty for real-time doubt clearing
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 hover:border-primary/20 transition-colors">
              <CardHeader>
                <Smartphone className="w-12 h-12 text-accent mb-4" />
                <CardTitle>Reels-Style Learning</CardTitle>
                <CardDescription>
                  Short-form video explanations perfect for on-the-go learning and better retention
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 hover:border-primary/20 transition-colors">
              <CardHeader>
                <BookOpen className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Complete Study Materials</CardTitle>
                <CardDescription>
                  Comprehensive notes, diagrams, and question explanations for all subjects
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 hover:border-primary/20 transition-colors">
              <CardHeader>
                <Clock className="w-12 h-12 text-accent mb-4" />
                <CardTitle>Time Management</CardTitle>
                <CardDescription>
                  Structured study schedules and answer writing strategies for exam success
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 hover:border-primary/20 transition-colors">
              <CardHeader>
                <CheckCircle className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Expert Guidance</CardTitle>
                <CardDescription>
                  Learn from experienced dental professionals with 10+ years of expertise
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 hover:border-primary/20 transition-colors">
              <CardHeader>
                <Calendar className="w-12 h-12 text-accent mb-4" />
                <CardTitle>Flexible Batches</CardTitle>
                <CardDescription>
                  Multiple batch timings starting August 20th and 30th to fit your schedule
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-bold text-3xl md:text-4xl text-foreground">Choose Your Year & Subjects</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive courses for all BDS years with flexible pricing options
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {/* 4th Year BDS */}
            <Card className="relative overflow-hidden border-2 hover:border-primary/20 transition-all hover:shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">4th Year BDS</Badge>
                  <span className="text-2xl font-bold text-primary">₹299</span>
                </div>
                <CardTitle className="text-xl">Final Year Mastery</CardTitle>
                <CardDescription>Complete bundle: ₹1,699 (Save ₹693)</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="font-medium text-sm text-muted-foreground">8 SUBJECTS INCLUDED:</p>
                  <ul className="text-sm space-y-1">
                    <li>• Oral Medicine & Radiology</li>
                    <li>• Oral & Maxillofacial Surgery</li>
                    <li>• Periodontics</li>
                    <li>• Prosthodontics</li>
                    <li>• Orthodontics</li>
                    <li>• Conservative Dentistry</li>
                    <li>• Public Health Dentistry</li>
                    <li>• Pedodontics</li>
                  </ul>
                </div>
                <Button className="w-full" asChild>
                  <Link href="/join">Enroll Now</Link>
                </Button>
              </CardContent>
            </Card>

            {/* 3rd Year BDS */}
            <Card className="relative overflow-hidden border-2 hover:border-primary/20 transition-all hover:shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">3rd Year BDS</Badge>
                  <span className="text-2xl font-bold text-primary">₹399</span>
                </div>
                <CardTitle className="text-xl">Clinical Foundation</CardTitle>
                <CardDescription>Complete bundle: ₹999 (Save ₹198)</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="font-medium text-sm text-muted-foreground">3 SUBJECTS INCLUDED:</p>
                  <ul className="text-sm space-y-1">
                    <li>• General Medicine</li>
                    <li>• General Surgery</li>
                    <li>• Oral Pathology</li>
                  </ul>
                </div>
                <Button className="w-full" asChild>
                  <Link href="/join">Enroll Now</Link>
                </Button>
              </CardContent>
            </Card>

            {/* 2nd Year BDS */}
            <Card className="relative overflow-hidden border-2 hover:border-primary/20 transition-all hover:shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">2nd Year BDS</Badge>
                  <span className="text-2xl font-bold text-primary">₹399</span>
                </div>
                <CardTitle className="text-xl">Core Sciences</CardTitle>
                <CardDescription>Complete bundle: ₹999 (Save ₹198)</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="font-medium text-sm text-muted-foreground">3 SUBJECTS INCLUDED:</p>
                  <ul className="text-sm space-y-1">
                    <li>• Pharmacology</li>
                    <li>• Pathology & Microbiology</li>
                    <li>• Dental Materials</li>
                  </ul>
                </div>
                <Button className="w-full" asChild>
                  <Link href="/join">Enroll Now</Link>
                </Button>
              </CardContent>
            </Card>

            {/* 1st Year BDS */}
            <Card className="relative overflow-hidden border-2 hover:border-primary/20 transition-all hover:shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">1st Year BDS</Badge>
                  <span className="text-2xl font-bold text-primary">₹399</span>
                </div>
                <CardTitle className="text-xl">Foundation Building</CardTitle>
                <CardDescription>Complete bundle: ₹999 (Save ₹197)</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="font-medium text-sm text-muted-foreground">4 SUBJECTS INCLUDED:</p>
                  <ul className="text-sm space-y-1">
                    <li>• Anatomy</li>
                    <li>• Physiology</li>
                    <li>• Biochemistry</li>
                    <li>• Dental Anatomy</li>
                  </ul>
                </div>
                <Button className="w-full" asChild>
                  <Link href="/join">Enroll Now</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-serif font-bold text-3xl md:text-4xl">Ready to Excel in Your BDS Finals?</h2>
          <p className="text-xl opacity-90 leading-relaxed">
            Join thousands of successful dental students who chose StudenTal for their exam preparation. Start your
            journey today with our expert-led courses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
              <Link href="/join">Join Now - Classes Start Aug 20th</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              asChild
            >
              <Link href="/downloads">Download Free Resources</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">S</span>
                </div>
                <span className="font-bold text-xl">StuDental</span>
              </div>
              <p className="text-muted-foreground">
                Empowering BDS students to excel in their university exams with modern learning methods.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">Quick Links</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/join" className="hover:text-foreground transition-colors">
                    Join Course
                  </Link>
                </li>
                <li>
                  <Link href="/downloads" className="hover:text-foreground transition-colors">
                    Downloads
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-foreground transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">Universities</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>NTRUHS</li>
                <li>KNRUHS</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">Contact</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>studental.queries@gmail.com</li>
                <li>Classes start: Aug 20th & 30th</li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 StudenTal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
