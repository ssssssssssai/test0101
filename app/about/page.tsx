import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Users, Award, BookOpen, Target, Heart, Star, GraduationCap, Stethoscope } from "lucide-react"
import Link from "next/link"

const TUTORS = [
  {
    name: "Dr. B. Sai Nath Bhukya",
    degree: "BDS",
    role: "Founder & CEO",
    experience: "Recently Qualified Excellence",
    specialization: "Comprehensive Dental Care & Educational Leadership",
    description:
      "Visionary leader with extensive clinical experience, dedicated to revolutionizing dental education through innovative teaching methods.",
    expertise: ["Clinical Dentistry", "Educational Strategy", "Student Mentorship", "Curriculum Development"],
    icon: <GraduationCap className="w-6 h-6" />,
  },
  {
    name: "Dr. B. Adarsha",
    degree: "BDS",
    role: "Co-Founder",
    experience: "Fresh Graduate Expert",
    specialization: "Academic Excellence & Student Development",
    description:
      "Passionate educator committed to helping students achieve their academic goals through personalized learning approaches.",
    expertise: ["Academic Planning", "Student Counseling", "Exam Strategy", "Performance Analysis"],
    icon: <Users className="w-6 h-6" />,
  },
  {
    name: "Dr. B. Sri Vidhya Mukharjee",
    degree: "BDS",
    role: "Senior Clinical Instructor",
    experience: "10+ years",
    specialization: "Clinical Expertise & Practical Training",
    description: "Highly experienced clinician bringing real-world dental practice insights to academic learning.",
    expertise: ["Clinical Procedures", "Practical Training", "Case Studies", "Hands-on Learning"],
    icon: <Stethoscope className="w-6 h-6" />,
  },
  {
    name: "Dr. B. Chennakesav Naik",
    degree: "MBBS, MS",
    role: "Medical Sciences Instructor",
    experience: "10+ years",
    specialization: "Medical Sciences & Surgical Expertise",
    description:
      "Distinguished medical professional providing comprehensive knowledge in general medicine and surgery for dental students.",
    expertise: ["General Medicine", "Surgery", "Medical Sciences", "Interdisciplinary Care"],
    icon: <Award className="w-6 h-6" />,
  },
  {
    name: "Dr. Sharon Paul",
    degree: "BDS",
    role: "Tutor & Reader",
    experience: "Recently Qualified",
    specialization: "Academic Support & Content Development",
    description:
      "Dedicated educator focused on creating engaging study materials and providing personalized academic support.",
    expertise: ["Content Creation", "Study Materials", "Academic Support", "Student Assessment"],
    icon: <BookOpen className="w-6 h-6" />,
  },
  {
    name: "Dr. K. Sagar",
    degree: "BDS",
    role: "Tutor & Reader",
    experience: "Fresh Graduate",
    specialization: "Interactive Learning & Technology Integration",
    description: "Tech-savvy educator specializing in modern teaching methods and digital learning platforms.",
    expertise: ["Digital Learning", "Interactive Sessions", "Technology Integration", "Modern Teaching"],
    icon: <Target className="w-6 h-6" />,
  },
  {
    name: "Dr. V. Samiksha",
    degree: "BDS",
    role: "Tutor & Reader",
    experience: "Recent Graduate",
    specialization: "Student Engagement & Personalized Learning",
    description:
      "Young and dynamic educator who understands the challenges of modern students and creates relatable learning experiences.",
    expertise: ["Student Engagement", "Personalized Learning", "Modern Study Techniques", "Peer Mentoring"],
    icon: <Heart className="w-6 h-6" />,
  },
]

