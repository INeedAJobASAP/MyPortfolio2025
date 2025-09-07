"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Database,
  Shield,
  Award,
  Lightbulb,
  Code,
  Star,
  Trophy,
} from "lucide-react"

export default function Portfolio() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="glass-effect text-primary-foreground py-4 px-6 sticky top-0 z-50 border-b border-primary/20">
        <nav className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-shimmer">Mohammed Abdelaziz</h1>
          <div className="flex gap-6">
            <button
              onClick={() => scrollToSection("projects")}
              className="hover:text-accent transition-all duration-300 hover:scale-110 font-medium text-primary cursor-pointer"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("usp")}
              className="hover:text-accent transition-all duration-300 hover:scale-110 font-medium text-primary cursor-pointer"
            >
              USP
            </button>
            <button
              onClick={() => scrollToSection("education")}
              className="hover:text-accent transition-all duration-300 hover:scale-110 font-medium text-primary cursor-pointer"
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection("certificates")}
              className="hover:text-accent transition-all duration-300 hover:scale-110 font-medium text-primary cursor-pointer"
            >
              Certificates
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-accent transition-all duration-300 hover:scale-110 font-medium text-primary cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-accent transition-all duration-300 hover:scale-110 font-medium text-primary cursor-pointer"
            >
              Contact
            </button>
          </div>
        </nav>
      </header>

      <section className="gradient-bg py-32 px-6 relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-black/30"></div>
        <div
          className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute top-40 right-20 w-16 h-16 bg-accent/20 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-32 left-1/4 w-12 h-12 bg-primary/20 rounded-full animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="absolute bottom-20 right-1/3 w-24 h-24 bg-white/5 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="w-48 h-48 mx-auto mb-12 overflow-hidden rounded-full border-4 border-white/30 shadow-2xl animate-float animate-pulse-glow">
            <img
              src="/images/mohammed-profile.jpg"
              alt="Mohammed Abdelaziz - Full Stack .NET Developer"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-7xl font-black text-white mb-8 text-balance animate-bounce-in">Mohammed Abdelaziz</h2>
          <p className="text-3xl text-white/95 mb-6 font-bold animate-slide-in-left">Full-Stack .NET Developer</p>
          <p className="text-xl text-white/85 mb-12 text-pretty max-w-3xl mx-auto leading-relaxed animate-slide-in-right">
            Crafting intelligent web solutions with recommendation algorithms and enterprise-grade security
          </p>
          <div className="flex gap-6 justify-center flex-wrap animate-bounce-in" style={{ animationDelay: "0.5s" }}>
            <Button
              size="lg"
              className="gap-2 bg-white text-primary hover:bg-white/90 shadow-2xl hover:scale-110 transition-all duration-300 creative-shadow"
              asChild
            >
              <a href="mailto:Mohammedseleem2005@gmail.com">
                <Mail className="w-5 h-5" />
                Contact Me
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2 border-white/40 text-white hover:bg-white/20 bg-white/10 backdrop-blur-sm hover:scale-110 transition-all duration-300"
              asChild
            >
              <a href="https://github.com/INeedAJobASAP" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2 border-white/40 text-white hover:bg-white/20 bg-white/10 backdrop-blur-sm hover:scale-110 transition-all duration-300"
              asChild
            >
              <a href="https://www.linkedin.com/in/mohammed-ahmed2005" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section id="usp" className="py-24 px-6 bg-gradient-to-br from-card to-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full mb-6 creative-shadow animate-pulse-glow">
              <Lightbulb className="w-5 h-5" />
              <span className="font-bold">What Makes Me Different</span>
            </div>
            <h3 className="text-5xl font-black mb-8 text-shimmer">Unique Selling Proposition</h3>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              I build intelligent, secure, and scalable systems that solve real-world problems and adapt to user needs.
              By combining full-stack development, cloud integration, and algorithm-driven design, I deliver
              applications that are not only functional but optimized for performance, security, and engagement. Beyond
              coding, I lead community projects and help grow the next generation of developers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <Card className="text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:rotate-1 creative-border creative-shadow border-l-4 border-l-accent group">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Code className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold">Algorithm-Driven</CardTitle>
                <p className="text-sm text-accent font-bold mt-3 bg-accent/10 px-3 py-1 rounded-full">
                  Deliver smarter recommendations that boost user engagement
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg">
                  I specialize in building recommendation systems and intelligent algorithms that enhance user
                  experience and drive engagement
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:rotate-1 creative-border creative-shadow border-l-4 border-l-primary group">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-destructive rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold">Security-First</CardTitle>
                <p className="text-sm text-primary font-bold mt-3 bg-primary/10 px-3 py-1 rounded-full">
                  Protect applications and data from day one
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg">
                  Every application I build incorporates enterprise-level security from the ground up, not as an
                  afterthought
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:rotate-1 creative-border creative-shadow border-l-4 border-l-secondary group">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold">Community Leadership</CardTitle>
                <p className="text-sm text-secondary font-bold mt-3 bg-secondary/10 px-3 py-1 rounded-full">
                  Helping grow the next generation of developers
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg">
                  Active volunteer with CATReloaded, leading community projects and contributing to open-source
                  initiatives that impact the tech ecosystem
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 px-6 bg-gradient-to-br from-background to-muted">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-full mb-6 creative-shadow">
              <Database className="w-5 h-5" />
              <span className="font-bold">Portfolio Showcase</span>
            </div>
            <h3 className="text-5xl font-black mb-8 text-shimmer">Featured Projects</h3>
            <p className="text-xl text-muted-foreground">
              Real-world applications demonstrating my expertise in full-stack development
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-6 hover:rotate-2 group creative-border overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src="/images/booknest-project.png"
                  alt="BookNest Digital Bookstore - Complete interface showing header, navigation, book catalog grid, and footer"
                  className="w-full h-full object-contain bg-white group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Featured
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                    <Database className="w-4 h-4 text-accent" />
                  </div>
                  <CardTitle className="text-xl">BookNest - Digital Bookstore</CardTitle>
                </div>
                <CardDescription className="text-base">
                  A comprehensive e-commerce platform for book lovers featuring intelligent recommendation algorithms,
                  full CRUD operations, and responsive design
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Star className="w-4 h-4 text-accent" />
                      Key Features:
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Smart book recommendation algorithms</li>
                      <li>• Complete book catalog management</li>
                      <li>• User authentication and profiles</li>
                      <li>• Shopping cart and checkout flow</li>
                      <li>• Responsive UI design</li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">ASP.NET Core</Badge>
                    <Badge variant="secondary">Entity Framework</Badge>
                    <Badge variant="secondary">SQL Server</Badge>
                    <Badge variant="secondary">C#</Badge>
                  </div>
                  <div className="flex gap-2 pt-2">
                    <Button size="sm" className="gap-2 bg-accent hover:bg-accent/90">
                      <ExternalLink className="w-3 h-3" />
                      Live Demo
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2 bg-transparent" asChild>
                      <a href="https://github.com/INeedAJobASAP/Book-Nest" target="_blank" rel="noopener noreferrer">
                        <Github className="w-3 h-3" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-6 hover:rotate-2 group creative-border overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src="/images/login-system-project.png"
                  alt="Secure Login System - Registration form with username, email, password fields and purple styling"
                  className="w-full h-full object-contain bg-white group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Secure
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <Shield className="w-4 h-4 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Secure Login System</CardTitle>
                </div>
                <CardDescription className="text-base">
                  A comprehensive authentication system with responsive design, database integration, password
                  encryption, and enterprise-level security features
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Star className="w-4 h-4 text-accent" />
                      Key Features:
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Complete user registration and login flow</li>
                      <li>• Database integration with encrypted passwords</li>
                      <li>• Responsive form validation and UX</li>
                      <li>• Session management and security</li>
                      <li>• Role-based access control</li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">ASP.NET Core Identity</Badge>
                    <Badge variant="secondary">JWT</Badge>
                    <Badge variant="secondary">SQL Server</Badge>
                    <Badge variant="secondary">C#</Badge>
                  </div>
                  <div className="flex gap-2 pt-2">
                    <Button size="sm" className="gap-2 bg-accent hover:bg-accent/90">
                      <ExternalLink className="w-3 h-3" />
                      Live Demo
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2 bg-transparent" asChild>
                      <a
                        href="https://github.com/INeedAJobASAP/LoginRegisterSystem"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-3 h-3" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-4">
              <Award className="w-4 h-4" />
              <span className="font-medium">Academic Background</span>
            </div>
            <h3 className="text-4xl font-bold mb-6">Education & Training</h3>
            <p className="text-xl text-muted-foreground">
              Formal education and specialized training in software development
            </p>
          </div>

          {/* Formal Education */}
          <div className="space-y-12">
            {/* University */}
            <div>
              <h4 className="text-2xl font-semibold mb-8 text-center">Formal Education</h4>
              <div className="grid md:grid-cols-2 gap-8">
                {/* University */}
                <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-l-primary">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Award className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">Mansoura University</CardTitle>
                        <CardDescription className="text-base">
                          Faculty of Computer and Information Sciences
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Department</span>
                        <Badge variant="outline">Information Technology</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Current Year</span>
                        <Badge variant="outline">3rd Year</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Academic Excellence</span>
                        <Badge className="bg-accent text-accent-foreground">2 Years of Excellence</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground pt-2">
                        Pursuing Bachelor's degree in Information Technology with consistent academic excellence
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* High School */}
                <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-l-accent">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                        <Trophy className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">Mansoura College American Schools</CardTitle>
                        <CardDescription className="text-base">American Diploma</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">GPA</span>
                        <Badge className="bg-primary text-primary-foreground">4.0 / 4.0</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">SAT Score (EST 1)</span>
                        <Badge variant="outline">1410 / 1600</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">SAT Score (EST 2)</span>
                        <Badge variant="outline">1460 / 1600</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground pt-2">
                        Perfect GPA with strong standardized test performance demonstrating academic excellence
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="certificates" className="py-20 px-6 bg-muted">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4 creative-shadow">
              <Trophy className="w-4 h-4" />
              <span className="font-medium">Professional Growth</span>
            </div>
            <h3 className="text-4xl font-bold mb-6">Certificates & Achievements</h3>
            <p className="text-xl text-muted-foreground">
              Professional certifications demonstrating continuous learning and technical expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* ITI Web Development Certificate */}
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-primary/5 to-accent/5 border-l-4 border-l-primary">
              <div className="aspect-[4/3] overflow-hidden rounded-t-lg bg-white">
                <img
                  src="/images/iti-certificate.png"
                  alt="ITI Web Development Using .NET Certificate - 60 hours course covering SQL Server and C#"
                  className="w-full h-full object-contain"
                />
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-lg">Web Development Using .NET</CardTitle>
                <CardDescription>
                  Information Technology Institute (ITI) - 60 hours intensive course covering SQL Server (18 hrs) and C#
                  (42 hrs)
                  <br />
                  <span className="text-sm font-medium">January 26 - February 10, 2025</span>
                </CardDescription>
              </CardHeader>
            </Card>

            {/* CAT Station Backend Track Certificate */}
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-accent/5 to-secondary/5 border-l-4 border-l-accent">
              <div className="aspect-[4/3] overflow-hidden rounded-t-lg bg-white">
                <img
                  src="/images/cat-station-certificate.png"
                  alt="CAT Station V.6 Backend Track Certificate - Outstanding dedication to technical skills and continuous learning"
                  className="w-full h-full object-contain"
                />
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-lg">Backend Track Completion</CardTitle>
                <CardDescription>
                  CAT Station V.6 by CAT Reloaded - Certificate of participation for outstanding dedication to advancing
                  technical skills and successful completion of the Backend track
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4 creative-shadow">
              <Star className="w-4 h-4" />
              <span className="font-medium">Get to Know Me</span>
            </div>
            <h3 className="text-4xl font-bold mb-6">About Me</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                I'm a passionate full-stack .NET developer with expertise in building scalable web applications. My
                journey in software development has led me to specialize in C#, ASP.NET Core, and modern web
                technologies.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                Through my volunteer experience with CATReloaded, I've developed strong leadership and teamwork skills
                while contributing to meaningful projects that make a difference in the developer community.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                I'm currently expanding my skills in cloud technologies and DevOps practices, with a focus on Azure and
                modern deployment strategies.
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-semibold mb-8">Technical Skills</h4>
              <div className="space-y-6">
                <div>
                  <h5 className="font-medium mb-3 text-lg text-foreground">Languages</h5>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-primary text-primary-foreground">C#</Badge>
                    <Badge className="bg-accent text-accent-foreground">JavaScript</Badge>
                    <Badge className="bg-secondary text-secondary-foreground">TypeScript</Badge>
                    <Badge>SQL</Badge>
                  </div>
                </div>
                <div>
                  <h5 className="font-medium mb-3 text-lg text-foreground">Frameworks & Tools</h5>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-primary text-primary-foreground">ASP.NET Core</Badge>
                    <Badge className="bg-accent text-accent-foreground">Entity Framework</Badge>
                    <Badge className="bg-secondary text-secondary-foreground">React</Badge>
                    <Badge>Git/GitHub</Badge>
                  </div>
                </div>
                <div>
                  <h5 className="font-medium mb-3 text-lg text-foreground">Databases</h5>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-primary text-primary-foreground">SQL Server</Badge>
                    <Badge className="bg-accent text-accent-foreground">MySQL</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 gradient-bg text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div
          className="absolute top-10 left-20 w-32 h-32 bg-white/5 rounded-full animate-float"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-24 h-24 bg-accent/10 rounded-full animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute top-1/2 left-10 w-16 h-16 bg-primary/10 rounded-full animate-float"
          style={{ animationDelay: "1.5s" }}
        ></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h3 className="text-6xl font-black mb-10 text-shimmer">Let's Work Together</h3>
          <p className="text-white/95 mb-12 text-2xl leading-relaxed font-medium">
            I'm always interested in new opportunities and exciting projects. Whether you're looking for a developer,
            collaborator, or just want to connect, I'd love to hear from you.
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <Button
              size="lg"
              className="gap-2 bg-white text-primary hover:bg-white/90 shadow-2xl hover:scale-110 transition-all duration-300 creative-shadow"
              asChild
            >
              <a href="mailto:Mohammedseleem2005@gmail.com">
                <Mail className="w-5 h-5" />
                Send Email
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2 border-white/40 text-white hover:bg-white/20 bg-white/10 backdrop-blur-sm hover:scale-110 transition-all duration-300"
              asChild
            >
              <a href="https://github.com/INeedAJobASAP" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
                View GitHub
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2 border-white/40 text-white hover:bg-white/20 bg-white/10 backdrop-blur-sm hover:scale-110 transition-all duration-300"
              asChild
            >
              <a href="https://www.linkedin.com/in/mohammed-ahmed2005" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
                Connect on LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card text-card-foreground py-8 px-6 border-t">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2025 Mohammed Abdelaziz. All rights reserved.</p>
          <p className="text-sm text-muted-foreground mt-2">Built with Next.js and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  )
}
