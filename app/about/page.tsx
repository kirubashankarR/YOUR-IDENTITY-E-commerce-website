import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Clock, Target, Heart, Lightbulb } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Quality First",
      description: "We never compromise on quality and ensure every product meets the highest standards.",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Our customers are at the heart of everything we do, driving our commitment to excellence.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We continuously innovate to provide cutting-edge solutions for corporate identity needs.",
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "We conduct business with honesty, transparency, and ethical practices.",
    },
  ];

  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "5000+", label: "Happy Customers" },
    { number: "50000+", label: "Products Delivered" },
    { number: "24/7", label: "Customer Support" },
  ];

  const services = [
    "Custom ID Card Design & Printing",
    "Business Card Solutions",
    "Corporate Apparel & Uniforms",
    "Safety Equipment Supply",
    "Bulk Order Management",
    "Logo Design & Branding",
    "Quick Turnaround Services",
    "Quality Assurance",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
              About Your Identity
            </h1>
            <div className="gold-divider max-w-xs mx-auto mb-6" />
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              "All You Need is Identity, We Make it Better"
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              For over a decade, Your Identity has been the trusted partner for businesses,
              educational institutions, and organizations seeking premium corporate identity solutions.
              We specialize in creating professional identification products that reflect your brand's excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded with a vision to provide comprehensive corporate identity solutions,
                  Your Identity began as a small printing business in Coimbatore. Over the years,
                  we have evolved into a full-service provider of identification products and
                  corporate apparel.
                </p>
                <p>
                  Our journey started with a simple belief: every organization deserves a
                  professional identity that reflects its values and aspirations. This philosophy
                  has guided us through years of growth and innovation.
                </p>
                <p>
                  Today, we serve thousands of customers across various industries, from small
                  startups to large corporations, educational institutions to healthcare facilities.
                  Our commitment to quality and customer satisfaction remains unwavering.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/printing-workshop.png"
                alt="Our Story"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">
              Our Values
            </h2>
            <div className="gold-divider max-w-xs mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core values drive everything we do and shape our relationships with customers,
              partners, and the community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="inline-flex p-3 bg-primary/10 rounded-lg mb-4">
                      <Icon size={32} className="text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">
                What We Do
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We provide comprehensive corporate identity solutions that help businesses
                and organizations establish a professional presence. Our services span across
                various categories to meet all your identity needs.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Award size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        Quality Assurance
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Every product undergoes rigorous quality checks to ensure it meets
                        our high standards and your expectations.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Clock size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        Fast Delivery
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        We understand the importance of timely delivery and work efficiently
                        to meet your deadlines without compromising quality.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Users size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        Customer Support
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Our dedicated team is always ready to assist you with any queries
                        or support you may need throughout your journey with us.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">
              Visit Our Store
            </h2>
            <div className="gold-divider max-w-xs mx-auto mb-6" />
            <p className="text-lg text-muted-foreground">
              Located in the heart of Coimbatore, we welcome you to visit our showroom
              and experience our products firsthand.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Your Identity
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <div className="font-medium text-foreground mb-1">Address</div>
                    <div className="text-sm">
                      <a
                        href="https://maps.app.goo.gl/vZkRG6BpTBeDc7fFA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Kumaran Building, Old No. 40, New 37C,<br />
                        Rajendraprasad Road, Coimbatore - 641 012
                      </a>
                    </div>
                  </div>
                  <div>
                    <div className="font-medium text-foreground mb-1">Phone</div>
                    <div className="text-sm">8870007483 / 9894877483</div>
                  </div>
                  <div>
                    <div className="font-medium text-foreground mb-1">Email</div>
                    <div className="text-sm">urid2025@gmail.com</div>
                  </div>
                  <div>
                    <div className="font-medium text-foreground mb-1">Business Hours</div>
                    <div className="text-sm">
                      Monday - Saturday: 9:00 AM - 6:00 PM<br />
                      Sunday: Closed
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="h-96 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11521.774940501258!2d76.96607947044485!3d11.019472170953085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85856bb3c2e89%3A0x9254452ecbab186d!2sKumaran%20Building%2C%2035A%2C%20Dr%20Rajendra%20Prasad%20Rd%2C%20Gandhipuram%2C%20Coimbatore%2C%20Tamil%20Nadu%20641012!5e0!3m2!1sen!2sin!4v1762189299517!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Your Identity Location"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}