import Link from "next/link";
import Image from "next/image";
import { INDUSTRIES, type Industry } from "@/data/industries";

interface IndustrySectionProps {
  industry: Industry;
  index: number;
}

const IndustrySection = ({ industry, index }: IndustrySectionProps) => {
  const isEven = index % 2 === 0;
  const colorClass = industry.color === "accent-light-blue" ? "text-primary" : "text-accent-soft-green";
  const bgColorClass = industry.color === "accent-light-blue" ? "bg-accent-light-blue/20" : "bg-accent-soft-green/20";

  return (
    <section
      id={industry.id}
      className={`w-full ${index === 0 ? "" : "border-t border-border-light"}`}
    >
      <div className={`${industry.bgGradient} ${index === 0 ? "pt-8 md:pt-12 pb-16 md:pb-24" : "py-16 md:py-24"}`}>
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <div
            className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
              isEven ? "" : "lg:grid-flow-dense"
            }`}
          >
            {/* Image/Visual Section */}
            <div className={isEven ? "" : "lg:col-start-2"}>
              <div className="relative group">
                <div className="relative overflow-hidden rounded-2xl border-2 border-white shadow-xl aspect-[4/3]">
                  <Image
                    src={industry.image}
                    alt={`${industry.title} visual`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Overlay Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${industry.color === "accent-light-blue" ? "from-primary/90 to-transparent" : "from-accent-soft-green/90 to-transparent"} opacity-60`} />
                  
                  {/* Removed Stats Card */}
                </div>
                
                {/* Decorative elements */}
                <div className={`absolute -top-4 -right-4 w-32 h-32 ${bgColorClass} rounded-full blur-2xl opacity-50 -z-10`} />
                <div className={`absolute -bottom-4 -left-4 w-40 h-40 ${bgColorClass} rounded-full blur-2xl opacity-30 -z-10`} />
              </div>
            </div>

            {/* Content Section */}
            <div className={isEven ? "" : "lg:col-start-1"}>
              <div className="space-y-6">
                <div>
                  <span className={`inline-block px-4 py-2 rounded-full ${bgColorClass} ${colorClass} font-semibold text-sm mb-4`}>
                    {industry.title} Sector
                  </span>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
                    {industry.id === 'agriculture' ? industry.title : `Empowering ${industry.title} Excellence`}
                  </h2>
                  <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
                    {industry.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-4 pt-4">
                  <h4 className="font-semibold text-primary text-lg">Our Solutions Include:</h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {industry.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className={`material-symbols-outlined ${colorClass} text-xl flex-shrink-0 mt-0.5`}>
                          check_circle
                        </span>
                        <span className="text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-6">
                  <Link
                    href={industry.href}
                    className={`inline-block px-8 py-4 rounded-lg font-semibold text-base transition-all duration-200 shadow-lg hover:shadow-xl ${
                      industry.color === "accent-light-blue"
                        ? "bg-primary text-white hover:bg-primary/90"
                        : "bg-accent-soft-green text-white hover:bg-accent-soft-green/90"
                    }`}
                  >
                    {industry.cta}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function IndustrySections() {
  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="bg-white pt-16 md:pt-20 pb-8 md:pb-12">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <div className="flex flex-col gap-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-primary">
              Innovating Across Industries
            </h2>
            <p className="text-base font-normal leading-normal max-w-3xl mx-auto text-slate-600">
              We are dedicated to fostering advancements and creating value across a diverse range of critical industries.
            </p>
          </div>
        </div>
      </div>

      {/* Industry Sections */}
      {INDUSTRIES.map((industry, index) => (
        <IndustrySection key={industry.id} industry={industry} index={index} />
      ))}
    </div>
  );
}
