import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Wrench, Settings, Award } from 'lucide-react';
import paquimetroImg from '../assets/paquimetro_manutencao_1.webp';
import micrometroImg from '../assets/micrometro_manutencao_1.jpg';
import industrialImg from '../assets/industrial_manutencao_1.jpg';

const Services = () => {
  const services = [
    {
      title: 'Reparo de Paquímetros',
      description: 'Manutenção especializada em paquímetros digitais e analógicos. Realizamos calibração, ajustes de precisão, substituição de componentes e reparos em geral.',
      image: paquimetroImg,
      link: '/servicos/paquimetros',
      features: [
        'Paquímetros digitais e analógicos',
        'Calibração e ajustes de precisão',
        'Substituição de componentes',
        'Limpeza e lubrificação'
      ]
    },
    {
      title: 'Reparo de Micrômetros',
      description: 'Serviços técnicos especializados em micrômetros externos, internos e de profundidade. Garantimos a precisão e confiabilidade dos seus instrumentos.',
      image: micrometroImg,
      link: '/servicos/micrometros',
      features: [
        'Micrômetros externos e internos',
        'Micrômetros de profundidade',
        'Ajustes e calibração',
        'Manutenção preventiva'
      ]
    },
    {
      title: 'Equipamentos Industriais',
      description: 'Manutenção de equipamentos metrológicos industriais em geral voltados para área mecânica. Atendemos diversos tipos de instrumentos de medição.',
      image: industrialImg,
      link: '/servicos/equipamentos-industriais',
      features: [
        'Relógios comparadores',
        'Blocos padrão',
        'Esquadros de precisão',
        'Outros instrumentos mecânicos'
      ]
    }
  ];

  const additionalServices = [
    {
      icon: <Wrench className="w-8 h-8 text-blue-600" />,
      title: 'Treinamentos',
      description: 'Capacitamos sua equipe com treinamentos especializados em sistemas metrológicos e de qualidade.'
    },
    {
      icon: <Settings className="w-8 h-8 text-blue-600" />,
      title: 'Consultoria',
      description: 'Oferecemos consultoria especializada em sistemas metrológicos e de qualidade para sua empresa.'
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: 'Certificação',
      description: 'Emitimos certificados de calibração e manutenção para seus equipamentos metrológicos.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nossos Serviços
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Oferecemos soluções completas em metrologia e qualidade para garantir 
              a excelência dos seus processos industriais
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center`}>
                <div className="lg:w-1/2">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 lg:h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="lg:w-1/2 space-y-6">
                  <h2 className="text-3xl font-bold text-gray-900">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-600">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.link}
                    className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Saiba mais
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Serviços Complementares
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Além dos reparos, oferecemos serviços completos para atender todas as suas necessidades em metrologia
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Precisa de nossos serviços?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Entre em contato conosco e solicite um orçamento personalizado para suas necessidades
          </p>
          <Link
            to="/contato"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
          >
            Solicitar Orçamento
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;

