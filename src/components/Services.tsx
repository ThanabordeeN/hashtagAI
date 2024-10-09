import React from 'react'
import { Code, Cpu, Lightbulb } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: <Cpu className="w-12 h-12 text-accent-color mb-4" />,
      title: 'Product Development',
      description: 'We create state-of-the-art AI products tailored to your business needs.',
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-accent-color mb-4" />,
      title: 'AI Research',
      description: 'Our team conducts cutting-edge research in LLM models and Stable Diffusion.',
    },
    {
      icon: <Code className="w-12 h-12 text-accent-color mb-4" />,
      title: 'AI Consulting',
      description: 'Expert guidance to help your business leverage the power of AI effectively.',
    },
  ]

  return (
    <section id="products" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              {service.icon}
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{service.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services