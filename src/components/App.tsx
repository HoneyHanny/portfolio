"use client"
import Header from "./header"
import { Button } from "./ui/button"
import {
  ArrowRight,
  CircleCheck,
  CodeXml,
  Database,
  Facebook,
  Github,
  Linkedin,
  Mail,
  Mouse,
  Palette,
  Zap,
} from "lucide-react"
import { Card, CardContent, CardHeader } from "./ui/card"
import DotBadge from "./dot-badge"
import StackBadge from "./stack-badge"
import ProjectCard from "./project-card"
import Paragraph from "./paragraph"
import StackCard from "./stack-card"
import Heading from "./heading"
import Form from "./form"
import Footer from "./footer"

export function App() {
  return (
    <>
      <Header />
      <main
        id="home"
        className="relative flex w-full flex-col items-center overflow-x-clip px-2 pt-45 lg:px-8"
      >
        <div className="absolute top-20 -right-40 h-80 w-80 rounded-full bg-brand/10 blur-3xl filter"></div>
        <div className="absolute top-150 -left-40 h-80 w-80 rounded-full bg-brand/10 blur-3xl filter"></div>

        <DotBadge>Software Engineer</DotBadge>

        <span className="mb-20 text-center text-2xl font-bold sm:w-full md:text-7xl lg:w-1/2">
          Building <span className="text-red-500">Modern</span> Digital
          Experience
        </span>

        <span className="mb-20 w-full text-center text-muted-foreground lg:w-1/2">
          I craft beautiful, functional web applications with modern
          technologies. Specializing in React, Next.js, TypeScript and creating
          seamless user experiences.
        </span>

        <div className="mb-20 flex flex-col gap-4 lg:flex-row">
          <Button className="border-none bg-brand px-4 py-6 text-white shadow-lg shadow-red-500/20 hover:bg-brand/90 hover:shadow-red-500/40 focus-visible:ring-red-500">
            View My Work <ArrowRight />
          </Button>
          <Button className="focus-visible:ring-none border border-border bg-transparent px-8 py-6 text-primary hover:bg-secondary/80 focus-visible:border-red-500 focus-visible:ring-0 focus-visible:outline-none">
            Get in Touch
          </Button>
        </div>

        <div className="mb-10 flex flex-row items-center gap-4">
          <Button
            size="icon"
            variant="secondary"
            className="focus-visible:border-red-500 focus-visible:ring-red-500"
            onClick={() => {
              window.open(
                "https://github.com/HoneyHanny",
                "_blank",
                "noopener,noreferrer"
              )
            }}
          >
            <Github className="text-muted-foreground" />
          </Button>
          <Button
            size="icon"
            variant="secondary"
            className="focus-visible:border-red-500 focus-visible:ring-red-500"
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/hans-duran-b858282a5/",
                "_blank",
                "noopener,noreferrer"
              )
            }}
          >
            <Linkedin className="text-muted-foreground" />
          </Button>
          <Button
            size="icon"
            variant="secondary"
            className="focus-visible:border-red-500 focus-visible:ring-red-500"
            onClick={() => {
              window.open(
                "https://www.facebook.com/hans.duran.58",
                "_blank",
                "noopener,noreferrer"
              )
            }}
          >
            <Facebook className="text-muted-foreground" />
          </Button>
        </div>

        <div className="mb-40 animate-bounce text-muted-foreground">
          <Mouse />
        </div>

        <section
          id="about"
          className="mb-20 flex w-full flex-col px-2 lg:px-40"
        >
          <DotBadge>About Me</DotBadge>

          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
            <div className="flex flex-col items-start justify-start gap-8 text-start">
              <Heading>Passionate Developer & Creator</Heading>

              <Paragraph>
                I'm a full-stack developer with a passion for building
                beautiful, functional web applications. With expertise in modern
                technologies like React, Next.js, and TypeScript, I create
                seamless digital experiences that users love.
              </Paragraph>

              <Paragraph>
                Beyond web development, I explore game development and creative
                projects. I believe in writing clean, maintainable code and
                staying updated with the latest industry trends.
              </Paragraph>

              <div className="flex w-full flex-col gap-4">
                <div className="flex items-center gap-2">
                  <CircleCheck className="h-3.5 w-3.5 text-brand" />
                  <span className="text-xs text-muted-foreground">
                    Full-stack web development with modern frameworks
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <CircleCheck className="h-3.5 w-3.5 text-brand" />
                  <span className="text-xs text-muted-foreground">
                    Responsive and accessible UI design
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <CircleCheck className="h-3.5 w-3.5 text-brand" />
                  <span className="text-xs text-muted-foreground">
                    Game development and creative projects
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <CircleCheck className="h-3.5 w-3.5 text-brand" />
                  <span className="text-xs text-muted-foreground">
                    Collaborative team player
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <CircleCheck className="h-3.5 w-3.5 text-brand" />
                  <span className="text-xs text-muted-foreground">
                    Continuous learner and problem solver
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Card className="max-w-4xl bg-brand/1 p-10 backdrop-blur-sm">
                <div className="absolute top-40 h-40 w-40 rounded-full bg-[#ff1111]/10 blur-3xl filter"></div>
                <div className="grid gap-4 lg:gap-10">
                  <Card className="ring-0">
                    <div className="flex flex-col items-center justify-center gap-1 text-center">
                      <span className="text-xl font-bold text-brand">5+</span>
                      <span className="text-xs lg:text-sm">Projects</span>
                    </div>
                  </Card>

                  <Card className="ring-0">
                    <div className="flex flex-col items-center justify-center gap-1 text-center">
                      <span className="text-xl font-bold text-brand">3+</span>
                      <span className="text-xs lg:text-sm">Years Exp</span>
                    </div>
                  </Card>

                  <Card className="col-span-2 p-4 ring-0">
                    <div>
                      <span className="text-xl font-bold">Tech Stack</span>
                      <div>
                        <StackBadge>React</StackBadge>
                        <StackBadge>TypesScript</StackBadge>
                        <StackBadge>Next.js</StackBadge>
                        <StackBadge>Tailwind</StackBadge>
                        <StackBadge>Node.js</StackBadge>
                      </div>
                    </div>
                  </Card>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section id="projects" className="mb-20 px-2 lg:px-40">
          <DotBadge>Featured Work</DotBadge>

          <div className="flex w-full flex-col gap-8">
            <Heading>Selected Projects</Heading>

            <Paragraph>
              A collection of projects showcasing my expertise in modern web
              development, game programming, and desktop applications.
            </Paragraph>

            <div className="grid gap-6 lg:grid-cols-2">
              <ProjectCard
                title={"Anonymous Maximus"}
                description={
                  "Real-time collaboration platform where users can create rooms with unique codes and connect anonymously. Built with WebSocket support for instant communication."
                }
                website={"https://anonymous-maximus.vercel.app/"}
                github={"https://github.com/HoneyHanny/anonymous-maximus"}
                techStacks={["TypeScript", "React", "Vite", "shadcn/ui"]}
              />

              <ProjectCard
                title={"JSON Tools"}
                description={
                  "Comprehensive JSON manipulation and formatting utility. Features include validation, formatting, minification, and transformation with a clean, intuitive interface."
                }
                website="https://json-tools-sigma.vercel.app/"
                github="https://github.com/HoneyHanny/json-tools"
                techStacks={[
                  "TypeScript",
                  "React",
                  "Tailwind CSS",
                  "shadcn/ui",
                ]}
              />

              <ProjectCard
                title={"Phasecraft"}
                github="https://github.com/HoneyHanny/phasecraft"
                description={
                  "A 2D game developed to master game programming fundamentals. Demonstrates game loop architecture, collision detection, and sprite management."
                }
                techStacks={["Java", "Game Development"]}
              />

              <ProjectCard
                title={"Ops Desk"}
                github="https://github.com/HoneyHanny/ops-desk"
                description={
                  "Desktop application built with Tauri and React. Designed for operational management with a modern, responsive interface and native performance."
                }
                techStacks={["TypeScript", "React", "Tauri", "shadcn/ui"]}
              />

              <ProjectCard
                title={"Mind Flash"}
                github="https://github.com/HoneyHanny/mind-flash"
                description={
                  "Cross-platform application combining React with Tauri for native desktop capabilities. Optimized for performance and user experience."
                }
                techStacks={["TypeScript", "React", "Tauri"]}
              />
            </div>
          </div>
        </section>

        <div id="skills" className="mb-20 px-2 lg:px-40">
          <DotBadge>Expertise</DotBadge>
          <div className="flex w-full flex-col gap-8">
            <Heading>Skills & Technologies</Heading>

            <Paragraph>
              I work with modern technologies and best practices to build
              scalable, performant applications.
            </Paragraph>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-4">
              <StackCard
                icon={<CodeXml className="text-[#ff4444]" />}
                header={"Frontend"}
                techStacks={[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "shadcn/ui",
                  "Vite",
                ]}
              />
              <StackCard
                icon={<Database className="text-[#ff4444]" />}
                header={"Backend & Tools"}
                techStacks={[
                  "Node.js",
                  "Express",
                  "TypeScript",
                  "Git",
                  "REST APIs",
                  "Tauri",
                ]}
              />
              <StackCard
                icon={<Palette className="text-[#ff4444]" />}
                header={"Design & UX"}
                techStacks={[
                  "UI Design",
                  "Responsive Design",
                  "Accessibility",
                  "Animation",
                  "Component Design",
                ]}
              />
              <StackCard
                icon={<Zap className="text-[#ff4444]" />}
                header={"Other"}
                techStacks={[
                  "Java",
                  "Game Development",
                  "Problem Solving",
                  "Performance Optimization",
                ]}
              />
            </div>
          </div>
        </div>

        <div
          id="contact"
          className="mb-20 flex w-full flex-col items-center justify-center px-2 lg:px-40"
        >
          <DotBadge>Get in Touch</DotBadge>

          <div className="mb-20 flex w-full flex-col items-center justify-center gap-8 text-center">
            <Heading>Let's Work Together</Heading>
            <Paragraph>
              Have a project in mind or want to collaborate? I'd love to hear
              from you. Get in touch and let's create something amazing.
            </Paragraph>
          </div>

          <div className="grid w-full grid-cols-1 gap-14 lg:grid-cols-2 lg:px-50">
            {/* Left */}
            <Form />

            {/* Right */}
            <div className="flex w-full flex-col gap-8 lg:w-full">
              <Card>
                <CardHeader className="text-xl font-bold">
                  Direct Contact
                </CardHeader>
                <CardContent>
                  <a
                    href="mailto:hansduran25@gmail.com"
                    className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-brand focus-visible:border-red-500 focus-visible:ring-1 focus-visible:ring-red-500 focus-visible:outline-1 focus-visible:outline-red-500"
                  >
                    <Mail /> hansduran25@gmail.com
                  </a>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="text-xl font-bold">Follow Me</CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-muted-foreground">
                    <a href="https://github.com/HoneyHanny">
                      <Card className="flex flex-row items-center px-4 py-3 text-muted-foreground">
                        <Github className="h-4 w-4" /> GitHub
                      </Card>
                    </a>
                    <Card className="flex flex-row items-center px-4 py-3 text-muted-foreground">
                      <Linkedin className="h-4 w-4" /> LinkedIn
                    </Card>
                    <a href="https://www.facebook.com/hans.duran.58">
                      <Card className="flex flex-row items-center px-4 py-3 text-muted-foreground">
                        <Facebook className="h-4 w-4" /> Facebook
                      </Card>
                    </a>
                    <a href="mailto:hansduran25@gmail.com">
                      <Card className="flex flex-row items-center px-4 py-3 text-muted-foreground">
                        <Mail className="h-4 w-4" /> Email
                      </Card>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default App
