
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
    <div className='mt-40'>
      <HeroSection />
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((statsData, index) => (
              <div key={index} className="stats-item text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2" >
                  {statsData.value}
                </div>
                <div className="text-gray-600">{statsData.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className=" py-20 bg-white">
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">
            Everything you need to manage finances
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((feature, index) => (
              <Card key={index} classsName="p-6">
                <CardContent className="space-y-4 pt-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p classname="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className=" py-20 bg-blue-50">
        <div>
          <h2 className="text-3xl font-bold text-center mb-16">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3  gap-8">
            {howItWorksData.map((step, index) => (
              <div key={index}>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>

            ))}
          </div>
        </div>
      </section>
      <section className=" py-20 bg-white">
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <Card key={index} classsName="p-6">
                <CardContent className="pt-4">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="rounded-full mb-4"
                    />
                    <div className="ml-4">
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">{testimonial.quote}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className=" py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center ">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Take Control of Your finances
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto"> 
            {" "}
            Join thousands of users who are already managing their finances with
            our AI-powered platform. Sign up today and start your journey towards
            financial freedom!
          </p>
          <Link href="/dashboard">
            <Button
             size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 animate-bounce">
             Start Free Trail
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}