const COMPANY_VALUES = [
  {
    title: "Excellence in Education",
    description: "We strive to provide the highest quality dental education with cutting-edge teaching methods.",
    icon: <Award className="w-8 h-8 text-primary" />,
  },
  {
    title: "Student-Centric Approach",
    description: "Every decision we make is focused on improving student outcomes and learning experiences.",
    icon: <Users className="w-8 h-8 text-accent" />,
  },
  {
    title: "Innovation in Learning",
    description:
      "We embrace modern technology and innovative teaching methods to make learning engaging and effective.",
    icon: <Target className="w-8 h-8 text-primary" />,
  },
  {
    title: "Comprehensive Support",
    description: "From academic guidance to career counseling, we provide holistic support for student success.",
    icon: <Heart className="w-8 h-8 text-accent" />,
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <div className="text-center space-y-4">
            <h1 className="font-serif font-bold text-4xl md:text-5xl text-foreground">About StuDental</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Empowering the next generation of dental professionals through innovative education, expert guidance, and
              personalized learning experiences tailored for NTRUHS & KNRUHS students.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card className="border-2 hover:border-primary/20 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Target className="w-6 h-6 text-primary" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed">
                To revolutionize dental education by providing comprehensive, accessible, and engaging learning
                experiences that help BDS students excel in their university exams and become confident dental
                professionals.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary/20 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Star className="w-6 h-6 text-accent" />
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed">
                To be the leading educational platform for dental students in India, known for our innovative teaching
                methods, exceptional faculty, and outstanding student success rates in university examinations.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Company Values */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY_VALUES.map((value, index) => (
              <Card key={index} className="text-center border-2 hover:border-primary/20 transition-colors">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="font-semibold text-lg mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Our Story */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl text-center">Our Story</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="max-w-4xl mx-auto space-y-4 text-lg leading-relaxed">
              <p>
                StuDental was born from a simple observation: traditional dental education methods weren't keeping pace
                with how modern students learn and engage with content. Our founders, experienced dental professionals
                and educators, recognized that today's students needed something different.
              </p>
              <p>
                Understanding that students are naturally drawn to engaging, bite-sized content similar to social media,
                we developed a unique approach that combines the rigor of traditional dental education with the
                accessibility and engagement of modern digital platforms.
              </p>
              <p>
                Our innovative "reels-style" learning format, combined with live interactive sessions and comprehensive
                study materials, has helped hundreds of students achieve their academic goals and build confidence in
                their dental careers.
              </p>
              <p>
                Today, StuDental stands as a testament to what's possible when educational innovation meets deep subject
                matter expertise, creating learning experiences that are both effective and enjoyable.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Meet Our Expert Faculty */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">Meet Our Expert Faculty</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn from experienced dental professionals and educators who are passionate about your success
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {TUTORS.map((tutor, index) => (
              <Card key={index} className="border-2 hover:border-primary/20 transition-all hover:shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-1">{tutor.name}</CardTitle>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline">{tutor.degree}</Badge>
                        <Badge className="bg-accent/10 text-accent border-accent/20">{tutor.experience}</Badge>
                      </div>
                      <CardDescription className="font-medium text-primary">{tutor.role}</CardDescription>
                    </div>
                    <div className="text-primary">{tutor.icon}</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-1">SPECIALIZATION</h4>
                    <p className="font-medium">{tutor.specialization}</p>
                  </div>

                  <p className="text-sm leading-relaxed">{tutor.description}</p>

                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-2">EXPERTISE</h4>
                    <div className="flex flex-wrap gap-1">
                      {tutor.expertise.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Choose StuDental */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl text-center">Why Choose StuDental?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Proven Track Record</h3>
                <p className="text-muted-foreground text-sm">
                  500+ successful students with consistently high pass rates in university examinations
                </p>
              </div>

              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold text-lg">Expert Faculty</h3>
                <p className="text-muted-foreground text-sm">
                  Learn from experienced professionals with 10+ years of clinical and academic expertise
                </p>
              </div>

              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Comprehensive Materials</h3>
                <p className="text-muted-foreground text-sm">
                  Complete study resources, question banks, and practice materials for all BDS years
                </p>
              </div>

              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <Target className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold text-lg">Personalized Learning</h3>
                <p className="text-muted-foreground text-sm">
                  Tailored study plans and individual attention to help you achieve your specific goals
                </p>
              </div>

              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Star className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Modern Teaching Methods</h3>
                <p className="text-muted-foreground text-sm">
                  Innovative reels-style content and interactive sessions designed for today's students
                </p>
              </div>

              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold text-lg">Ongoing Support</h3>
                <p className="text-muted-foreground text-sm">
                  Continuous guidance, doubt clearing, and mentorship throughout your academic journey
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-2">
          <CardContent className="text-center py-12">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">
              Ready to Transform Your BDS Journey?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of successful dental students who chose StuDental for their exam preparation. Start your
              journey to academic excellence today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" asChild>
                <Link href="/join">Join Our Courses</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent" asChild>
                <Link href="/downloads">Download Free Resources</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
