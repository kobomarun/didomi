import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ITSolutionsPage() {
  const services = [
    {
      icon: "phone_iphone",
      title: "App Development",
      description: "Building scalable and user-friendly mobile applications for iOS and Android.",
    },
    {
      icon: "code",
      title: "Web Development",
      description: "Creating responsive and high-performance websites tailored to your business needs.",
    },
    {
      icon: "support_agent",
      title: "IT Consulting",
      description: "Providing strategic guidance to optimize your IT infrastructure and operations.",
    },
    {
      icon: "model_training",
      title: "Digital Transformation",
      description: "Modernizing your processes with cutting-edge technology for a competitive edge.",
    },
  ];

  const projects = [
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6cGS74w8s7XBAK0x3UDbRo5PNnYgCOELGxwkQ5VHYRbteA8z3cptcqx9CkOdHmuaTaO8dUDnGWUYrNM6QmbQ0kE7hSuY3vM8d5EqACr3rQLnDgwTc3WhzdcGJJxYd8j5xI_MldWKKWl6cqTtlF-RkeCzZ8Qyv4WEUNqlEQ4CJiDUoNz1Ly_tV6izKjOPJcPkGBFaop_VH8NL8QsUU86fVxf9EH8z7eJm8EMNngOcOLlCCYPNtiVYiCz3FQ7EhSugyZo-q58qiWzs",
      category: "Web Application",
      title: "Enterprise CRM Solution",
      description: "A comprehensive customer relationship management platform designed for scale and efficiency.",
    },
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCBijdKiqqFtnnG4_0xewjopwYZpseAdeoiOCW50hHPaFDr_WEcTWs5DuX6aWKQ0bCr5s9fy5RamKgXZu7_TcBDqC1rP2sV3DsEuSSXpUFL5qcb27DQHU4IC_oBmgW7D8-amswjwn4Ey7PxnLbqPJ3emwT2gVc9JbGl2kOJN4c9yPOLpw5xSFvN8IdPNhrr6BEYp1yuT8l4VD48thl-hrugTq3xQKQa1C7BcCAF0DjLeGDV2zUdb1Se9caThnjaWsTCIZxUCkxZ8eg",
      category: "Mobile App",
      title: "E-commerce Mobile App",
      description: "An intuitive mobile shopping experience for a leading online retailer, available on iOS and Android.",
    },
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVC2C2runhoQjSZ5X_JJ-dB_o3wMSjRa-J12DCuH5Qh0cLgy5otLHvIOWwtAxcARaBPHoTZiCE6cfZcDO8gzrwjXLGqfHlYWFItz17FDmbPQkSo0c494PRB9TRS4XTnKyXswsrtFxFczTVMWdXoflR5eEUgK5u4fEYkZOL4JF8IZZOtzAlGgPHD7BqDuFLlC869-vNqZfQlVqo6fLhC0wfZYhVvqnZwvprkAlk6oF_U-IAo_4MYB3bxiUwz8r9tokyQ_1HS1qfoo8",
      category: "Cloud Solutions",
      title: "Cloud Migration & Data Platform",
      description: "Architected a secure and scalable cloud infrastructure to support enterprise-level data analytics.",
    },
  ];

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-white">
      <div className="layout-container flex h-full grow flex-col">
        <div className="w-full flex justify-center">
          <div className="flex flex-col max-w-6xl flex-1 w-full">
            <Header />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-primary w-full min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 py-20 md:py-32 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Innovative IT Solutions & Software Development
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Driving business growth through technology and expert implementation.
          </p>
          <button className="px-8 py-4 bg-accent-soft-green text-white rounded-lg font-semibold text-base md:text-lg hover:bg-accent-soft-green/90 transition-all duration-200 shadow-lg hover:shadow-xl">
            Explore Our Services
          </button>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="px-6 sm:px-10 py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-6 text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Our Expertise
            </h2>
            <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Our Technology Division is dedicated to crafting bespoke solutions that empower businesses to thrive in the digital age. From concept to launch, we are your trusted partners in innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex flex-col gap-4 rounded-lg border border-border-light bg-white p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-center size-12 rounded-lg bg-accent-soft-green/20">
                  <span className="material-symbols-outlined text-3xl text-accent-soft-green">
                    {service.icon}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-bold text-primary">{service.title}</h3>
                  <p className="text-sm text-slate-600 leading-normal">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="px-6 sm:px-10 py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex flex-col overflow-hidden rounded-lg border border-border-light bg-white group hover:shadow-xl transition-shadow"
              >
                <div className="overflow-hidden">
                  <img
                    className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    alt={project.title}
                    src={project.image}
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-accent-light-blue/20 text-primary mb-3 w-fit">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-bold text-primary mb-2">{project.title}</h3>
                  <p className="text-sm text-slate-600 mb-4 flex-grow">
                    {project.description}
                  </p>
                  <a
                    className="inline-flex items-center gap-2 font-semibold text-accent-soft-green group/link hover:text-accent-soft-green/80 transition-colors"
                    href="#"
                  >
                    View Case Study
                    <span className="material-symbols-outlined text-lg transition-transform duration-300 group-hover/link:translate-x-1">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="px-6 sm:px-10 py-16 md:py-24 bg-accent-light-blue/10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            Let's discuss how our technology solutions can help you achieve your goals. Schedule a free, no-obligation consultation with our experts today.
          </p>
          <button className="px-8 py-4 bg-primary text-white rounded-lg font-semibold text-base md:text-lg hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl">
            Schedule a Free Consultation
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

