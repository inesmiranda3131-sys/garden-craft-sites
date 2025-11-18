import projectPatio from "@/assets/project-patio.jpg";
import projectGarden from "@/assets/project-garden.jpg";
import projectLawn from "@/assets/project-lawn.jpg";

const projects = [
  {
    title: "Modern Patio Design",
    category: "Hardscaping",
    image: projectPatio
  },
  {
    title: "Colorful Garden Paradise",
    category: "Garden Design",
    image: projectGarden
  },
  {
    title: "Premium Lawn Care",
    category: "Maintenance",
    image: projectLawn
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-nature-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Our Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See the transformations we've created for our clients
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm text-accent font-semibold mb-1">{project.category}</p>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
