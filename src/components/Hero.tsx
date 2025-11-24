export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary to-[#0d2d4f] min-h-[60vh] flex items-center overflow-hidden w-full">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 py-12 md:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div className="text-center lg:text-left space-y-6">
            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Empowering Progress Across{" "}
              <span className="text-accent-light-blue">Four</span>{" "}
              <span className="text-accent-soft-green">Industries</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-xl lg:max-w-none">
              Education, Technology, Agriculture, and Safety solutions that drive innovation and create lasting impact for communities worldwide.
            </p>
            
            {/* Value Propositions */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-accent-light-blue text-2xl flex-shrink-0 mt-1">
                  check_circle
                </span>
                <div>
                  <p className="text-white font-semibold">Proven Expertise</p>
                  <p className="text-white/70 text-sm">15+ years delivering transformative solutions</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-accent-soft-green text-2xl flex-shrink-0 mt-1">
                  check_circle
                </span>
                <div>
                  <p className="text-white font-semibold">Global Reach</p>
                  <p className="text-white/70 text-sm">Serving clients across 50+ countries</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-accent-light-blue text-2xl flex-shrink-0 mt-1">
                  check_circle
                </span>
                <div>
                  <p className="text-white font-semibold">Innovation First</p>
                  <p className="text-white/70 text-sm">Cutting-edge solutions for tomorrow's challenges</p>
                </div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-4 bg-white text-primary rounded-lg font-semibold text-base hover:bg-white/95 transition-all duration-200 shadow-lg hover:shadow-xl">
                Start Your Project
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white/30 text-white rounded-lg font-semibold text-base hover:bg-white/10 hover:border-white/50 transition-all duration-200">
                Explore Solutions
              </button>
            </div>
          </div>
          
          {/* Right Column: Visual Elements */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Main Visual Card */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  {/* Sector Icons */}
                  <div className="flex flex-col items-center gap-3 p-6 bg-white/5 rounded-xl border border-white/10">
                    <div className="w-16 h-16 bg-accent-light-blue/20 rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-3xl text-accent-light-blue">
                        school
                      </span>
                    </div>
                    <p className="text-white font-semibold text-sm">Education</p>
                  </div>
                  <div className="flex flex-col items-center gap-3 p-6 bg-white/5 rounded-xl border border-white/10">
                    <div className="w-16 h-16 bg-accent-light-blue/20 rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-3xl text-accent-light-blue">
                        developer_mode
                      </span>
                    </div>
                    <p className="text-white font-semibold text-sm">Technology</p>
                  </div>
                  <div className="flex flex-col items-center gap-3 p-6 bg-white/5 rounded-xl border border-white/10">
                    <div className="w-16 h-16 bg-accent-soft-green/20 rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-3xl text-accent-soft-green">
                        eco
                      </span>
                    </div>
                    <p className="text-white font-semibold text-sm">Agriculture</p>
                  </div>
                  <div className="flex flex-col items-center gap-3 p-6 bg-white/5 rounded-xl border border-white/10">
                    <div className="w-16 h-16 bg-accent-soft-green/20 rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-3xl text-accent-soft-green">
                        health_and_safety
                      </span>
                    </div>
                    <p className="text-white font-semibold text-sm">Safety</p>
                  </div>
                </div>
                
                {/* Stats Bar */}
                <div className="mt-8 pt-8 border-t border-white/20">
                  <div className="flex justify-around text-center">
                    <div>
                      <p className="text-2xl font-bold text-white">500+</p>
                      <p className="text-white/70 text-xs mt-1">Projects</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white">50+</p>
                      <p className="text-white/70 text-xs mt-1">Countries</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white">10K+</p>
                      <p className="text-white/70 text-xs mt-1">Clients</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-light-blue/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent-soft-green/20 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

