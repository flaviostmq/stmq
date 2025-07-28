import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Wrench, Settings, Award } from 'lucide-react';
import paquimetroImg1 from '../../assets/paquimetro_manutencao_1.webp';
import paquimetroImg2 from '../../assets/paquimetro_manutencao_2.jpg';

const PaquimetroService = () => {
  const services = [
    'Calibração e ajustes de precisão',
    'Substituição de componentes eletrônicos',
    'Reparo de displays digitais',
    'Limpeza e lubrificação de mecanismos',
    'Ajuste de zero e linearidade',
    'Substituição de baterias',
    'Reparo de cabos e conectores',
    'Manutenção preventiva'
  ];

  const types = [
    {
      title: 'Paquímetros Digitais',
      description: 'Reparo e calibração de paquímetros com display digital, incluindo ajustes eletrônicos e substituição de componentes.',
      features: ['Display LCD/LED', 'Funções de medição', 'Calibração eletrônica', 'Teste de precisão']
    },
    {
      title: 'Paquímetros Analógicos',
      description: 'Manutenção de paquímetros com relógio comparador, focando em ajustes mecânicos e calibração.',
      features: ['Relógio comparador', 'Ajustes mecânicos', 'Calibração manual', 'Lubrificação']
    },
    {
      title: 'Paquímetros Universais',
      description: 'Serviços especializados para paquímetros universais com diferentes escalas e aplicações.',
      features: ['Múltiplas escalas', 'Medições internas/externas', 'Profundidade', 'Ressaltos']
    }
  ];

  const process = [
    {
      step: '1',
      title: 'Recebimento e Diagnóstico',
      description: 'Análise completa do equipamento para identificar problemas e necessidades de reparo.'
    },
    {
      step: '2',
      title: 'Orçamento Detalhado',
      description: 'Elaboração de orçamento transparente com descrição dos serviços necessários.'
    },
    {
      step: '3',
      title: 'Execução do Reparo',
      description: 'Realização dos reparos com peças originais e técnicas especializadas.'
    },
    {
      step: '4',
      title: 'Calibração e Testes',
      description: 'Calibração final e testes de precisão para garantir a qualidade do serviço.'
    },
    {
      step: '5',
      title: 'Certificação',
      description: 'Emissão de certificado de calibração e relatório técnico do serviço realizado.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Reparo de Paquímetros
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Serviços especializados em manutenção e calibração de paquímetros digitais e analógicos, 
              garantindo precisão e confiabilidade para seus instrumentos de medição.
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
                Especialistas em Paquímetros
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Com mais de 10 anos de experiência, oferecemos serviços completos de manutenção 
                para paquímetros de todas as marcas e modelos. Nossa equipe técnica especializada 
                garante a precisão e durabilidade dos seus instrumentos.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.slice(0, 8).map((service, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <img
                src={paquimetroImg1}
                alt="Manutenção de paquímetro"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <img
                src={paquimetroImg2}
                alt="Reparo de paquímetro digital"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Types of Calipers */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tipos de Paquímetros Atendidos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trabalhamos com todos os tipos de paquímetros, oferecendo soluções específicas para cada modelo
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
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nosso Processo de Reparo
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Seguimos um processo rigoroso para garantir a qualidade e precisão dos nossos serviços
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Diferenciais do Nosso Serviço
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Wrench className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Técnicos Especializados
              </h3>
              <p className="text-gray-600">
                Equipe com vasta experiência em reparos de instrumentos de precisão
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Settings className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Equipamentos Modernos
              </h3>
              <p className="text-gray-600">
                Utilizamos equipamentos de última geração para calibração e testes
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Garantia de Qualidade
              </h3>
              <p className="text-gray-600">
                Todos os serviços incluem garantia e certificado de calibração
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Precisa reparar seus paquímetros?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Entre em contato conosco e solicite um orçamento para reparo dos seus instrumentos
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

export default PaquimetroService;

