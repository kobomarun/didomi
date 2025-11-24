import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SafetyPage() {
  const expertise = [
    {
      icon: "school",
      title: "Custom Training Programs",
      description: "Tailored training modules designed to meet the specific needs of your industry and workforce.",
    },
    {
      icon: "shield",
      title: "Occupational Safety",
      description: "Expert consulting to identify and mitigate workplace hazards, ensuring a safe environment for all employees.",
    },
    {
      icon: "trending_up",
      title: "Risk Prevention Strategies",
      description: "Proactive strategies to prevent accidents and injuries before they happen.",
    },
    {
      icon: "check_circle",
      title: "Policy & Compliance",
      description: "Developing and implementing safety policies that meet and exceed regulatory standards.",
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
      <section className="px-6 sm:px-10 py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
                Workplace Safety Training & Policy Development
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
                Creating safer, compliant, and more productive work environments through expert-led training and comprehensive policy development.
              </p>
              <button className="px-8 py-4 bg-accent-soft-green text-white rounded-lg font-semibold text-base md:text-lg hover:bg-accent-soft-green/90 transition-all duration-200 shadow-lg hover:shadow-xl">
                Get a Free Safety Audit
              </button>
            </div>
            <div className="relative">
              <img
                className="rounded-2xl shadow-xl w-full"
                alt="Workplace Safety"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6cGS74w8s7XBAK0x3UDbRo5PNnYgCOELGxwkQ5VHYRbteA8z3cptcqx9CkOdHmuaTaO8dUDnGWUYrNM6QmbQ0kE7hSuY3vM8d5EqACr3rQLnDgwTc3WhzdcGJJxYd8j5xI_MldWKKWl6cqTtlF-RkeCzZ8Qyv4WEUNqlEQ4CJiDUoNz1Ly_tV6izKjOPJcPkGBFaop_VH8NL8QsUU86fVxf9EH8z7eJm8EMNngOcOLlCCYPNtiVYiCz3FQ7EhSugyZo-q58qiWzs"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="px-6 sm:px-10 py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-6">
            Our Expertise
          </h2>
          <p className="text-base md:text-lg text-slate-600 text-center max-w-3xl mx-auto mb-12">
            Didomi's Safety Division offers a comprehensive approach to workplace safety, combining customized training programs with robust policy development to ensure your organization is both compliant and secure.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-4 rounded-lg border border-border-light bg-white p-6 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-center size-12 rounded-lg bg-accent-light-blue/20">
                  <span className="material-symbols-outlined text-3xl text-accent-light-blue">
                    {item.icon}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-primary">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="px-6 sm:px-10 py-16 md:py-24 bg-accent-light-blue/5">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  Ready to Build a Safer Workplace?
                </h2>
                <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                  Get in touch with our safety experts today. We'll work with you to assess your needs and develop a tailored safety program that protects your people and your business.
                </p>
              </div>
              <div>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">Full Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">Company</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your Company Inc."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="How can we help you improve workplace safety?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-primary text-white rounded-lg font-semibold text-base hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    Submit Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

