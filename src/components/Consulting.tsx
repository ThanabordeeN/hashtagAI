import React from 'react'
import { Briefcase, TrendingUp, Users, Lightbulb, BarChart } from 'lucide-react'

const ConsultingService = ({ icon, title, description }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    {icon}
    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{title}</h3>
    <p className="text-gray-700 dark:text-gray-300">{description}</p>
  </div>
)

const Consulting = () => {
  const consultingServices = [
    {
      icon: <Briefcase className="w-12 h-12 text-accent-color mb-4" />,
      title: 'Strategy Consulting',
      description: 'Develop long-term AI strategies aligned with business goals.',
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-accent-color mb-4" />,
      title: 'Implementation Consulting',
      description: 'Guide the integration of AI solutions into existing systems.',
    },
    {
      icon: <Users className="w-12 h-12 text-accent-color mb-4" />,
      title: 'Change Management',
      description: 'Facilitate smooth adoption of AI technologies within organizations.',
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-accent-color mb-4" />,
      title: 'Innovation Consulting',
      description: 'Identify opportunities for AI-driven innovation in products and services.',
    },
    {
      icon: <BarChart className="w-12 h-12 text-accent-color mb-4" />,
      title: 'Performance Optimization',
      description: 'Enhance business processes and efficiency through AI-powered insights.',
    },
  ]

  return (
    <section id="consulting" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">AI Consulting Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {consultingServices.map((service, index) => (
            <ConsultingService key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Consulting