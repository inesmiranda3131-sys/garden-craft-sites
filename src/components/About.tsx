import { Award, Users, Clock } from "lucide-react";

const stats = [
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Users, value: "500+", label: "Happy Clients" },
  { icon: Clock, value: "24/7", label: "Support Available" }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Your Trusted Landscaping Partner
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              For over 15 years, we've been transforming outdoor spaces into stunning landscapes 
              that our clients love. Our team of certified professionals combines creativity with 
              technical expertise to deliver exceptional results.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              From initial design concepts to ongoing maintenance, we're committed to bringing 
              your vision to life with attention to detail, quality craftsmanship, and 
              outstanding customer service.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-nature-light rounded-lg">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-primary/10 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <Leaf className="w-24 h-24 text-primary mx-auto mb-4" />
                  <p className="text-2xl font-semibold text-foreground">
                    Bringing Nature's Beauty to Your Doorstep
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Leaf = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
  </svg>
);

export default About;
