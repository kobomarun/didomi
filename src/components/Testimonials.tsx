import Image from "next/image";
import { TESTIMONIALS } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="px-6 sm:px-10 py-16 md:py-24 bg-white">
      <div className="flex flex-col gap-10 items-center">
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-primary">
            What Our Partners Say
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 rounded-lg border border-border-light bg-card-light p-6"
            >
              <p className="text-base italic text-slate-700">{testimonial.quote}</p>
              <div className="flex items-center gap-4 mt-2">
                <div className="relative size-12 rounded-full overflow-hidden">
                  <Image
                    className="object-cover"
                    alt={testimonial.alt}
                    src={testimonial.image}
                    fill
                    sizes="48px"
                  />
                </div>
                <div>
                  <p className="font-bold text-sm text-primary">{testimonial.name}</p>
                  <p className="text-sm text-slate-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

