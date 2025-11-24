import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Sectors from "@/components/Sectors";
import IndustrySections from "@/components/IndustrySections";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-white">
      <div className="layout-container flex h-full grow flex-col">
        <div className="w-full flex justify-center">
          <div className="flex flex-col max-w-6xl flex-1 w-full">
            <Header />
          </div>
        </div>
      </div>
      <Hero />
      <div className="layout-container flex h-full grow flex-col">
        <div className="w-full flex justify-center">
          <div className="flex flex-col max-w-6xl flex-1 w-full">
            <main>
            </main>
          </div>
        </div>
      </div>
      <IndustrySections />
      <div className="layout-container flex h-full grow flex-col">
        <div className="w-full flex justify-center">
          <div className="flex flex-col max-w-6xl flex-1 w-full">
            <main>
              <Testimonials />
            </main>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
