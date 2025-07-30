import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Award, Clock, Target, CheckCircle, ArrowRight } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '25+', label: 'Anos de Experiência' },
    { number: '500+', label: 'Equipamentos Reparados' },
    { number: '100+', label: 'Clientes Satisfeitos' },
    { number: '24h', label: 'Tempo de Resposta' }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: 'Precisão',
      description: 'Garantimos a máxima precisão em todos os nossos serviços de manutenção e calibração.'
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: 'Qualidade',
      description: 'Utilizamos as melhores práticas e equipamentos para assegurar a qualidade dos serviços.'
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: 'Agilidade',
      description: 'Atendimento rápido e eficiente para minimizar o tempo de parada dos seus equipamentos.'
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: 'Confiança',
      description: 'Construímos relacionamentos duradouros baseados na confiança e transparência.'
    }
  ];

  const services = [
    'Reparo de equipamentos metrológicos em geral',
    'Calibração e ajustes de precisão',
    'Treinamentos especializados',
    'Consultoria em sistemas metrológicos',
    'Manutenção preventiva',
    'Certificação de equipamentos'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre a STMQ
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Conheça nossa história e compromisso com a excelência em metrologia e qualidade
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Excelência em Metrologia e Qualidade
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  A STMQ é uma empresa especializada em serviços técnicos de metrologia e qualidade, 
                  com foco em reparo de equipamentos metrológicos voltados para a área mecânica industrial.
                </p>
                <p>
                  Com uma equipe de profissionais altamente qualificados e liderada por Flávio Miranda de Barros, 
                  nosso Diretor Técnico, buscamos oferecer soluções completas e personalizadas para as 
                  necessidades de cada cliente.
                </p>
                <p>
                  Nossa missão é garantir a precisão e confiabilidade dos instrumentos de medição, 
                  contribuindo para a qualidade dos processos industriais de nossos clientes.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-700 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Director Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Diretor Técnico
            </h2>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Flávio Miranda de Barros
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Diretor Técnico da STMQ
              </p>
              <p className="text-gray-700 leading-relaxed">
                Com mais de 10 anos de experiência no mercado de metrologia, Flávio Miranda de Barros 
                é especialista em reparos, treinamentos e consultoria em sistemas metrológicos e qualidade. 
                Sua expertise técnica e dedicação à excelência são os pilares que sustentam a qualidade 
                dos serviços oferecidos pela STMQ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos Valores
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Os princípios que guiam nosso trabalho e relacionamento com os clientes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                O que oferecemos
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Nossos serviços abrangem todas as necessidades em metrologia e qualidade, 
                desde reparos especializados até consultoria técnica.
              </p>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-blue-600 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">
                Precisa de nossos serviços?
              </h3>
              <p className="text-blue-100 mb-6">
                Entre em contato conosco e descubra como podemos ajudar sua empresa 
                a alcançar a excelência em metrologia.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="font-semibold mr-2">Telefone:</span>
                  <span>(11) 99797-5039</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold mr-2">E-mail:</span>
                  <span>flavio@stmq.com.br</span>
                </div>
                <Link
                  to="/contato"
                  className="inline-flex items-center bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors mt-4"
                >
                  Fale Conosco
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

