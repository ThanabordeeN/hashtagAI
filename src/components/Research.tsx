import React from 'react'
import { Brain, Scale, Zap } from 'lucide-react'

const Research = () => {
  const researchAreas = [
    {
      icon: <Brain className="w-12 h-12 text-accent-color mb-4" />,
      title: 'LLM Models',
      description: 'Advancing language understanding and generation capabilities.',
    },
    {
      icon: <Zap className="w-12 h-12 text-accent-color mb-4" />,
      title: 'Stable Diffusion',
      description: 'Pushing the boundaries of image generation and manipulation.',
    },
    {
      icon: <Scale className="w-12 h-12 text-accent-color mb-4" />,
      title: 'Scaling Private LLMs',
      description: 'Optimizing large language models for business applications.',
    },
  ]

  return (
    <section id="research" className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">AI Research</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {researchAreas.map((area, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              {area.icon}
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{area.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Research