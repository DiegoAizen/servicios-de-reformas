"use client";

import { useState } from "react";
import { Menu, X, Phone, Mail, MapPin, Hammer, Droplets, Paintbrush, CheckCircle, Clock, Shield, Users } from "lucide-react";

const Navigation_section = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Hammer className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-gray-800">Reformas<span className="text-primary">Constructivas</span></span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-primary font-medium">Inicio</a>
            <a href="#servicios" className="text-gray-700 hover:text-primary font-medium">Servicios</a>
            <a href="#proyectos" className="text-gray-700 hover:text-primary font-medium">Proyectos</a>
            <a href="#contacto" className="text-gray-700 hover:text-primary font-medium">Contacto</a>
          </div>
          
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#inicio" className="text-gray-700 hover:text-primary font-medium">Inicio</a>
              <a href="#servicios" className="text-gray-700 hover:text-primary font-medium">Servicios</a>
              <a href="#proyectos" className="text-gray-700 hover:text-primary font-medium">Proyectos</a>
              <a href="#contacto" className="text-gray-700 hover:text-primary font-medium">Contacto</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const Hero_section = () => {
  return (
    <section id="inicio" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Transformamos tus <span className="text-primary">espacios</span> con calidad y profesionalismo
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Especialistas en reformas integrales, construcción, fontanería y pintura. Más de 15 años creando hogares y espacios comerciales excepcionales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition duration-300">
              Solicitar Presupuesto
            </button>
            <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition duration-300">
              Ver Proyectos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services_section = () => {
  const services = [
    {
      icon: <Hammer className="h-10 w-10" />,
      title: "Reformas Integrales",
      description: "Transformamos completamente tu espacio, desde la estructura hasta los acabados finales.",
      features: ["Diseño personalizado", "Gestión de permisos", "Coordinación de gremios"]
    },
    {
      icon: <Droplets className="h-10 w-10" />,
      title: "Fontanería Profesional",
      description: "Instalación y reparación de sistemas de agua, calefacción y saneamiento.",
      features: ["Urgencias 24h", "Instalaciones nuevas", "Mantenimiento preventivo"]
    },
    {
      icon: <Paintbrush className="h-10 w-10" />,
      title: "Pintura y Acabados",
      description: "Aplicación profesional de pintura y tratamientos especiales para interiores y exteriores.",
      features: ["Preparación de superficies", "Pintura ecológica", "Acabados decorativos"]
    }
  ];

  return (
    <section id="servicios" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ofrecemos soluciones completas para todos tus proyectos de construcción y reforma
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition duration-300">
              <div className="text-primary mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Features_section = () => {
  const features = [
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Entrega Puntual",
      description: "Cumplimos rigurosamente con los plazos establecidos"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Garantía Total",
      description: "Todos nuestros trabajos incluyen garantía por escrito"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Equipo Experto",
      description: "Profesionales certificados con años de experiencia"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact_section = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("¡Gracias por tu mensaje! Te contactaremos pronto.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contacta con Nosotros</h2>
            <p className="text-gray-600">Solicita un presupuesto sin compromiso</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2">Nombre completo</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Tu nombre"
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="tu@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2">Teléfono</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="+34 600 000 000"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Mensaje</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Describe tu proyecto..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition duration-300"
                >
                  Enviar Solicitud
                </button>
              </form>
            </div>
            
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Información de Contacto</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-primary mt-1 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">Teléfono</p>
                      <p className="text-gray-600">+34 900 123 456</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-primary mt-1 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-600">info@reformasconstructivas.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-primary mt-1 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">Oficina Central</p>
                      <p className="text-gray-600">Calle Construcción, 123, 28001 Madrid</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-primary text-white rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Horario de Atención</h3>
                <div className="space-y-2">
                  <p>Lunes a Viernes: 8:00 - 20:00</p>
                  <p>Sábados: 9:00 - 14:00</p>
                  <p>Urgencias 24h: +34 600 123 456</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer_section = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center space-x-2 mb-4">
              <Hammer className="h-8 w-8 text-accent" />
              <span className="text-2xl font-bold">Reformas<span className="text-accent">Constructivas</span></span>
            </div>
            <p className="text-gray-400">Transformando espacios desde 2008</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 mb-2">© 2024 Reformas Constructivas. Todos los derechos reservados.</p>
            <p className="text-gray-400">Licencia de construcción: C-123456789</p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>Servicios profesionales de reformas, construcción, fontanería y pintura en toda España</p>
        </div>
      </div>
    </footer>
  );
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation_section />
      <Hero_section />
      <Services_section />
      <Features_section />
      <Contact_section />
      <Footer_section />
    </main>
  );
}