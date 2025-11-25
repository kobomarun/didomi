import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function AgriculturePage() {
  const foundations = [
    {
      title: "Our Vision",
      icon: "visibility",
      description: "To be a leading agro-processing and export company in Africa, known for delivering premium, sustainably produced farm products.",
    },
    {
      title: "Our Mission",
      icon: "flag",
      points: [
        "Produce and process high-quality agricultural products",
        "Empower local farmers and create sustainable livelihoods",
        "Drive innovation in agro-processing",
        "Contribute to food security and economic development",
      ],
    },
    {
      title: "Core Values",
      icon: "favorite",
      values: ["Integrity", "Quality", "Sustainability", "Community", "Innovation"],
    },
  ];

  const products = [
    {
      title: "Farm Cultivation",
      description: "Our dedicated team of farmers consists of both men and women who work tirelessly to cultivate diverse crops including cassava, corn, tomatoes, and vegetables. We are committed to empowering local communities through sustainable farming practices.",
      crops: ["Cassava", "Tomatoes", "Corn", "Vegetables"],
      image: "/images/farm-cultivation.jpg",
    },
    {
      title: "Fresh Produce Market",
      description: "Our vibrant market stalls showcase the abundance of fresh produce directly from our farms. From colorful vegetables to fresh fruits, we bring the best of African agriculture to local communities.",
      items: ["Fresh Vegetables", "Leafy Greens", "Seasonal Fruits", "Root Crops"],
      image: "/images/fresh-produce-market.jpg",
    },
    {
      title: "Premium Cashew Processing",
      description: "Our state-of-the-art processing facility ensures the highest quality cashew nuts. With strict quality control measures and trained workers, we deliver premium-grade cashews that meet international standards.",
      features: [
        "Quality Control & Inspection",
        "International Standards",
        "Clean Processing Environment",
        "Export-Ready Packaging",
      ],
      image: "/images/cashew-processing.jpg",
    },
  ];

  const categories = [
    {
      title: "Cashew Processing",
      icon: "agriculture",
      color: "bg-accent-soft-green",
    },
    {
      title: "Agricultural Production",
      icon: "agriculture",
      color: "bg-[#8B4513]",
    },
    {
      title: "Value-Added Products",
      icon: "inventory_2",
      color: "bg-[#D4A373]",
    },
    {
      title: "Farm Management",
      icon: "trending_up",
      color: "bg-accent-soft-green",
    },
  ];

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-white overflow-x-hidden">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-accent-soft-green py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>
          
          <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Didomi Farm
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              From our farms to your table - premium quality agricultural products
            </p>
          </div>
        </section>

        {/* Our Foundation Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6 sm:px-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-accent-soft-green mb-4">About Us</h2>
            </div>

            {/* About Us Story and Values */}
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {/* Our Story */}
              <div className="bg-accent-soft-green p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-6">Our Story</h3>
                <p className="text-white/90 mb-4 leading-relaxed">
                  Didomi Farms is an agribusiness enterprise committed to excellence in agricultural production, processing, and distribution. Established with a passion for transforming Africa's rich agricultural potential into premium-quality products, Didomi Farms began its journey with cashew nut processing, building a reputation for integrity, quality, and sustainability.
                </p>
                <p className="text-white/90 leading-relaxed">
                  Over the years, our commitment to innovation and community-driven growth has inspired us to expand our operations beyond cashew nuts — into diverse areas of crop cultivation, processing, and value-added agricultural products.
                </p>
              </div>

              {/* Values Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-accent-soft-green p-6 rounded-2xl text-white text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="material-symbols-outlined text-2xl">agriculture</span>
                  </div>
                  <h4 className="font-bold mb-2">Quality</h4>
                  <p className="text-sm text-white/80">Premium agricultural products</p>
                </div>
                
                <div className="bg-[#8B4513] p-6 rounded-2xl text-white text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="material-symbols-outlined text-2xl">public</span>
                  </div>
                  <h4 className="font-bold mb-2">Global Reach</h4>
                  <p className="text-sm text-white/80">International markets</p>
                </div>
                
                <div className="bg-[#D4A373] p-6 rounded-2xl text-white text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="material-symbols-outlined text-2xl">groups</span>
                  </div>
                  <h4 className="font-bold mb-2">Community</h4>
                  <p className="text-sm text-white/80">Empowering farmers</p>
                </div>
                
                <div className="bg-accent-soft-green p-6 rounded-2xl text-white text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="material-symbols-outlined text-2xl">eco</span>
                  </div>
                  <h4 className="font-bold mb-2">Sustainability</h4>
                  <p className="text-sm text-white/80">Eco-friendly practices</p>
                </div>
              </div>
            </div>

            {/* Foundation Title */}
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-accent-soft-green">Our Foundation</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {foundations.map((item, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 bg-accent-soft-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="material-symbols-outlined text-3xl text-accent-soft-green">{item.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-accent-soft-green mb-4">{item.title}</h3>
                  {item.description && (
                    <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                  )}
                  {item.points && (
                    <ul className="text-left space-y-2 text-sm text-slate-600">
                      {item.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-accent-soft-green text-lg mt-0.5">check_circle</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {item.values && (
                    <ul className="space-y-2 text-sm text-slate-600">
                      {item.values.map((value, idx) => (
                        <li key={idx} className="flex items-center justify-center gap-2">
                          <span className="material-symbols-outlined text-accent-soft-green text-lg">star</span>
                          <span>{value}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Products Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6 sm:px-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-accent-soft-green mb-4">Our Products</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                From our farms to your table - premium quality agricultural products
              </p>
            </div>

            <div className="space-y-16">
              {products.map((product, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
                    {/* Image */}
                    <div className={isEven ? '' : 'lg:col-start-2'}>
                      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                        <Image
                          src={product.image}
                          alt={product.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className={isEven ? '' : 'lg:col-start-1'}>
                      <h3 className="text-2xl md:text-3xl font-bold text-accent-soft-green mb-4">{product.title}</h3>
                      <p className="text-slate-600 mb-6 leading-relaxed">{product.description}</p>
                      
                      <div className="grid grid-cols-2 gap-3">
                        {(product.crops || product.items || product.features || []).map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-accent-soft-green text-lg">check_circle</span>
                            <span className="text-sm text-slate-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6 sm:px-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-accent-soft-green mb-4">Our Product Categories</h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <div key={index} className={`${category.color} p-8 rounded-2xl text-center text-white hover:scale-105 transition-transform cursor-pointer`}>
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="material-symbols-outlined text-3xl">{category.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold">{category.title}</h3>
                  {index === 3 && (
                    <p className="text-sm mt-2 text-white/90">Providing expertise and support</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
