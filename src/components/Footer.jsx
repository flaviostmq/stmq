import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold text-blue-400 mb-4">STMQ</div>
            <p className="text-gray-300 mb-4">
              Serviços Técnicos em Metrologia e Qualidade. Especialistas em reparo de equipamentos de medição, 
              treinamentos e consultoria em sistemas metrológicos.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone size={16} className="mr-2 text-blue-400" />
                <span>(11) 99797-5039</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-2 text-blue-400" />
                <span>flavio@stmq.com.br</span>
              </div>
              <div className="flex items-center">
                <MapPin size={16} className="mr-2 text-blue-400" />
                <span>São Paulo, SP</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/servicos/paquimetros" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Paquímetros
                </Link>
              </li>
              <li>
                <Link to="/servicos/micrometros" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Micrômetros
                </Link>
              </li>
              <li>
                <Link to="/servicos/equipamentos-industriais" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Equipamentos Industriais
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 STMQ - Serviços Técnicos em Metrologia e Qualidade. Todos os direitos reservados.
          </p>
          <p className="text-gray-400 mt-2">
            Diretor Técnico: Flávio Miranda de Barros
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

