import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronRight, 
  Users, 
  Globe, 
  Database, 
  Shield, 
  BookOpen, 
  Settings,
  MapPin,
  Phone,
  Mail,
  Globe as WebIcon,
  Lightbulb,
  Target,
  Heart,
  CheckCircle,
  ArrowRight,
  User,
  Play,
  Award,
  Building,
  Code,
  Zap
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'pillars', 'how-we-work', 'services', 'projects', 'team', 'clients', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-rotate hero images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const heroImages = [
    'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200'
  ];

  const companyImages = [
    'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3184421/pexels-photo-3184421.jpeg?auto=compress&cs=tinysrgb&w=800'
  ];

  const projectImages = [
    'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/590020/pexels-photo-590020.jpg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/574071/pexels-photo-574071.jpg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800'
  ];

  const teamImages = [
    'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/3184635/pexels-photo-3184635.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/3184644/pexels-photo-3184644.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/3184645/pexels-photo-3184645.jpeg?auto=compress&cs=tinysrgb&w=400'
  ];

  const services = [
    { icon: Globe, title: 'GIS & Mapping', description: 'Delivering smart geospatial platforms to support planning and decision-making.' },
    { icon: Settings, title: 'Web & System Development', description: 'Designing scalable, user-friendly applications for businesses and communities.' },
    { icon: Database, title: 'Data Analytics', description: 'Turning raw data into actionable insights for smarter strategies.' },
    { icon: Shield, title: 'IT Support & Cybersecurity', description: 'Ensuring smooth operations and data protection.' },
    { icon: BookOpen, title: 'Training & Capacity Building', description: 'Building digital skills for youth, institutions, and organizations.' },
    { icon: Lightbulb, title: 'Technology Consultancy', description: 'Advising clients on adopting future-proof technologies.' }
  ];

  const pillars = [
    { title: 'Reliability', description: 'Consistent performance with dependable delivery.', icon: CheckCircle },
    { title: 'Quality', description: 'Modern engineering and thorough testing in every solution.', icon: Target },
    { title: 'Innovation', description: 'Developing forward-looking solutions for local challenges.', icon: Lightbulb },
    { title: 'Integrity', description: 'Building trust through transparency and accountability.', icon: Heart },
    { title: 'Collaboration', description: 'Partnering with clients and communities to co-create impact.', icon: Users }
  ];

  const workProcess = [
    { step: '1', title: 'Discover & Design', description: 'We listen and design solutions tailored to real needs.' },
    { step: '2', title: 'Build & Validate', description: 'Agile development with frequent demos and testing.' },
    { step: '3', title: 'Launch & Grow', description: 'Deployment, training, and ongoing support for scalability.' }
  ];

  const projects = [
    'Smart Mapping & GIS Platforms',
    'Business Process Automation Systems',
    'ICT Infrastructure & Cloud Solutions',
    'Community-Based Tech Solutions',
    'Research and Development in Spatial Data'
  ];

  const teamMembers = [
    { name: 'CEO & Founder', role: 'Strategic Leadership', expertise: 'Technology Vision & Innovation' },
    { name: 'Lead Developer', role: 'Software Engineering', expertise: 'Full-Stack Development' },
    { name: 'GIS Specialist', role: 'Geospatial Solutions', expertise: 'Mapping & Spatial Analysis' },
    { name: 'Data Analyst', role: 'Business Intelligence', expertise: 'Analytics & Insights' },
    { name: 'IT Security Expert', role: 'Cybersecurity', expertise: 'System Protection' },
    { name: 'Training Coordinator', role: 'Capacity Building', expertise: 'Skills Development' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-teal-500 rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                ZenjiTech
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'services', label: 'Services' },
                { id: 'team', label: 'Team' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-blue-600 ${
                    activeSection === item.id ? 'text-blue-600' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'services', label: 'Services' },
                { id: 'team', label: 'Team' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-20 pb-16 overflow-hidden">
        {/* Animated Background Images */}
        <div className="absolute inset-0 z-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-20' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt={`Hero background ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/60 to-teal-800/80"></div>
            </div>
          ))}
        </div>
        
        {/* Floating Animation Elements */}
        <div className="absolute inset-0 z-10">
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full animate-float-slow"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-teal-400/20 rounded-full animate-float-medium"></div>
          <div className="absolute bottom-40 left-20 w-12 h-12 bg-blue-300/20 rounded-full animate-float-fast"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-teal-300/20 rounded-full animate-float-slow"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-20 text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 animate-fade-in drop-shadow-lg">
              Innovating the Future Through{' '}
              <span className="bg-gradient-to-r from-blue-300 to-teal-300 bg-clip-text text-transparent">
                Technology
              </span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-12 leading-relaxed animate-slide-up drop-shadow-md">
              At ZenjiTech, we believe technology should empower people and organizations to make better, 
              faster, and smarter decisions. From custom-built platforms to geospatial insights, we design 
              solutions that are modern, scalable, and reliable.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <button
                onClick={() => scrollToSection('services')}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-xl font-medium hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="px-8 py-4 border-2 border-white text-white rounded-xl font-medium hover:bg-white hover:text-blue-600 transition-all duration-300 backdrop-blur-sm"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Message */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-r from-blue-600 to-teal-500 rounded-3xl p-8 md:p-12 text-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full translate-y-24 -translate-x-24"></div>
            </div>
            
            <div className="relative z-10 grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <h2 className="text-3xl font-bold mb-6">Message from Our CEO</h2>
                <blockquote className="text-lg leading-relaxed mb-6">
                  "As CEO, I envision ZenjiTech not just as a service provider, but as a partner that nurtures 
                  innovation and inspires a tech-driven generation in Zanzibar. Together, let's build the future 
                  of technology for Zanzibar and beyond."
                </blockquote>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">CEO & Founder</p>
                    <p className="text-blue-100">ZenjiTech</p>
                  </div>
                </div>
              </div>
              
              {/* CEO Image */}
              <div className="relative">
                <div className="w-48 h-48 mx-auto relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-full animate-pulse"></div>
                  <img
                    src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="CEO"
                    className="w-full h-full object-cover rounded-full border-4 border-white/30 shadow-2xl hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About ZenjiTech</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our values are rooted in community empowerment, technological excellence, and creating 
              solutions that address both local and global challenges.
            </p>
          </div>

          {/* Company Images Gallery */}
          <div className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {companyImages.map((image, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl aspect-square hover:scale-105 transition-all duration-500"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <img
                    src={image}
                    alt={`Company image ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Play className="w-6 h-6" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-500 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become Zanzibar's top technology hub by fostering innovation, promoting digital 
                transformation, and empowering communities through smart solutions.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                ZenjiTech is committed to delivering high-quality geospatial, ICT, and software solutions 
                that foster growth, enhance decision-making, and promote sustainability through expertise, 
                creativity, and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Pillars */}
      <section id="pillars" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Pillars</h2>
            <p className="text-xl text-gray-600">The foundation of everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <div key={pillar.title} className="group text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <pillar.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{pillar.title}</h3>
                <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section id="how-we-work" className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">How We Work</h2>
            <p className="text-xl text-gray-600">Our methodology ensures every project moves from idea to impact efficiently</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {workProcess.map((process, index) => (
              <div key={process.step} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full flex items-center justify-center mb-6 text-white font-bold text-xl">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{process.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{process.description}</p>
                </div>
                {index < workProcess.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ChevronRight className="w-8 h-8 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive technology solutions for modern challenges</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={service.title} className="group bg-white border rounded-2xl p-8 hover:shadow-xl hover:border-blue-200 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Projects</h2>
            <p className="text-xl text-gray-600">Innovative solutions across multiple domains</p>
          </div>

          {/* Project Images with Overlay */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projectImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl aspect-video hover:scale-105 transition-all duration-500 shadow-lg"
              >
                <img
                  src={image}
                  alt={`Project ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-lg font-bold mb-2">{projects[index]}</h3>
                  <div className="flex items-center space-x-2">
                    <Code className="w-4 h-4" />
                    <span className="text-sm">View Project</span>
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Zap className="w-5 h-5 text-white" />
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full"></div>
                  <h3 className="font-semibold text-gray-900">{project}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Meet The Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team is a blend of engineers, developers, GIS experts, and ICT specialists passionate about 
              solving challenges and driving transformation in Zanzibar and beyond.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group text-center">
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto relative group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={teamImages[index]}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full border-4 border-gradient-to-r from-blue-600 to-teal-500 shadow-xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Building className="w-4 h-4 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.expertise}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">We Are More Than Tech Experts</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                We are innovators with a shared vision to empower Zanzibar's digital future through 
                collaboration, expertise, and passion for technological excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section id="clients" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Clients</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with public agencies, NGOs, private companies, and academic institutions to co-create 
              solutions that bring lasting value. Our portfolio includes collaborations with leading 
              organizations in development, governance, and education.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {['Public Agencies', 'NGOs', 'Private Companies', 'Academic Institutions'].map((client, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900">{client}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-gradient-to-br from-blue-600 to-teal-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
            <p className="text-xl text-blue-100">Ready to transform your ideas into innovative solutions?</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Address</h3>
              <p className="text-blue-100">P.O. Box 1234, Zanzibar</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-blue-100">+255 675 074 254</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-blue-100">info@zenjitech.co.tz</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                <WebIcon className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Website</h3>
              <p className="text-blue-100">www.zenjitech.co.tz</p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg text-blue-100 mb-8">
              Let's build the future of technology for Zanzibar and beyond, together.
            </p>
            <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-medium hover:bg-gray-100 transition-colors duration-300">
              Start Your Project
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-teal-500 rounded-lg flex items-center justify-center">
                <Globe className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold">ZenjiTech</span>
            </div>
            <p className="text-gray-400">© 2024 ZenjiTech. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;