import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Award, Clock } from 'lucide-react';
import paquimetroImg from '../assets/paquimetro_manutencao_1.webp';
import micrometroImg from '../assets/micrometro_manutencao_1.jpg';
import industrialImg from '../assets/industrial_manutencao_1.jpg';

const Home = () => {
  const services = [
    {
      title: 'Reparo de Paquímetros',
      description: 'Manutenção especializada em paquímetros digitais e analógicos, garantindo precisão e confiabilidade.',
      image: paquimetroImg,
      link: '/servicos/paquimetros'
    },
    {
      title: 'Reparo de Micrômetros',
      description: 'Serviços técnicos especializados em micrômetros externos, internos e de profundidade.',
      image: micrometroImg,
      link: '/servicos/micrometros'
    },
    {
      title: 'Equipamentos Industriais',
      description: 'Manutenção de equipamentos metrológicos industriais em geral para área mecânica.',
      image: industrialImg,
      link: '/servicos/equipamentos-industriais'
    }
  ];

  const features = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: 'Mais de 25 anos de experiência',
      description: 'Experiência consolidada no mercado de metrologia e qualidade'
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: 'Equipe técnica qualificada',
      description: 'Profissionais especializados e certificados em metrologia'
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: 'Atendimento rápido',
      description: 'Soluções ágeis para suas necessidades metrológicas'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              STMQ
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-blue-100">
              Serviços Técnicos em Metrologia e Qualidade
            </p>
            <p className="text-lg md:text-xl mb-8 text-blue-200 max-w-3xl mx-auto">
              Especialistas em reparo de equipamentos de medição, treinamentos e consultoria 
              em sistemas metrológicos para área mecânica industrial
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contato"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
              >
                Entre em Contato
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/servicos"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Nossos Serviços
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por que escolher a STMQ?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Oferecemos soluções completas em metrologia com qualidade e confiabilidade
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos Serviços
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Oferecemos soluções especializadas para diferentes tipos de equipamentos metrológicos
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <Link
                    to={service.link}
                    className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center"
                  >
                    Saiba mais
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Precisa de manutenção em seus equipamentos?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Entre em contato conosco e solicite um orçamento personalizado
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contato"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Solicitar Orçamento
            </Link>
            <a
              href="tel:+5511997975039"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              (11) 99797-5039
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

