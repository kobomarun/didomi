import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AgriculturePage() {
  const features = [
    {
      icon: "eco",
      title: "Cashew Processing",
      description: "Utilizing advanced techniques for premium quality cashews from farm to shelf.",
    },
    {
      icon: "spa",
      title: "Crop Cultivation",
      description: "Implementing sustainable and innovative methods for a diverse range of crops.",
    },
    {
      icon: "agriculture",
      title: "Farming Technology",
      description: "Leveraging cutting-edge technology to optimize yield and ensure sustainability.",
    },
  ];

  const sustainabilityMetrics = [
    {
      value: "45%",
      label: "Water Usage Reduction",
    },
    {
      value: "1,200+",
      label: "Farming Families Supported",
    },
    {
      value: "100%",
      label: "Ethically Sourced Materials",
    },
    {
      value: "30%",
      label: "Lower Carbon Footprint",
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
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAVC2C2runhoQjSZ5X_JJ-dB_o3wMSjRa-J12DCuH5Qh0cLgy5otLHvIOWwtAxcARaBPHoTZiCE6cfZcDO8gzrwjXLGqfHlYWFItz17FDmbPQkSo0c494PRB9TRS4XTnKyXswsrtFxFczTVMWdXoflR5eEUgK5u4fEYkZOL4JF8IZZOtzAlGgPHD7BqDuFLlC869-vNqZfQlVqo6fLhC0wfZYhVvqnZwvprkAlk6oF_U-IAo_4MYB3bxiUwz8r9tokyQ_1HS1qfoo8')",
          }}
        />
        <div className="absolute inset-0 bg-primary/60" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 py-20 md:py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Agriculture, Crop Production & Processing
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Pioneering sustainable agriculture for a better future.
            </p>
            <button className="px-8 py-4 bg-accent-soft-green text-white rounded-lg font-semibold text-base md:text-lg hover:bg-accent-soft-green/90 transition-all duration-200 shadow-lg hover:shadow-xl">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 sm:px-10 py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col gap-4 rounded-lg border border-border-light bg-white p-6 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-center size-12 rounded-lg bg-accent-soft-green/20">
                  <span className="material-symbols-outlined text-3xl text-accent-soft-green">
                    {feature.icon}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-primary">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-6 sm:px-10 py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                className="rounded-2xl shadow-xl w-full"
                alt="Cashew Processing"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnBBqBrotStdTeFCpn5JL8DwjZGP85mrPlPc1VLZ7jLtGZwJHcmWcQL-fY4YUnlpDi_bE28hbYIMyAL9ime7Nb4MGvl6pnYLNHNeTvQTvZ0EROmXJUZjRVzNDqYhiI-DFINRVcJqKx2LJCmQSbsNFtmsaic_Km_h7lHirRVsX6EM3I64A9Rg-IoKrnyyE53nplaDpig9H82Ld-PUl_Ad3G121vcMBXqm6BYyV0M8JI_U73Zc_O2N76ngNnhVVY3pvXT3pK3FyJw4k"
              />
            </div>
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-accent-soft-green/20 text-accent-soft-green font-semibold text-sm mb-4">
                OUR PROCESS
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
                From Seed to Shelf
              </h2>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                Our meticulous 'seed-to-shelf' cashew journey ensures quality control at every stage. We work directly with farmers, implement sustainable practices, and leverage innovative processing techniques to deliver premium products that meet the highest standards. From cultivation to packaging, every step is carefully managed to bring you the finest cashews while supporting local communities and protecting the environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="px-6 sm:px-10 py-16 md:py-24 bg-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
                Committed to a Greener Planet
              </h2>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-8">
                Our sustainability mission drives everything we do. We prioritize ethical sourcing, implement water conservation strategies, and actively support farming communities. By choosing our products, you're contributing to a more sustainable agricultural ecosystem that benefits both people and the planet.
              </p>
              <button className="px-8 py-4 bg-accent-soft-green text-white rounded-lg font-semibold text-base md:text-lg hover:bg-accent-soft-green/90 transition-all duration-200 shadow-lg hover:shadow-xl">
                Our Sustainability Goals
              </button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {sustainabilityMetrics.map((metric, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-sm text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-accent-soft-green mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm md:text-base text-slate-600">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 sm:px-10 py-16 md:py-24 bg-accent-soft-green w-full">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Grow With Us
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Partner with us, invest in our mission, or become a client. Together, let's cultivate success and build a sustainable future.
          </p>
          <button className="px-8 py-4 bg-white text-accent-soft-green rounded-lg font-semibold text-base md:text-lg hover:bg-white/90 transition-all duration-200 shadow-lg hover:shadow-xl">
            Partner With Us
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

