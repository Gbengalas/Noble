import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Phone, Mail, Clock, MapPin, CheckCircle2, 
  Star, Play, Menu, X, ArrowRight, Wrench, ShieldCheck,
  Facebook, Twitter, Instagram, Linkedin, Zap
} from 'lucide-react';

const TopBar = () => (
  <div className="bg-slate-900 text-slate-300 py-2 px-4 text-sm hidden md:flex justify-between items-center">
    <div className="container mx-auto flex justify-between items-center">
      <div className="flex space-x-6">
        <span className="flex items-center"><Phone className="w-4 h-4 mr-2 text-orange-500" /> (123) 456-7890</span>
        <span className="flex items-center"><Mail className="w-4 h-4 mr-2 text-orange-500" /> support@nobleplumbing.com</span>
      </div>
      <div className="flex items-center">
        <Clock className="w-4 h-4 mr-2 text-orange-500" /> 24/7 Emergency Service
      </div>
    </div>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="bg-orange-500 p-2 rounded-lg flex space-x-1">
            <Wrench className="w-5 h-5 text-white" />
            <Zap className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl md:text-2xl font-bold text-slate-900">Noble</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-slate-900 font-medium hover:text-orange-500 transition">About Us</a>
          <a href="#services" className="text-slate-900 font-medium hover:text-orange-500 transition">Services</a>
          <a href="#blog" className="text-slate-900 font-medium hover:text-orange-500 transition">Blog</a>
          <a href="#contact" className="text-slate-900 font-medium hover:text-orange-500 transition">Contact</a>
        </div>

        <div className="hidden md:flex">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-medium flex items-center transition">
            <Phone className="w-4 h-4 mr-2" />
            (123) 456-7890
          </button>
        </div>

        <button className="md:hidden text-slate-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-t p-4 flex flex-col space-y-4">
          <a href="#about" className="text-slate-900 font-medium" onClick={() => setIsOpen(false)}>About Us</a>
          <a href="#services" className="text-slate-900 font-medium" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#blog" className="text-slate-900 font-medium" onClick={() => setIsOpen(false)}>Blog</a>
          <a href="#contact" className="text-slate-900 font-medium" onClick={() => setIsOpen(false)}>Contact</a>
          <button className="bg-orange-500 text-white px-6 py-2.5 rounded-full font-medium flex items-center justify-center">
            <Phone className="w-4 h-4 mr-2" />
            (123) 456-7890
          </button>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <div className="relative bg-slate-900 py-24 lg:py-32 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80" 
        alt="Plumber working" 
        className="w-full h-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
    </div>
    
    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-2xl">
        <p className="text-orange-500 font-semibold tracking-wider uppercase mb-4">Your Trusted Plumbing & Electrical Experts</p>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Fast Solutions for<br />Home Problems
        </h1>
        <p className="text-slate-300 text-lg mb-8 max-w-xl">
          From minor leaks to major electrical emergencies, our expert team is ready to deliver fast, reliable, and affordable solutions.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3.5 rounded-full font-medium transition text-center">
            Get a Free Quote
          </button>
          <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3.5 rounded-full font-medium transition text-center">
            Contact Us Today
          </button>
        </div>
        
        <div className="mt-12 flex items-center space-x-6">
          <div className="flex -space-x-3">
            <img src="https://i.pravatar.cc/100?img=1" alt="User" className="w-10 h-10 rounded-full border-2 border-slate-900" />
            <img src="https://i.pravatar.cc/100?img=2" alt="User" className="w-10 h-10 rounded-full border-2 border-slate-900" />
            <img src="https://i.pravatar.cc/100?img=3" alt="User" className="w-10 h-10 rounded-full border-2 border-slate-900" />
            <div className="w-10 h-10 rounded-full border-2 border-slate-900 bg-orange-500 flex items-center justify-center text-white text-xs font-bold">
              +
            </div>
          </div>
          <div>
            <div className="text-white font-bold text-xl">130K +</div>
            <div className="text-slate-400 text-sm">Customer Reviews</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const QuickBooking = () => (
  <div className="container mx-auto px-4 -mt-10 relative z-20">
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
      <div className="lg:w-1/3">
        <h3 className="text-2xl font-bold text-slate-900">Quick Service<br />Book in 60 Seconds.</h3>
      </div>
      <div className="lg:w-2/3 w-full flex flex-col md:flex-row gap-4">
        <input type="text" placeholder="Enter your full name" className="flex-1 px-4 py-3 rounded-full border border-slate-200 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500" />
        <input type="text" placeholder="Phone Number" className="flex-1 px-4 py-3 rounded-full border border-slate-200 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500" />
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium transition whitespace-nowrap">
          Submit Request
        </button>
      </div>
    </div>
  </div>
);

const About = () => {
  const [activeTab, setActiveTab] = useState('mission');
  
  return (
    <div id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80" alt="Plumbers discussing" className="rounded-2xl shadow-lg w-full" />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl hidden md:block">
                <img src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80&w=200&h=200" alt="Plumbing tools" className="rounded-xl w-32 h-32 object-cover" />
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <p className="text-orange-500 font-semibold tracking-wider uppercase mb-2">Who We Are</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Expert Solutions<br />for Every Home</h2>
            
            <div className="flex border-b border-slate-200 mb-6">
              <button 
                className={`pb-4 px-4 font-medium text-lg border-b-2 transition-colors ${activeTab === 'mission' ? 'border-orange-500 text-orange-500' : 'border-transparent text-slate-500 hover:text-slate-900'}`}
                onClick={() => setActiveTab('mission')}
              >
                Our Mission
              </button>
              <button 
                className={`pb-4 px-4 font-medium text-lg border-b-2 transition-colors ${activeTab === 'expertise' ? 'border-orange-500 text-orange-500' : 'border-transparent text-slate-500 hover:text-slate-900'}`}
                onClick={() => setActiveTab('expertise')}
              >
                Our Expertise
              </button>
              <button 
                className={`pb-4 px-4 font-medium text-lg border-b-2 transition-colors ${activeTab === 'values' ? 'border-orange-500 text-orange-500' : 'border-transparent text-slate-500 hover:text-slate-900'}`}
                onClick={() => setActiveTab('values')}
              >
                Our Values
              </button>
            </div>
            
            <div className="mb-8 text-slate-600 leading-relaxed">
              {activeTab === 'mission' && <p>At Noble, our mission is to provide fast, reliable, and high-quality plumbing and electrical services tailored to meet the unique needs of our customers. We strive to be your trusted partner in keeping your home and business running smoothly.</p>}
              {activeTab === 'expertise' && <p>With decades of combined experience, our certified technicians handle everything from routine maintenance to complex installations and emergency repairs with unmatched precision.</p>}
              {activeTab === 'values' && <p>Integrity, transparency, and excellence form the core of our business. We believe in honest pricing, punctual service, and leaving every workspace cleaner than we found it.</p>}
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center text-slate-700 font-medium">
                <CheckCircle2 className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" />
                Reliable, fast, and efficient service.
              </div>
              <div className="flex items-center text-slate-700 font-medium">
                <CheckCircle2 className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" />
                Skilled technicians, quality work.
              </div>
              <div className="flex items-center text-slate-700 font-medium">
                <CheckCircle2 className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" />
                Affordable pricing, no surprises.
              </div>
              <div className="flex items-center text-slate-700 font-medium">
                <CheckCircle2 className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" />
                Satisfaction guaranteed, every time.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Stats = () => (
  <div className="border-y border-slate-100 bg-slate-50 py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">25+</div>
          <div className="text-slate-500 font-medium">Years of Experience</div>
        </div>
        <div>
          <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">98%</div>
          <div className="text-slate-500 font-medium">Customer Satisfaction</div>
        </div>
        <div>
          <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">67+</div>
          <div className="text-slate-500 font-medium">Award-Winning Service</div>
        </div>
        <div>
          <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">24/7</div>
          <div className="text-slate-500 font-medium">Emergency Services</div>
        </div>
      </div>
    </div>
  </div>
);

const Services = () => {
  const servicesList = [
    "Emergency Plumbing",
    "Electrical Repairs",
    "Drain Cleaning",
    "Water Heaters",
    "Wiring & Panels"
  ];
  const [activeService, setActiveService] = useState(0);

  return (
    <div id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <p className="text-orange-500 font-semibold tracking-wider uppercase mb-2">Our Service</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 max-w-xl">Reliable, Fast, and<br />Expert Solutions</h2>
          </div>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-medium transition whitespace-nowrap">
            View All Services
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/3 flex flex-col space-y-2">
            {servicesList.map((service, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveService(idx)}
                className={`flex items-center justify-between p-4 rounded-xl text-left transition-all duration-300 ${activeService === idx ? 'bg-white shadow-md text-orange-500 font-bold border-l-4 border-orange-500' : 'text-slate-600 hover:bg-slate-50 font-medium'}`}
              >
                <span className="flex items-center">
                  {activeService === idx && <ArrowRight className="w-4 h-4 mr-2" />}
                  {service}
                </span>
              </button>
            ))}
          </div>
          <div className="lg:w-2/3">
            <div className="relative rounded-2xl overflow-hidden h-[400px] group">
              <img 
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80" 
                alt="Service" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold text-white mb-3">{servicesList[activeService]}</h3>
                <p className="text-slate-200 mb-6 max-w-2xl">
                  When an emergency strikes, you need fast and reliable service, and Noble is here to help. Our {servicesList[activeService].toLowerCase()} services are available 24/7 to handle any urgent issue. We understand how stressful it can be.
                </p>
                <div>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-medium transition">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Process = () => {
  const steps = [
    { num: "01", title: "Contact Us", desc: "Getting started with Noble is quick and hassle-free. Whether you're dealing with a leak, electrical fault, or any emergency, reaching out to us is the first step." },
    { num: "02", title: "Inspection & Diagnosis", desc: "Our expert technicians arrive promptly to assess the situation using advanced diagnostic tools." },
    { num: "03", title: "Upfront Pricing", desc: "We provide a clear, detailed estimate before any work begins, so there are no surprises." },
    { num: "04", title: "Expert Repair", desc: "Our certified professionals execute the repair efficiently and effectively, ensuring lasting results." },
    { num: "05", title: "Final Review", desc: "We walk you through the completed work and ensure your total satisfaction before leaving." },
  ];

  return (
    <div className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <div className="space-y-6 relative">
              <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-slate-200 hidden md:block"></div>
              
              {steps.map((step, idx) => (
                <div key={idx} className={`relative z-10 p-8 rounded-2xl transition-all duration-300 ${idx === 0 ? 'bg-slate-900 text-white shadow-xl' : 'bg-white text-slate-900 shadow-sm hover:shadow-md'}`}>
                  <div className={`text-4xl font-bold mb-4 ${idx === 0 ? 'text-orange-500' : 'text-slate-300'}`}>{step.num}</div>
                  <h4 className={`text-xl font-bold mb-3 ${idx === 0 ? 'text-white' : 'text-slate-900'}`}>{step.title}</h4>
                  <p className={idx === 0 ? 'text-slate-300' : 'text-slate-600'}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 lg:sticky lg:top-32 h-fit">
            <p className="text-orange-500 font-semibold tracking-wider uppercase mb-2">Our Process</p>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">Fixing Your<br />Home Issues<br />in Just 5 Steps</h2>
            <p className="text-slate-600 text-lg mb-8">
              We've streamlined our service process to ensure you get the fastest, most reliable solution to your problems with minimal disruption to your day.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3.5 rounded-full font-medium transition">
              Get a Free Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-orange-500 font-semibold tracking-wider uppercase mb-2">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Why Noble Is Your<br />Trusted Partner</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <div 
              className="relative rounded-2xl overflow-hidden group cursor-pointer"
              onClick={() => setIsVideoOpen(true)}
            >
              <img 
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80" 
                alt="Plumbing work" 
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-slate-900/20 flex items-center justify-center group-hover:bg-slate-900/40 transition-colors">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl text-orange-500 group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 ml-1" fill="currentColor" />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center">
                <ShieldCheck className="w-8 h-8 text-orange-500" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Skilled & Certified Technicians</h4>
                <p className="text-slate-600">Our team consists of certified, licensed professionals with extensive experience handling all types of systems.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-orange-500" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Clear & Honest Pricing</h4>
                <p className="text-slate-600">We believe in honesty and transparency with our customers. When you choose Noble, you know exactly what you're paying for.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center">
                <Clock className="w-8 h-8 text-orange-500" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">24/7 Emergency Services</h4>
                <p className="text-slate-600">Problems don't always happen during business hours, which is why we offer round-the-clock emergency support.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="relative w-full max-w-4xl bg-black rounded-xl overflow-hidden shadow-2xl">
            <button 
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-10 text-white hover:text-orange-500 transition-colors bg-black/50 rounded-full p-2"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="aspect-video">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/y8Yv4pnO7qc?autoplay=1" 
                title="Plumbing Work Video" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      text: "\"Noble was an absolute lifesaver when my water heater broke down in the middle of winter. I called them in a panic, and within an hour, a technician was at my door, diagnosing the issue. They explained everything clearly.\"",
      name: "Emily Carter",
      role: "Homeowner",
      img: "https://i.pravatar.cc/150?img=44",
      source: "Google"
    },
    {
      text: "\"Running a busy restaurant means problems can't wait, and Noble understands that better than anyone. When our kitchen sink clogged during peak hours, they sent a technician immediately.\"",
      name: "Michael Thompson",
      role: "Restaurant Owner",
      img: "https://i.pravatar.cc/150?img=11",
      source: "Yelp"
    }
  ];

  return (
    <div className="py-24 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-orange-500 font-semibold tracking-wider uppercase mb-2">Testimonial</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">What Our Customers Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 shadow-xl relative">
              <div className="flex text-orange-500 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-slate-700 text-lg mb-8 italic">
                {review.text}
              </p>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center">
                  <div className="relative">
                    <img src={review.img} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
                    <div className="absolute -top-2 -right-2 bg-orange-500 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-serif">"</div>
                  </div>
                  <div className="ml-4">
                    <h5 className="font-bold text-slate-900">{review.name}</h5>
                    <p className="text-slate-500 text-sm">{review.role}</p>
                  </div>
                </div>
                <div className="text-slate-400 font-bold text-xl opacity-50">
                  {review.source}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-10 space-x-2">
          <div className="w-3 h-3 rounded-full bg-orange-500"></div>
          <div className="w-3 h-3 rounded-full bg-slate-700"></div>
          <div className="w-3 h-3 rounded-full bg-slate-700"></div>
          <div className="w-3 h-3 rounded-full bg-slate-700"></div>
        </div>
      </div>
    </div>
  );
};

const Gallery = () => (
  <div className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-orange-500 font-semibold tracking-wider uppercase mb-2">Our Work</p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Quality Work You Can Trust</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
        <div className="md:col-span-1 md:row-span-2 relative rounded-2xl overflow-hidden group">
          <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80" alt="Work 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <h4 className="text-white font-bold text-xl">Commercial Repair</h4>
          </div>
        </div>
        <div className="relative rounded-2xl overflow-hidden group">
          <img src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80" alt="Work 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        </div>
        <div className="relative rounded-2xl overflow-hidden group">
          <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80" alt="Work 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        </div>
        <div className="relative rounded-2xl overflow-hidden group">
          <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80" alt="Work 4" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        </div>
        <div className="relative rounded-2xl overflow-hidden group">
          <img src="https://images.unsplash.com/photo-1607472586893-edb57cbbea71?auto=format&fit=crop&q=80" alt="Work 5" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        </div>
      </div>
    </div>
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div id="contact" className="relative py-24 bg-slate-900">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80" 
          alt="Background" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-orange-500 font-semibold tracking-wider uppercase mb-2">Contact Us</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white">Book Expert Service Today!</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          <div className="lg:w-1/2 text-white">
            <h3 className="text-2xl font-bold mb-6">24/7 Emergency Service</h3>
            <p className="text-slate-300 mb-6 text-lg">
              <strong>Don't let issues disrupt your home! Noble offers 24/7 emergency services, ensuring fast, professional, and reliable repairs. Call now and get a licensed professional at your doorstep!</strong>
            </p>
            <p className="text-slate-400 mb-8">
              We understand the stress and potential damage an emergency can cause, which is why we prioritize quick response times, quality repairs, and customer satisfaction. Whether it's a small leak or a major electrical issue, our licensed professionals arrive fully equipped.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mr-4">
                  <Phone className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Call Us 24/7</p>
                  <p className="text-xl font-bold">(123) 456-7890</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Email Us</p>
                  <p className="text-xl font-bold">support@nobleplumbing.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Get in Touch with Us</h3>
              
              {submitStatus === 'success' ? (
                <div className="bg-green-50 text-green-800 p-6 rounded-xl text-center border border-green-200">
                  <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-bold mb-2">Request Sent Successfully!</h4>
                  <p>We'll be in touch with you shortly.</p>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name" 
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500" 
                  />
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Email address" 
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500" 
                  />
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Phone number" 
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500" 
                  />
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-slate-700"
                  >
                    <option value="">Select a service</option>
                    <option value="residential">Residential Services</option>
                    <option value="commercial">Commercial Services</option>
                    <option value="emergency">Emergency Service</option>
                  </select>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Type your message" 
                    rows={4} 
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 resize-none"
                  ></textarea>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-400 text-white py-4 rounded-xl font-bold text-lg transition shadow-lg shadow-orange-500/30 flex justify-center items-center"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Submit Request'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Blog = () => {
  const posts = [
    {
      img: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80",
      date: "March 10, 2026",
      title: "When to Call an Expert for Repairs"
    },
    {
      img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80",
      date: "February 28, 2026",
      title: "How to Maintain Your System Year-Round"
    },
    {
      img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80",
      date: "December 20, 2025",
      title: "Understanding the Importance of Regular Maintenance"
    }
  ];

  return (
    <div id="blog" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <p className="text-orange-500 font-semibold tracking-wider uppercase mb-2">Updates News</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Smart Solutions<br />for Every Home</h2>
          </div>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-medium transition whitespace-nowrap">
            View All News
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
              <div className="h-60 overflow-hidden">
                <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <p className="text-slate-500 text-sm mb-3">{post.date}</p>
                <h4 className="text-xl font-bold text-slate-900 group-hover:text-orange-500 transition-colors">{post.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CtaBanner = () => (
  <div className="bg-slate-800 py-16">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center md:text-left">
          Get 24/7 Emergency<br />Help — Call Today!
        </h2>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center transition shadow-lg shadow-orange-500/30 whitespace-nowrap">
          <Phone className="w-5 h-5 mr-3" />
          (123) 456-7890
        </button>
      </div>
    </div>
  </div>
);

const Footer = () => (
  <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <div className="bg-orange-500 p-2 rounded-lg flex space-x-1">
              <Wrench className="w-5 h-5 text-white" />
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">Noble</span>
          </div>
          <p className="text-slate-400">
            Noble provides top-quality plumbing and electrical services, from emergency repairs to full installations. Trust our certified experts.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
          <ul className="space-y-3">
            <li><a href="#" className="hover:text-orange-500 transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-orange-500 transition-colors">Services</a></li>
            <li><a href="#" className="hover:text-orange-500 transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-orange-500 transition-colors">Contact Us</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold text-lg mb-6">Service Areas</h4>
          <ul className="space-y-3">
            <li><a href="#" className="hover:text-orange-500 transition-colors">Emergency Plumbing</a></li>
            <li><a href="#" className="hover:text-orange-500 transition-colors">Electrical Repairs</a></li>
            <li><a href="#" className="hover:text-orange-500 transition-colors">Drain Cleaning</a></li>
            <li><a href="#" className="hover:text-orange-500 transition-colors">Wiring & Panels</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-start">
              <MapPin className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
              <span>123 Main Street, Your City, State, ZIP</span>
            </li>
            <li className="flex items-center">
              <Mail className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" />
              <a href="mailto:contact@nobleplumbing.com" className="hover:text-white transition-colors">contact@nobleplumbing.com</a>
            </li>
            <li className="flex items-center">
              <Phone className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" />
              <a href="tel:1234567890" className="hover:text-white transition-colors">(123) 456-7890</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
        <p>&copy; 2026 Noble Electrical and Plumbing. All Rights Reserved.</p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 }
  };

  return (
    <div className="font-sans text-slate-900 antialiased selection:bg-orange-500 selection:text-white">
      <TopBar />
      <Navbar />
      <Hero />
      <motion.div {...fadeInUp}><QuickBooking /></motion.div>
      <motion.div {...fadeInUp}><About /></motion.div>
      <motion.div {...fadeInUp}><Stats /></motion.div>
      <motion.div {...fadeInUp}><Services /></motion.div>
      <motion.div {...fadeInUp}><Process /></motion.div>
      <motion.div {...fadeInUp}><WhyChooseUs /></motion.div>
      <motion.div {...fadeInUp}><Testimonials /></motion.div>
      <motion.div {...fadeInUp}><Gallery /></motion.div>
      <motion.div {...fadeInUp}><Contact /></motion.div>
      <motion.div {...fadeInUp}><Blog /></motion.div>
      <motion.div {...fadeInUp}><CtaBanner /></motion.div>
      <Footer />
    </div>
  );
}
