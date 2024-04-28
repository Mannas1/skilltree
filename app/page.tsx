import Navbar from "@/components/common/Navbar"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckIcon } from "lucide-react";
import Link from "next/link"


export default function page() {


  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Navbar />
      <section className="w-full py-8">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mt-16 max-md:mt-0">
                  Unlock Your Potential with Our Skill-Building Platform
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Discover a wide range of skill options, learn at your own pace, and unlock new opportunities.
                </p>
              </div>
              <div className="flex flex-col  gap-2 min-[400px]:flex-row ">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Get Started
                </Link>
              </div>
            </div>
            <img
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              height="550"
              src="/skilltree.png"
              width="550"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                Skill Options
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Discover Your Next Skill</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Explore our wide range of skill options and find the perfect fit for your learning journey.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-12">
            <Link
              className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
              href="#"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-900 transition-colors group-hover:bg-gray-900 group-hover:text-gray-50 dark:bg-gray-800 dark:text-gray-50 dark:group-hover:bg-gray-50 dark:group-hover:text-gray-900">
                <CodeIcon className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold">Web Development</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Learn the latest web development technologies and build responsive, dynamic websites.
                </p>
              </div>
            </Link>
            <Link
              className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
              href="#"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-900 transition-colors group-hover:bg-gray-900 group-hover:text-gray-50 dark:bg-gray-800 dark:text-gray-50 dark:group-hover:bg-gray-50 dark:group-hover:text-gray-900">
                <DatabaseIcon className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold">Database Management</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Dive into the world of databases and learn how to design, implement, and maintain efficient data
                  systems.
                </p>
              </div>
            </Link>
            <Link
              className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
              href="#"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-900 transition-colors group-hover:bg-gray-900 group-hover:text-gray-50 dark:bg-gray-800 dark:text-gray-50 dark:group-hover:bg-gray-50 dark:group-hover:text-gray-900">
                <BrushIcon className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold">Graphic Design</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Unleash your creative potential and learn the fundamentals of graphic design.
                </p>
              </div>
            </Link>
            <Link
              className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
              href="#"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-900 transition-colors group-hover:bg-gray-900 group-hover:text-gray-50 dark:bg-gray-800 dark:text-gray-50 dark:group-hover:bg-gray-50 dark:group-hover:text-gray-900">
                <CogIcon className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold">DevOps</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Explore the world of DevOps and learn how to streamline your software development and deployment
                  processes.
                </p>
              </div>
            </Link>
            <Link
              className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
              href="#"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-900 transition-colors group-hover:bg-gray-900 group-hover:text-gray-50 dark:bg-gray-800 dark:text-gray-50 dark:group-hover:bg-gray-50 dark:group-hover:text-gray-900">
                <BoldIcon className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold">Machine Learning</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Dive into the world of artificial intelligence and learn how to build intelligent systems.
                </p>
              </div>
            </Link>
            <Link
              className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
              href="#"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-900 transition-colors group-hover:bg-gray-900 group-hover:text-gray-50 dark:bg-gray-800 dark:text-gray-50 dark:group-hover:bg-gray-50 dark:group-hover:text-gray-900">
                <SquareIcon className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold">3D Modeling</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Explore the world of 3D modeling and learn how to create stunning 3D designs.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800" id="pricing">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Pricing</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Affordable Pricing for Every Learner</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Choose the plan that fits your learning needs and budget.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:gap-12">
            <Card className="flex flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
              <CardHeader>
                <CardTitle>Basic</CardTitle>
                <CardDescription>Perfect for beginners</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col justify-between flex-1">
                <div className="space-y-4">
                  <div className="text-4xl font-bold">$9</div>
                  <p className="text-gray-500 dark:text-gray-400">per month</p>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                      Access to all skill courses
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                      limited course progress
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                      Basic support
                    </li>
                  </ul>
                </div>
                <Button className="mt-4">
                  Get Started
                </Button>
              </CardContent>
            </Card>
            <Card className="flex flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
              <CardHeader>
                <CardTitle>Dedicated</CardTitle>
                <CardDescription>Perfect for students</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col justify-between flex-1">
                <div className="space-y-4">
                  <div className="text-4xl font-bold">$15</div>
                  <p className="text-gray-500 dark:text-gray-400">per month</p>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                      Access to all skill courses
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                      Unlimited course progress
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                      24/7 support
                    </li>
                  </ul>
                </div>
                <Button className="mt-4">
                  Get Started
                </Button>
              </CardContent>
            </Card>
            <Card className="flex flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
              <CardHeader>
                <CardTitle>Advanced</CardTitle>
                <CardDescription>Perfect for beginners</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col justify-between flex-1">
                <div className="space-y-4">
                  <div className="text-4xl font-bold">$20</div>
                  <p className="text-gray-500 dark:text-gray-400">per month</p>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                      Access to all skill courses + Projects
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                      Unlimited course progress
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                      24/7 support
                    </li>
                  </ul>
                </div>
                <Button className="mt-4">
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 just for portfolio. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function BoldIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 12a4 4 0 0 0 0-8H6v8" />
      <path d="M15 20a4 4 0 0 0 0-8H6v8Z" />
    </svg>
  )
}


function BrushIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" />
      <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z" />
    </svg>
  )
}


function CodeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}


function CogIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
      <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M12 2v2" />
      <path d="M12 22v-2" />
      <path d="m17 20.66-1-1.73" />
      <path d="M11 10.27 7 3.34" />
      <path d="m20.66 17-1.73-1" />
      <path d="m3.34 7 1.73 1" />
      <path d="M14 12h8" />
      <path d="M2 12h2" />
      <path d="m20.66 7-1.73 1" />
      <path d="m3.34 17 1.73-1" />
      <path d="m17 3.34-1 1.73" />
      <path d="m11 13.73-4 6.93" />
    </svg>
  )
}


function DatabaseIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  )
}


function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function SquareIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
    </svg>
  )
}


