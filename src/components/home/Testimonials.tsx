import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  location: string;
  image: string;
  rating: number;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Ahmed Al-Mansour',
    location: 'Dubai, UAE',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    rating: 5,
    text: 'The quality of the thoub I purchased exceeded my expectations. The fabric is breathable and comfortable, perfect for both casual and formal occasions.'
  },
  {
    id: '2',
    name: 'Fatima Al-Harbi',
    location: 'Riyadh, KSA',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    rating: 5,
    text: 'I ordered an abaya for a special event and was amazed by both the quality and the design. The attention to detail is remarkable, and I received many compliments.'
  },
  {
    id: '3',
    name: 'Khalid Al-Nasser',
    location: 'Doha, Qatar',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
    rating: 4,
    text: 'The traditional clothing for my son was perfect for Eid celebrations. The shipping was fast, and their customer service was excellent when I needed help with sizing.'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1a365d] mb-3">
          Customer Reviews
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          See what our customers are saying about their experience with our products and service.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star 
                    key={i}
                    className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              
              <p className="text-gray-700 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;