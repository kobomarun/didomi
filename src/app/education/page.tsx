import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function EducationPage() {
  const regions = [
    {
      icon: "public",
      title: "Europe",
      description: "Explore a rich tapestry of cultures and world-renowned universities across the European continent.",
    },
    {
      icon: "flag",
      title: "USA",
      description: "Access cutting-edge research and diverse academic programs in the United States.",
    },
    {
      icon: "park",
      title: "Canada",
      description: "Experience high-quality education in a welcoming, multicultural environment in Canada.",
    },
  ];

  const scholarships = [
    {
      icon: "school",
      title: "Merit-Based",
      description: "For students with outstanding academic achievements.",
    },
    {
      icon: "attach_money",
      title: "Need-Based",
      description: "Financial aid for students who demonstrate financial need.",
    },
    {
      icon: "menu_book",
      title: "University-Specific",
      description: "Exclusive scholarships offered by our partner institutions.",
    },
  ];

  const steps = [
    {
      number: "1",
      title: "Application",
      description: "Submit your profile and documents with our easy-to-use portal.",
    },
    {
      number: "2",
      title: "Personalized Guidance",
      description: "Receive expert advice on universities and courses tailored to you.",
    },
    {
      number: "3",
      title: "Admission Secured",
      description: "We help you secure your admission offer from your dream university.",
    },
    {
      number: "4",
      title: "Visa Support",
      description: "Complete guidance through the entire student visa application process.",
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
      <section className="relative w-full min-h-[70vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC5r1y1DMcjaIrkordEXtWufK4QmPsKUJoT3455Up4ayLLKo0UvSyNBw7CO3qKYS-TpQXj1Z_VwTFK4dhHfhcJ6I9m1Sj34pBdVpWYvByLBW_M1e9IlkyhJT9hwnLEC2Zr5cYZuHIoNj_3-UknqMFogvx_8slESH4WN8XmuaVdUp48h8YMyz85C5HKKn3j5sQFllSzaWP22IVfIPNp1Tv0FGI3ocHhXu-Ljkf4-6X0GphpDi_osmn6-2vT58ZsItY3RcPuw1uM5eeE')",
          }}
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 py-20 md:py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Study Abroad With Scholarship Opportunities
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Let us help you achieve your educational dreams abroad with expert guidance and support.
            </p>
            <button className="px-8 py-4 bg-accent-light-blue text-white rounded-lg font-semibold text-base md:text-lg hover:bg-accent-light-blue/90 transition-all duration-200 shadow-lg hover:shadow-xl">
              Apply Now
            </button>
          </div>
        </div>
      </section>

      {/* Expert Admission Assistance Section */}
      <section className="px-6 sm:px-10 py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            Expert Admission Assistance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {regions.map((region) => (
              <div
                key={region.title}
                className="flex flex-col gap-4 rounded-lg border border-border-light bg-white p-6 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-center size-12 rounded-lg bg-accent-light-blue/20">
                  <span className="material-symbols-outlined text-3xl text-accent-light-blue">
                    {region.icon}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-primary">{region.title}</h3>
                <p className="text-slate-600">{region.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarships Section */}
      <section className="px-6 sm:px-10 py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-6">
            Unlock Your Potential with Scholarships
          </h2>
          <p className="text-base md:text-lg text-slate-600 text-center max-w-3xl mx-auto mb-12">
            We provide comprehensive assistance to help you find and secure scholarships that match your academic profile and financial needs, making your dream of studying abroad a reality.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {scholarships.map((scholarship) => (
              <div
                key={scholarship.title}
                className="flex flex-col gap-4 rounded-lg border border-border-light bg-white p-6 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-center size-12 rounded-lg bg-accent-light-blue/20">
                  <span className="material-symbols-outlined text-3xl text-accent-light-blue">
                    {scholarship.icon}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-primary">{scholarship.title}</h3>
                <p className="text-slate-600">{scholarship.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Step Process Section */}
      <section className="px-6 sm:px-10 py-16 md:py-24 bg-accent-light-blue/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            Your Journey to Success: Our 4-Step Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col items-center text-center gap-4">
                <div className="flex items-center justify-center size-16 rounded-full bg-accent-light-blue text-white text-2xl font-bold">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-primary">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 sm:px-10 py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Let us be your trusted partner in achieving your international education goals. Contact us today for a free consultation.
          </p>
          <button className="px-8 py-4 bg-accent-light-blue text-white rounded-lg font-semibold text-base md:text-lg hover:bg-accent-light-blue/90 transition-all duration-200 shadow-lg hover:shadow-xl">
            Apply Now
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

