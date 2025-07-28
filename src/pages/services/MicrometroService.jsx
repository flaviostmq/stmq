import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Wrench, Settings, Award } from 'lucide-react';
import micrometroImg1 from '../../assets/micrometro_manutencao_1.jpg';
import micrometroImg2 from '../../assets/micrometro_manutencao_2.webp';

const MicrometroService = () => {
  const services = [
    'Calibração de alta precisão',
    'Ajuste de parafuso micrométrico',
    'Substituição de componentes',
    'Reparo de displays digitais',
    'Limpeza e lubrificação',
    'Ajuste de zero absoluto',
    'Verificação de linearidade',
    'Manutenção preventiva'
  ];

  const types = [
    {
      title: 'Micrômetros Externos',
      description: 'Reparo e calibração de micrômetros para medições externas, incluindo ajustes de precisão e substituição de componentes.',
      features: ['Medição externa', 'Parafuso micrométrico', 'Escala graduada', 'Catraca']
    },
    {
      title: 'Micrômetros Internos',
      description: 'Manutenção especializada em micrômetros para medições internas, com foco em precisão e confiabilidade.',
      features: ['Medição interna', 'Hastes extensoras', 'Ajuste fino', 'Calibração específica']
    },
    {
      title: 'Micrômetros de Profundidade',
      description: 'Serviços técnicos para micrômetros de profundidade, garantindo medições precisas em diferentes aplicações.',
      features: ['Medição de profundidade', 'Base de apoio', 'Hastes intercambiáveis', 'Precisão micrométrica']
    }
  ];

  const process = [
    {
      step: '1',
      title: 'Inspeção Inicial',
      description: 'Análise detalhada do micrômetro para identificar desgastes, desalinhamentos e necessidades de reparo.'
    },
    {
      step: '2',
      title: 'Desmontagem Cuidadosa',
      description: 'Desmontagem técnica do instrumento preservando componentes e identificando peças a serem substituídas.'
    },
    {
      step: '3',
      title: 'Limpeza e Reparo',
      description: 'Limpeza profunda, lubrificação e reparo ou substituição de componentes danificados.'
    },
    {
      step: '4',
      title: 'Montagem e Ajustes',
      description: 'Remontagem precisa com ajustes finos do parafuso micrométrico e verificação de funcionamento.'
    },
    {
      step: '5',
      title: 'Calibração Final',
      description: 'Calibração com padrões rastreáveis e emissão de certificado de conformidade.'
    }
  ];

  const specifications = [
    {
      title: 'Precisão',
      value: '±0,001mm',
      description: 'Garantimos precisão micrométrica em todos os reparos'
    },
    {
      title: 'Faixa de Medição',
      value: '0-300mm',
      description: 'Atendemos micrômetros de diversas faixas de medição'
    },
    {
      title: 'Tempo de Reparo',
      value: '3-7 dias',
      description: 'Prazo médio para conclusão dos serviços'
    },
    {
      title: 'Garantia',
      value: '6 meses',
      description: 'Garantia completa em todos os serviços realizados'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Reparo de Micrômetros
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Serviços técnicos especializados em manutenção e calibração de micrômetros externos, 
              internos e de profundidade, garantindo a máxima precisão para suas medições.
            </p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Precisão Micrométrica
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Os micrômetros são instrumentos de alta precisão que requerem cuidados especiais. 
                Nossa equipe técnica possui a experiência e conhecimento necessários para manter 
                seus micrômetros funcionando com a máxima precisão e confiabilidade.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <img
                src={micrometroImg1}
                alt="Manutenção de micrômetro"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <img
                src={micrometroImg2}
                alt="Calibração de micrômetro"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Especificações Técnicas
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trabalhamos com os mais altos padrões de qualidade e precisão
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {specifications.map((spec, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {spec.value}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {spec.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {spec.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Micrometers */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tipos de Micrômetros Atendidos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Oferecemos serviços especializados para todos os tipos de micrômetros
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {types.map((type, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {type.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {type.description}
                </p>
                <ul className="space-y-2">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Processo de Manutenção
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Seguimos um protocolo rigoroso para garantir a qualidade dos nossos serviços
            </p>
          </div>
          <div className="space-y-8">
            {process.map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por que escolher nossos serviços?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Wrench className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Expertise Técnica
              </h3>
              <p className="text-gray-600">
                Mais de 10 anos de experiência em reparos de instrumentos de precisão
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Settings className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Equipamentos Calibrados
              </h3>
              <p className="text-gray-600">
                Utilizamos padrões rastreáveis para garantir a precisão das calibrações
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Certificação Completa
              </h3>
              <p className="text-gray-600">
                Emitimos certificados de calibração com rastreabilidade garantida
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Seus micrômetros precisam de manutenção?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Entre em contato conosco e garanta a precisão dos seus instrumentos de medição
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contato"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              Solicitar Orçamento
              <ArrowRight className="ml-2 w-5 h-5" />
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

export default MicrometroService;

