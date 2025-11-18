import { Leaf, TreePine, Sparkles, Droplets } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Leaf,
    title: "Garden Design",
    description: "Custom garden designs that reflect your style and enhance your property's natural beauty."
  },
  {
    icon: TreePine,
    title: "Tree & Shrub Care",
    description: "Expert pruning, planting, and maintenance to keep your trees and shrubs healthy and beautiful."
  },
  {
    icon: Sparkles,
    title: "Hardscaping",
    description: "Patios, walkways, retaining walls, and outdoor features built to last and impress."
  },
  {
    icon: Droplets,
    title: "Lawn Maintenance",
    description: "Regular mowing, edging, fertilizing, and care to keep your lawn lush and green year-round."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-nature-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive landscaping solutions tailored to your needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
