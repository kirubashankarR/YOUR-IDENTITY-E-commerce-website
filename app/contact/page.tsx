"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
// import { useToast } from "@/hooks/use-toast";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  // const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    alert("Message Sent! Thank you for contacting us. We'll get back to you soon.");
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: "Kumaran Building, Old No. 40, New 37C, Rajendraprasad Road, Coimbatore - 641 012",
      link: "https://maps.app.goo.gl/vZkRG6BpTBeDc7fFA",
    },
    {
      icon: Phone,
      title: "Phone",
      details: "8870007483 / 9894877483",
    },
    {
      icon: Mail,
      title: "Email",
      details: "urid2025@gmail.com",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Monday - Saturday: 9:00 AM - 6:00 PM",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
              Contact Us
            </h1>
            <div className="gold-divider max-w-xs mx-auto mb-6" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ready to enhance your corporate identity? Get in touch with our team for personalized solutions.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Company Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-primary">Get in Touch</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Phone size={20} className="text-primary" />
                      <div>
                        <div className="font-medium">Phone</div>
                        <div className="text-muted-foreground">8870007483 / 9894877483</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail size={20} className="text-primary" />
                      <div>
                        <div className="font-medium">Email</div>
                        <div className="text-muted-foreground">urid2025@gmail.com</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin size={20} className="text-primary mt-1" />
                      <div>
                        <div className="font-medium">Address</div>
                        <div className="text-muted-foreground">
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
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock size={20} className="text-primary" />
                      <div>
                        <div className="font-medium">Business Hours</div>
                        <div className="text-muted-foreground">Monday - Saturday: 9:00 AM - 6:00 PM</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-primary/10 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">Professional Services</h4>
                  <p className="text-sm text-muted-foreground">
                    We provide complete corporate identity solutions with premium quality and professional service.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-serif font-bold text-primary mb-4">Get in Touch</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We're here to help you create the perfect corporate identity solution. 
                Reach out to us through any of the following channels.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card key={index} className="border-border">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Icon size={24} className="text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                          {info.link ? (
                            <a 
                              href={info.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-sm text-primary hover:underline leading-relaxed"
                            >
                              {info.details}
                            </a>
                          ) : (
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {info.details}
                            </p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Google Maps Embed */}
            <Card className="border-border">
              <CardContent className="p-0">
                <div className="h-64 rounded-lg overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11521.774940501258!2d76.96607947044485!3d11.019472170953085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85856bb3c2e89%3A0x9254452ecbab186d!2sKumaran%20Building%2C%2035A%2C%20Dr%20Rajendra%20Prasad%20Rd%2C%20Gandhipuram%2C%20Coimbatore%2C%20Tamil%20Nadu%20641012!5e0!3m2!1sen!2sin!4v1762189299517!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{border:0}} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Your Identity Location"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
