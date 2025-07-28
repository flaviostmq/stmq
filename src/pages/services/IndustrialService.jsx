import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Wrench, Settings, Award, Cog } from 'lucide-react';
import industrialImg1 from '../../assets/industrial_manutencao_1.jpg';
import industrialImg2 from '../../assets/industrial_manutencao_2.jpg';

const IndustrialService = () => {
  const services = [
    'Manutenção de relógios comparadores',
    'Reparo de blocos padrão',
    'Calibração de esquadros de precisão',
    'Manutenção de réguas e escalas',
    'Reparo de bases magnéticas',
    'Calibração de gabaritos',
    'Manutenção de suportes de medição',
    'Reparo de instrumentos especiais'
  ];

  const equipment = [
    {
      title: 'Relógios Comparadores',
      description: 'Manutenção completa de relógios comparadores analógicos e digitais, incluindo calibração e ajustes de precisão.',
      features: ['Calibração de escala', 'Ajuste de ponteiros', 'Substituição de mecanismos', 'Verificação de linearidade'],
      icon: <Cog className="w-8 h-8 text-blue-600" />
    },
    {
      title: 'Blocos Padrão',
      description: 'Serviços especializados em blocos padrão, incluindo limpeza, calibração e certificação de conformidade.',
      features: ['Limpeza especializada', 'Verificação dimensional', 'Certificação', 'Armazenamento adequado'],
      icon: <Settings className="w-8 h-8 text-blue-600" />
    },
    {
      title: 'Esquadros de Precisão',
      description: 'Manutenção e calibração de esquadros de precisão para garantir medições angulares exatas.',
      features: ['Verificação de esquadro', 'Ajustes de precisão', 'Calibração angular', 'Certificação'],
      icon: <Award className="w-8 h-8 text-blue-600" />
    },
    {
      title: 'Instrumentos Especiais',
      description: 'Reparo e manutenção de instrumentos metrológicos especiais e customizados para aplicações específicas.',
      features: ['Análise técnica', 'Reparo customizado', 'Calibração específica', 'Documentação técnica'],
      icon: <Wrench className="w-8 h-8 text-blue-600" />
    }
  ];

  const applications = [
    {
      industry: 'Automotiva',
      description: 'Instrumentos para controle de qualidade em peças automotivas',
      examples: ['Blocos padrão para motores', 'Relógios para eixos', 'Esquadros para chassis']
    },
    {
      industry: 'Aeroespacial',
      description: 'Equipamentos de alta precisão para componentes aeroespaciais',
      examples: ['Instrumentos de precisão', 'Gabaritos especiais', 'Blocos certificados']
    },
    {
      industry: 'Metalúrgica',
      description: 'Ferramentas de medição para processos metalúrgicos',
      examples: ['Relógios industriais', 'Esquadros robustos', 'Instrumentos resistentes']
    },
    {
      industry: 'Manufatura',
      description: 'Instrumentos para controle de qualidade em manufatura',
      examples: ['Equipamentos de linha', 'Instrumentos portáteis', 'Gabaritos de produção']
    }
  ];

  const process = [
    {
      step: '1',
      title: 'Avaliação Técnica',
      description: 'Análise detalhada do equipamento para identificar problemas e definir o escopo do reparo.'
    },
    {
      step: '2',
      title: 'Planejamento do Reparo',
      description: 'Elaboração de plano de manutenção específico considerando as características do equipamento.'
    },
    {
      step: '3',
      title: 'Execução Especializada',
      description: 'Realização dos reparos com técnicas especializadas e peças adequadas.'
    },
    {
      step: '4',
      title: 'Testes e Verificação',
      description: 'Testes funcionais e verificação de conformidade com especificações técnicas.'
    },
    {
      step: '5',
      title: 'Documentação',
      description: 'Emissão de relatório técnico e certificado de conformidade quando aplicável.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Equipamentos Industriais
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Manutenção especializada de equipamentos metrológicos industriais em geral voltados 
              para área mecânica, garantindo precisão e confiabilidade para seus processos.
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
                Soluções Industriais Completas
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Atendemos uma ampla gama de equipamentos metrológicos industriais, oferecendo 
                soluções técnicas especializadas para manter seus instrumentos funcionando 
                com a precisão necessária para seus processos produtivos.
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
                src={industrialImg1}
                alt="Manutenção de equipamentos industriais"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <img
                src={industrialImg2}
                alt="Reparo de instrumentos mecânicos"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Equipamentos Atendidos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Oferecemos serviços especializados para diversos tipos de equipamentos metrológicos industriais
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {equipment.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  {item.icon}
                  <h3 className="text-xl font-semibold text-gray-900 ml-3">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  {item.description}
                </p>
                <ul className="space-y-2">
                  {item.features.map((feature, featureIndex) => (
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

      {/* Applications */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Aplicações Industriais
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nossos serviços atendem diversos setores industriais com necessidades específicas
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applications.map((app, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {app.industry}
                </h3>
                <p className="text-gray-600 mb-4">
                  {app.description}
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  {app.examples.map((example, exampleIndex) => (
                    <li key={exampleIndex}>• {example}</li>
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
              Seguimos um processo estruturado para garantir a qualidade dos nossos serviços
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
              Diferenciais do Nosso Serviço
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Wrench className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Experiência Industrial
              </h3>
              <p className="text-gray-600">
                Ampla experiência em equipamentos industriais de diversos setores
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Settings className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Soluções Customizadas
              </h3>
              <p className="text-gray-600">
                Desenvolvemos soluções específicas para cada tipo de equipamento
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Qualidade Garantida
              </h3>
              <p className="text-gray-600">
                Todos os serviços incluem documentação técnica e garantia
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Precisa de manutenção em equipamentos industriais?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Entre em contato conosco e solicite uma avaliação técnica dos seus equipamentos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contato"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              Solicitar Avaliação
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

export default IndustrialService;

