"use client";

import HeroSection from "@/components/hero";
import '../app/globals.css';
import {
  featuresData,
  howItWorksData,
  statsData,
  testimonialsData,
} from "@/data/landing";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2s"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4s"></div>
      </div>

      <div className="mt-40">
        <HeroSection />
        
        {/* Enhanced Stats Section */}
        <section className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {statsData.map((stat, index) => (
                <div 
                  key={index} 
                  className="group stats-item text-center transform hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
                    <div className="relative bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-3 animate-countup">
                        {stat.value}
                      </div>
                      <div className="text-gray-700 font-medium tracking-wide">{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Features Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4">
                Everything you need to manage finances
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuresData.map((feature, index) => (
                <Card 
                  key={index} 
                  className="group relative p-0 bg-gradient-to-br from-white to-gray-50/50 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-500"></div>
                  
                  <CardContent className="relative space-y-6 p-8">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div className="text-blue-600 group-hover:text-purple-600 transition-colors duration-300">
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Ultra-Professional How It Works Section */}
        <section className="py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl animate-pulse animation-delay-2s"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl animate-spin-slow"></div>
          </div>
          
          {/* Geometric pattern overlay */}
          <div className="absolute inset-0 bg-hexagon-pattern opacity-5"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            {/* Enhanced Header */}
            <div className="text-center mb-24">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mb-6 shadow-2xl">
                <div className="w-8 h-8 text-white">🚀</div>
              </div>
              
              <h2 className="text-5xl lg:text-7xl font-black bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6 leading-tight">
                How It Works
              </h2>
              
              <p className="text-slate-600 text-xl max-w-3xl mx-auto leading-relaxed mb-8">
                Experience the future of financial management with our intuitive, 
                AI-powered platform designed for modern professionals
              </p>
              
              <div className="flex justify-center items-center space-x-4">
                <div className="w-32 h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent rounded-full"></div>
                <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
                <div className="w-32 h-1 bg-gradient-to-r from-transparent via-purple-600 to-transparent rounded-full"></div>
              </div>
            </div>
            
            {/* Revolutionary Step Layout */}
            <div className="relative">
              {/* Dynamic connecting path */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px">
                <div className="w-full h-full bg-gradient-to-r from-blue-200 via-purple-300 via-blue-300 to-purple-200 rounded-full"></div>
                <div className="absolute top-0 left-0 w-0 h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-progress-line"></div>
              </div>
              
              {/* Floating progress dots */}
              <div className="hidden lg:flex absolute top-1/2 left-0 right-0 justify-between items-center transform -translate-y-1/2 px-12">
                {howItWorksData.map((_, index) => (
                  <div 
                    key={index}
                    className="w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-lg animate-pulse"
                    style={{ animationDelay: `${index * 0.5}s` }}
                  ></div>
                ))}
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 relative z-10">
                {howItWorksData.map((step, index) => (
                  <div 
                    key={index} 
                    className="group relative"
                    style={{ animationDelay: `${index * 300}ms` }}
                  >
                    {/* Main Card Container */}
                    <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl hover:shadow-4xl transition-all duration-700 transform hover:-translate-y-4 border border-white/20 group-hover:border-blue-200/50 overflow-hidden">
                      {/* Gradient overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                      
                      {/* Top accent line */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-t-3xl"></div>
                      
                      {/* Step Number Badge */}
                      <div className="absolute -top-6 left-8">
                        <div className="relative">
                          <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-2xl transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
                            <span className="text-white font-black text-lg">{index + 1}</span>
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-2xl blur-lg opacity-50 animate-pulse"></div>
                        </div>
                      </div>
                      
                      {/* Icon Container */}
                      <div className="flex justify-center mb-8 mt-4">
                        <div className="relative">
                          <div className="w-24 h-24 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-3xl flex items-center justify-center shadow-2xl group-hover:shadow-blue-500/25 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3">
                            <div className="text-white text-3xl">
                              {step.icon}
                            </div>
                          </div>
                          
                          {/* Pulsing rings around icon */}
                          <div className="absolute inset-0 rounded-3xl border-2 border-blue-400/30 animate-ping group-hover:border-purple-400/50"></div>
                          <div className="absolute inset-0 rounded-3xl border-2 border-purple-400/20 animate-ping animation-delay-1s group-hover:border-blue-400/50"></div>
                          
                          {/* Floating particles */}
                          <div className="absolute -top-2 -right-2 w-3 h-3 bg-yellow-400 rounded-full animate-bounce opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-pink-400 rounded-full animate-bounce animation-delay-500ms opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="text-center relative z-10">
                        <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                          {step.title}
                        </h3>
                        
                        <p className="text-slate-600 leading-relaxed text-lg group-hover:text-slate-700 transition-colors duration-300 mb-6">
                          {step.description}
                        </p>
                        
                        {/* Action indicator */}
                        <div className="inline-flex items-center justify-center space-x-2 text-blue-600 font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                          <span>Learn More</span>
                          <div className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300">→</div>
                        </div>
                      </div>
                      
                      {/* Bottom decorative element */}
                      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-blue-50/50 to-transparent rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    
                    {/* Mobile connection line */}
                    {index < howItWorksData.length - 1 && (
                      <div className="lg:hidden flex justify-center mt-8 mb-8">
                        <div className="w-px h-16 bg-gradient-to-b from-blue-300 to-purple-300 relative">
                          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
                          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Bottom CTA */}
            <div className="text-center mt-20">
              <div className="inline-flex items-center justify-center space-x-4 bg-white/80 backdrop-blur-xl rounded-2xl px-8 py-4 shadow-xl border border-white/20">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-slate-700 font-semibold">Ready in under 5 minutes</span>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Testimonials Section */}
        <section className="py-24 bg-white relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4">
                What Our Users Say
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Join thousands of satisfied customers who trust our platform
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonialsData.map((testimonial, index) => (
                <Card 
                  key={index} 
                  className="group relative p-0 bg-gradient-to-br from-white to-gray-50/50 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-500"></div>
                  
                  <CardContent className="relative p-8">
                    <div className="flex items-center mb-6">
                      <div className="relative">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={50}
                          height={50}
                          className="rounded-full ring-2 ring-blue-100 group-hover:ring-blue-200 transition-all duration-300"
                        />
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                      </div>
                      <div className="ml-4">
                        <div className="font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-gray-500 font-medium">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute -top-2 -left-2 text-blue-200 text-4xl font-serif">"</div>
                      <p className="text-gray-600 leading-relaxed italic pl-6 group-hover:text-gray-700 transition-colors duration-300">
                        {testimonial.quote}
                      </p>
                    </div>
                    
                    <div className="flex justify-end mt-4">
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="w-4 h-4 text-yellow-400">⭐</div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl animate-float animation-delay-2s"></div>
            <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-white/10 rounded-full blur-xl animate-float animation-delay-4s"></div>
          </div>
          
          <div className="container mx-auto px-6 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 leading-tight">
                Ready to Take Control of Your{" "}
                <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Finances?
                </span>
              </h2>
              
              <p className="text-blue-100 text-lg lg:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
                Join thousands of users who are already managing their finances with
                our AI-powered platform. Sign up today and start your journey towards
                financial freedom!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Link href="/dashboard">
                  <Button
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-8 py-4 text-lg rounded-full shadow-2xl hover:shadow-white/25 transform hover:scale-105 transition-all duration-300 group relative overflow-hidden"
                  >
                    <span className="relative z-10">Start Free Trial</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  </Button>
                </Link>
                
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white/30 text-black hover:bg-white/10 font-bold px-8 py-4 text-lg rounded-full backdrop-blur-sm transition-all duration-300"
                >
                  Watch Demo
                </Button>
              </div>
              
              <div className="flex justify-center items-center space-x-8 text-white/80 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 text-green-400">✓</div>
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 text-green-400">✓</div>
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 text-green-400">✓</div>
                  <span>Cancel anytime</span>
                  <span> Every time when you need</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes countup {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes progress-line {
          from { width: 0%; }
          to { width: 100%; }
        }
        
        @keyframes shadow-4xl {
          0% { box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); }
          100% { box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.35); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-countup {
          animation: countup 0.8s ease-out forwards;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-progress-line {
          animation: progress-line 3s ease-in-out infinite;
        }
        
        .shadow-4xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.35);
        }
        
        .animation-delay-2s {
          animation-delay: 2s;
        }
        
        .animation-delay-4s {
          animation-delay: 4s;
        }
        
        .animation-delay-1s {
          animation-delay: 1s;
        }
        
        .animation-delay-500ms {
          animation-delay: 0.5s;
        }
        
        .bg-grid-pattern {
          background-image: radial-gradient(circle, #e5e7eb 1px, transparent 1px);
          background-size: 20px 20px;
        }
        
        .bg-dot-pattern {
          background-image: radial-gradient(circle, #d1d5db 1px, transparent 1px);
          background-size: 15px 15px;
        }
        
        .bg-hexagon-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1' fill-rule='nonzero'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
      `}</style>
    </div>
  );
}