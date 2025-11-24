import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const team = [
    {
      name: "John Doe",
      role: "Chief Executive Officer",
      image: "/images/team/john-doe.png",
    },
    {
      name: "Jane Smith",
      role: "Chief Technology Officer",
      image: "/images/team/jane-smith.png",
    },
    {
      name: "Samuel Lee",
      role: "Head of Agriculture",
      image: "/images/team/samuel-lee.png",
    },
    {
      name: "Emily White",
      role: "Director of Safety",
      image: "/images/team/jane-smith.png", // Reusing Jane's image as placeholder due to generation limit
    },
  ];

  const sectors = [
    {
      title: "Education",
      icon: "school",
      description: "Fostering lifelong learning through accessible, technology-driven educational platforms and programs.",
    },
    {
      title: "Technology",
      icon: "developer_mode",
      description: "Pioneering cutting-edge software and hardware solutions that solve complex challenges for modern enterprises.",
    },
    {
      title: "Agriculture",
      icon: "eco",
      description: "Enhancing food security and sustainability with smart farming technologies and efficient supply chains.",
    },
    {
      title: "Safety",
      icon: "health_and_safety",
      description: "Developing robust safety systems and protocols to protect people, assets, and environments across industries.",
    },
  ];

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-white overflow-x-hidden">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-primary py-20 md:py-32 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
             <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }} />
          </div>
          
          <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              About Didomi Consortium
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Innovating across Education, Technology, Agriculture, and Safety to build a better, more sustainable future for all.
            </p>
          </div>
        </section>

        {/* Core Principles Section */}
        <section className="py-16 md:py-24 bg-card-light">
          <div className="max-w-6xl mx-auto px-6 sm:px-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Core Principles</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Our mission, vision, and values are the foundation of our company, guiding our actions and decisions every day.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Mission */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-border-light text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="material-symbols-outlined text-3xl text-primary">rocket_launch</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Our Mission</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  To empower communities and industries through innovative solutions and unwavering commitment to quality and safety.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-border-light text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="material-symbols-outlined text-3xl text-primary">visibility</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Our Vision</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  To be the global benchmark for excellence and sustainable growth across our diverse operational sectors.
                </p>
              </div>

              {/* Values */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-border-light text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="material-symbols-outlined text-3xl text-primary">favorite</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Our Values</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Integrity, Innovation, and Impact. We believe in doing the right thing, pushing boundaries, and making a difference.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sectors of Expertise */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6 sm:px-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Sectors of Expertise</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                We apply our core principles across four key sectors to drive meaningful progress and create lasting value.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {sectors.map((sector, index) => (
                <div key={index} className="bg-card-light p-6 rounded-xl hover:bg-accent-light-blue/10 transition-colors group">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-2xl text-accent-soft-green">
                      {sector.icon}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-3">{sector.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    {sector.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        {/* <section className="py-16 md:py-24 bg-card-light">
          <div className="max-w-6xl mx-auto px-6 sm:px-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Meet Our Leadership</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Our dedicated team of experts is the driving force behind our innovation and success.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
              {team.map((member, index) => (
                <div key={index} className="flex flex-col items-center text-center group">
                  <div className="relative w-40 h-40 mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:border-accent-light-blue transition-colors">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-primary">{member.name}</h3>
                  <p className="text-sm text-slate-600 font-medium mt-1">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6 sm:px-10">
            <div className="bg-primary rounded-3xl p-8 md:p-16 text-center md:text-left relative overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-light-blue/10 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl" />
              
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="max-w-xl">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Join Our Team</h2>
                  <p className="text-white/80 text-lg">
                    Ready to make an impact? Explore career opportunities at Didomi Consortium and help us shape a better future.
                  </p>
                </div>
                <Link 
                  href="#" 
                  className="px-8 py-4 bg-[#d4a373] text-primary font-bold rounded-full hover:bg-[#c49363] transition-colors shadow-lg whitespace-nowrap"
                >
                  View Careers
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
