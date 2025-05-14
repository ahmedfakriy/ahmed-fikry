import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="bg-[#1a365d] text-white rounded-lg overflow-hidden mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 flex items-center">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">About KHALEEJI</h1>
                <p className="text-gray-200 mb-6">
                  We're dedicated to preserving and celebrating traditional Gulf fashion while bringing it into the modern era.
                </p>
              </div>
            </div>
            <div className="h-64 md:h-auto relative">
              <img 
                src="https://images.pexels.com/photos/5710242/pexels-photo-5710242.jpeg" 
                alt="About KHALEEJI" 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#c9a55c]"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#1a365d]/20"></div>
            </div>
          </div>
        </div>
        
        {/* Our Story */}
        <div className="mb-20">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1a365d] mb-4">Our Story</h2>
            <div className="w-20 h-1 bg-[#c9a55c] mx-auto mb-6"></div>
            <p className="text-gray-700 text-lg leading-relaxed">
              Founded in 2020, KHALEEJI began with a simple yet powerful vision: to create beautiful, authentic Gulf clothing that honors tradition while embracing contemporary sensibilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/5384423/pexels-photo-5384423.jpeg" 
                alt="Our founder" 
                className="w-full h-auto"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-[#1a365d] mb-4">From Passion to Purpose</h3>
              <p className="text-gray-700 mb-4">
                Our journey began when our founder, a fashion graduate with deep roots in Gulf culture, noticed a gap in the market for high-quality, authentic Gulf clothing that respected tradition while offering modern appeal.
              </p>
              <p className="text-gray-700 mb-4">
                Working with skilled artisans and using premium materials, we've created collections that stand out for their craftsmanship, attention to detail, and cultural authenticity.
              </p>
              <p className="text-gray-700">
                Today, KHALEEJI is proud to serve customers across the world, bringing the elegance and beauty of Gulf fashion to international audiences while remaining true to our cultural heritage.
              </p>
            </div>
          </div>
        </div>
        
        {/* Values */}
        <div className="mb-20 bg-gray-50 py-16 px-4 rounded-lg">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1a365d] mb-4">Our Values</h2>
            <div className="w-20 h-1 bg-[#c9a55c] mx-auto mb-6"></div>
            <p className="text-gray-700 text-lg">
              These core principles guide everything we do at KHALEEJI.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-[#1a365d]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#1a365d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1a365d] mb-2">Cultural Authenticity</h3>
              <p className="text-gray-600">
                We honor Gulf traditions and craft practices in everything we create, ensuring our pieces are culturally authentic.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-[#1a365d]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#1a365d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1a365d] mb-2">Quality Excellence</h3>
              <p className="text-gray-600">
                We use only the finest materials and work with skilled artisans to ensure exceptional quality in every garment.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-[#1a365d]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#1a365d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1a365d] mb-2">Innovation</h3>
              <p className="text-gray-600">
                While respecting tradition, we continuously explore new designs and approaches to keep Gulf fashion relevant and exciting.
              </p>
            </div>
          </div>
        </div>
        
        {/* Team */}
        <div className="mb-20">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1a365d] mb-4">Our Team</h2>
            <div className="w-20 h-1 bg-[#c9a55c] mx-auto mb-6"></div>
            <p className="text-gray-700 text-lg">
              Meet the passionate people behind KHALEEJI.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Sarah Al-Harbi",
                role: "Founder & Creative Director",
                image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg"
              },
              {
                name: "Ahmed Al-Qasim",
                role: "Head of Design",
                image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
              },
              {
                name: "Layla Al-Mansour",
                role: "Production Manager",
                image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
              },
              {
                name: "Khalid Al-Farsi",
                role: "Customer Relations",
                image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg"
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 rounded-full overflow-hidden w-40 h-40 mx-auto">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#1a365d]">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;