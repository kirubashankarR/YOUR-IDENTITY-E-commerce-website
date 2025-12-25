import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Users, GraduationCap, Stethoscope, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  const categories = [
    {
      icon: GraduationCap,
      title: "Students",
      description: "ID cards and accessories for educational institutions",
    },
    {
      icon: Users,
      title: "Teachers",
      description: "Professional identification solutions for educators",
    },
    {
      icon: Stethoscope,
      title: "Doctors",
      description: "Medical professional ID cards and badges",
    },
    {
      icon: Briefcase,
      title: "Professionals",
      description: "Corporate identity solutions for all industries",
    },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Logo */}
            <div className="mb-8 flex justify-center">
              <div className="relative w-32 h-32">
                <Image
                  src="/your-identity-logo.svg"
                  alt="Your Identity Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary mb-6 leading-tight">YOUR IDENTITY</h1>

            <div className="gold-divider max-w-md mx-auto mb-6" />

            <p className="text-xl md:text-2xl text-foreground font-serif italic mb-12">
              All You Need is Identity, We Make it Better
            </p>

            <Link href="/products">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8">
                Explore Our Products
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-primary mb-4">Who We Serve</h2>
          <div className="gold-divider max-w-xs mx-auto mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <div
                  key={category.title}
                  className="group relative bg-background border border-border rounded-lg p-6 hover:border-primary transition-all duration-300"
                >
                  <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-lg">
                    <Icon size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{category.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{category.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
              Make it Easy to Fulfill your Needs
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Reach out to our dedicated team for any enquiries, assistance or information you need.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Get in Touch
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
